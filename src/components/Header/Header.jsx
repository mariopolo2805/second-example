import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Header.scss';

import ThemeContext from '../../context/ThemeContext';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="header" style={{ background: theme.background, color: theme.foreground }}>
      <Navbar bg={theme.name} expand="lg">
        <Link to="/">
          Home
        </Link>
        <Link to="/characters">
          Characters
        </Link>
        <ThemeSwitcher />
      </Navbar>
    </header>
  );
}

export default Header;