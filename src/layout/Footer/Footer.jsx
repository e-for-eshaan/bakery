// lib
import React from "react";

// styles
import "./Footer.scss"

// images
import insta from "../../images/instagram.svg"
import fb from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <img width={30} src={insta} alt="" />
        </li>
        <li>
          <img width={25} src={fb} alt="" />
        </li>
        <li>
          <img width={30} src={twitter} alt="" />
        </li>
      </ul>
      <p>
        Copyright Eshaan 2023
      </p>
    </footer>
  );
};

export default Footer;
