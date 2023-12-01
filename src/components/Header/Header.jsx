import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="headerWrapper">
      <header className="header">
        <NavLink className="headerLinks" to="/">
          HOME
        </NavLink>
        <NavLink className="headerLinks" to="/movies">
          MOVIES
        </NavLink>
      </header>
    </div>
  );
};

export default Header;