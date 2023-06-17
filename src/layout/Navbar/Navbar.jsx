import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/checkout"}>checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
