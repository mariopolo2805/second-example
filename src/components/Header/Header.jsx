import React, { useContext } from 'react';
import { Navbar } from 'react-bootstrap';

import ThemeContext from '../../context/ThemeContext';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar>
        <ThemeSwitcher />
        <p style={{ background: theme.background, color: theme.foreground }}>lorem ipsum</p>
      </Navbar>
    </>
  );
}

export default Header;