// lib
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles
import "./Navbar.scss"

// images 
import cart from "../../images/cart.svg"
import user from "../../images/user.svg"
import menu from "../../images/menu.svg"

const Navbar = () => {
  const [setshowMenuItems, setSetshowMenuItems] = useState(false)
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Scrumptious</div>
        <Menu />
        <Options setSetshowMenuItems={setSetshowMenuItems} />


      </div>
      <div className="minimenu">
        {setshowMenuItems && <MiniMenu />}
      </div>
    </nav>
  );
};

const MiniMenu = () => {
  return <ul className="primaryList">
    <MenuItem link={"/"} text="Home" />
    <MenuItem link={"/checkout"} text="Checkout" />
    <MenuItem link={"/"} text="Products" />
    <MenuItem link={"/"} text="Blog" />
    <MenuItem link={"/"} text="Contact Us" />
  </ul>
}

const Menu = () => {
  return <React.Fragment>
    <ul className="primaryList">
      <MenuItem link={"/"} text="Home" />
      <MenuItem link={"/checkout"} text="Checkout" />
      <MenuItem link={"/"} text="Products" />
      <MenuItem link={"/"} text="Blog" />
      <MenuItem link={"/"} text="Contact Us" />
    </ul>
  </React.Fragment>
}

const MenuItem = ({ link, text }) => {
  return <li>
    <Link style={{ color: 'inherit', textDecoration: "none" }} to={link}>{text}</Link>
  </li>
}

const Options = () => {
  return <div className="secondaryList">
    <img src={menu} alt="" width={35} />
    <img src={cart} alt="" width={30} />
    <img src={user} alt="" width={30} />
  </div>
}

export default Navbar;
