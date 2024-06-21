import PropTypes from "prop-types";
import { useState } from "react";

function ShopItem({ key, item, addItemToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItemToCart(item, quantity);
  };
  return (
    <div className="shop-item" key={key}>
      <img className="shop-image" src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <p>Price: {item.price}€</p>
      <form>
        <input
          id="quantity"
          type="number"
          min="1"
          max="100"
          onChange={(e) => handleQuantityChange(e)}
          defaultValue={quantity}
        />
      </form>
      <button type="submit" onClick={(e) => handleSubmit(e, item)}>
        Add To Cart
      </button>
    </div>
  );
}

ShopItem.propTypes = {
  key: PropTypes.string,
  item: PropTypes.object.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default ShopItem;
