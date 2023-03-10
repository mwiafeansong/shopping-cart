import React from 'react';
import cartImg from '../images/cart-outline.svg';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/Cart" className="cartBtn">
            <img src={cartImg} alt="shopping cart"></img>
          </NavLink>
          <div data-test-id="itemCount" className="itemCount">
            {props.itemCount}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
