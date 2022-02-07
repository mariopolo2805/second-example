import React, { useContext } from 'react';

import ThemeContext from '../../context/ThemeContext';


const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const sun = process.env.PUBLIC_URL + '/images/sun.png';
  const moon = process.env.PUBLIC_URL + '/images/moon.png';

  return (
    <span
      onClick={() => changeTheme(theme.name === "dark" ? "light" : "dark")}
      className="button-theme"
    >
      <img src={theme.name === "light" ? sun : moon} className="theme-icon" alt="theme" width="20px" height="20px"/>
    </span>
  )
}

export default ThemeSwitcher;