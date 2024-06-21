import PropTypes from "prop-types";

function Cart({ shoppingCart, totalCart }) {
  return (
    <div className="cart">
      {shoppingCart.length === 0 ? (
        <h2>Shopping Cart is Empty</h2>
      ) : (
        <>
          <h2>
            {shoppingCart.reduce((acc, item) => acc + item.quantity, 0)}
            {shoppingCart.reduce((acc, item) => acc + item.quantity, 0) === 1
              ? " Item"
              : " Items"}{" "}
            in the cart
          </h2>
          <h1>Total: {totalCart}€</h1>
          {shoppingCart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h4>{item.name}</h4>
              <p>Price: {item.price}€</p>
              <p>Quantity: {item.quantity}</p>
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
};

export default Cart;
