import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/shop.css";
import ShopSidebar from "./ShopSidebar.jsx";
import Cart from "./Cart.jsx";
import ShopItem from "./ShopItem.jsx";

function Shop() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  const totalCart = parseFloat(
    shoppingCart
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2),
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  const addItemToCart = (item, quantity) => {
    if (shoppingCart.filter((x) => x.name === item.title).length === 0) {
      setShoppingCart((prev) => [
        ...prev,
        { name: item.title, price: item.price, quantity: Number(quantity) },
      ]);
    } else {
      const itemIndex = shoppingCart.findIndex((x) => x.name === item.title);
      const updatedCart = [...shoppingCart];
      updatedCart[itemIndex].quantity += Number(quantity);
      setShoppingCart(updatedCart);
    }
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;
  return (
    <div className="shop">
      <ShopSidebar categories={categories} />
      <div className="shop-main">
        {data.map((item) => (
          <ShopItem key={item.id} item={item} addItemToCart={addItemToCart} />
        ))}
      </div>
      <Cart shoppingCart={shoppingCart} totalCart={totalCart} />
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Shop;
