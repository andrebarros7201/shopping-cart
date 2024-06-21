import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <ul>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/shop">Shop</Link>
        </button>
      </ul>
    </header>
  );
}

export default Navbar;
