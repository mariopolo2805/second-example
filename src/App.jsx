import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import './App.scss';
import ThemeContext, { themes } from './context/ThemeContext';


import { Header, Home, CharacterList, CharacterDetail } from './components';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <div className="app">
      <Router>
        <ThemeContext.Provider value={{ theme, changeTheme }}>
          <Header />
          <main>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path="characters/:characterId" element={<CharacterDetail />} />
              <Route path="/characters" element={<CharacterList />} />
              <Route path="*" element={<h4>404 Not Found</h4>} />
            </Routes>
          </main>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
