import React, { useContext } from 'react';

import ThemeContext from '../../context/ThemeContext';


const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <h1 style={{ background: theme.background, color: theme.foreground }}>Second Example App</h1>
  );
}

export default Home;