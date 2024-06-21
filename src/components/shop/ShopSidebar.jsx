import "../../styles/shop.css";
import PropTypes from "prop-types";

function ShopSidebar({ categories }) {
  return (
    <div className="shop-sidebar">
      <ul>
        {categories.map((category) => (
          <button key={category.id}>
            <li key={category.id}>{category}</li>
          </button>
        ))}
      </ul>
    </div>
  );
}

ShopSidebar.propTypes = {
  categories: PropTypes.array,
};

export default ShopSidebar;
