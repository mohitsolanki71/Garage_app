import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <Link className="link" to={"/"}>
          Home
        </Link>
      </div>
      <div>
        <Link className="link" to={"/cart"}>
          Cart
        </Link>
        <Link className="link" to={"/checkout"}>
          Checkout
        </Link>
      </div>
    </div>
  );
};
