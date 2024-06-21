import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/shop.css";

function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <h2>{item.title}</h2>
      <p>Price: {item.price}€</p>
      <p>{item.category}</p>
    </div>
  );
}

function Shop() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong...</h1>;
  return (
    <div className="shop">
      {data.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Shop;
