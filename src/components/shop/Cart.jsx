import PropTypes from "prop-types";

function Cart({ shoppingCart }) {
  return (
    <div className="cart">
      {shoppingCart.length === 0 ? (
        <h2>Shopping Cart is Empty</h2>
      ) : (
        <>
          {shoppingCart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

Cart.propTypes = {
  shoppingCart: PropTypes.array,
};

export default Cart;
