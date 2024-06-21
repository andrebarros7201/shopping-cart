function ShopItem({ item }) {
  return (
    <div className="shop-item">
      <img className="shop-image" src={item.image} alt={item.title} />
      <h4>{item.title}</h4>
      <p>Price: {item.price}€</p>
      <form onSubmit={(e) => {}}>
        <input type="number" min="1" max="100" defaultValue="1" />
      </form>
      <button type="submit">Add To Cart</button>
    </div>
  );
}

export default ShopItem;
