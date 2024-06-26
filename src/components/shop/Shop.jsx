import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/shop.css";
import Cart from "./Cart.jsx";
import ShopItem from "./ShopItem.jsx";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);

  const totalCart = parseFloat(
    shoppingCart
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2),
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (!filterCategory) {
      fetch("https://fakestoreapi.com/products")
        .then(async (res) => await res.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(setLoading(false));
    } else {
      fetch(`https://fakestoreapi.com/products/category/${filterCategory}`)
        .then(async (res) => await res.json())
        .then((json) => setData(json))
        .catch((error) => setError(error))
        .finally(setLoading(false));
    }
  }, [filterCategory]);

  const addItemToCart = (item, quantity) => {
    if (shoppingCart.filter((x) => x.name === item.title).length === 0) {
      setShoppingCart((prev) => [
        ...prev,
        {
          name: item.title,
          price: item.price,
          quantity: Number(quantity),
          image: item.image,
        },
      ]);
    } else {
      const itemIndex = shoppingCart.findIndex((x) => x.name === item.title);
      const updatedCart = [...shoppingCart];
      updatedCart[itemIndex].quantity += Number(quantity);
      setShoppingCart(updatedCart);
    }
  };

  const handleRemove = (item) => {
    setShoppingCart(shoppingCart.filter((x) => x.name !== item.name));
  };

  const handleChangeCategory = (category) => {
    setFilterCategory(category);
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;
  return (
    <div className="shop">
      <main>
        <div className="categories">
          <ul>
            <li key={"all"}>
              <button onClick={() => handleChangeCategory(null)}>ALL</button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button onClick={() => handleChangeCategory(category)}>
                  {String(category).toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="shop-main">
          {data.map((item) => (
            <ShopItem key={item.id} item={item} addItemToCart={addItemToCart} />
          ))}
        </div>
      </main>
      <Cart
        shoppingCart={shoppingCart}
        totalCart={totalCart}
        handleRemove={handleRemove}
      />
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Shop;
