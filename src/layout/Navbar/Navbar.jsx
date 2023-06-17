// lib
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <ul className="primaryList">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/checkout"}>About Us</Link>
          </li>
          <li>
            <Link to={"/checkout"}>Products</Link>
          </li>
          <li>
            <Link to={"/Blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/Contact Us"}>Contact Us</Link>
          </li>
        </ul>
        <ul className="secondaryList">
          <li>
            <Link to={"/"}>Search</Link>
          </li>
          <li>
            <Link to={"/checkout"}>Account</Link>
          </li>
          <li>
            <Link to={"/checkout"}>Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
