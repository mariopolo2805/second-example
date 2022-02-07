import React, { useState } from 'react';

import './App.scss';
import ThemeContext, { themes } from './context/ThemeContext';


import { Header } from './components';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    // console.log(theme);
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <div className="app">
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <h1>Second Example App</h1>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
