import React from "react";
import ReactDDOM from 'react-dom';

const Header = () => {
  return(
    <div className="header">
        <div className="logo">
          <img src="https://i.pinimg.com/474x/84/4d/85/844d8535fb36b860d3a16635ef20fbab.jpg" alt="" className="header-logo" />
        </div>
        <div>
          <ul className="nav-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button class="header-button">Login</button></li>
          </ul>
        </div>
    </div>
  )
}

export default Header;