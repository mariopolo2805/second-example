import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';

import ThemeContext from '../../context/ThemeContext';


const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const sun = process.env.PUBLIC_URL + '/images/sun.jpg';
  const moon = process.env.PUBLIC_URL + '/images/moon.png';

  return (
    <Button
      onClick={() => changeTheme(theme.foreground === "#000000" ? "light" : "dark")}
      className="button-theme"
    >
      <img src={theme.foreground === "#000000" ? sun : moon} className="theme-icon" alt="theme" width="30px"/>
    </Button>
  )
}

export default ThemeSwitcher;