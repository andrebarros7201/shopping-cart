import PropTypes from "prop-types";
import "../../styles/cart.css";

function Cart({ shoppingCart, totalCart, handleRemove }) {
  return (
    <div className="cart">
      {shoppingCart.length === 0 ? (
        <h2>Shopping Cart is Empty</h2>
      ) : (
        <>
          <div>
            <h2>
              {shoppingCart.reduce((acc, item) => acc + item.quantity, 0)}
              {shoppingCart.reduce((acc, item) => acc + item.quantity, 0) === 1
                ? " Item"
                : " Items"}{" "}
              in the cart
            </h2>
            <h1>Total: {totalCart}€</h1>
          </div>

          {shoppingCart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Price: {item.price}€</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="remove"
                  onClick={(item) => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  shoppingCart: PropTypes.array,
  totalCart: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Cart;
