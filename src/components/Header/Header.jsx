import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Header.scss';

import ThemeContext from '../../context/ThemeContext';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


const Header = ({ user, logoutUser}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="header" style={{ background: theme.background, color: theme.foreground }}>
      <ThemeSwitcher />
      <Navbar bg={theme.name} expand="lg">
        <Link to="/">
          Home
        </Link>
        <Link to="/characters">
          Characters
        </Link>
        <Link to="/profile">
          Profile
        </Link>
      </Navbar>
      {user ?
        <span>
          Hello {user.name}! <button onClick={() => logoutUser()}>Logout</button>
        </span> :
        <Link to="/login">
          Login
        </Link>}
    </header>
  );
}

export default Header;