import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </ul>
    </header>
  );
}

export default Navbar;
