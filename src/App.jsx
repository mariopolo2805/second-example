import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import './App.scss';

import ThemeContext, { themes } from './context/ThemeContext';

import AuthRoute from './routes/AuthRoute/AuthRoute';

import {
  Header,
  Home,
  CharacterList,
  CharacterDetail,
  Profile,
  LoginForm
} from './components';

const userMockArray = [
  { email: 'mario@upgrade.com', password: '123456', name: 'Mario' },
  { email: 'alumno@upgrade.com', password: '13245', name: 'Alumno' },
]

function App() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(themes.light);

  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const loginUser = (formData, prevRoute) => {
    const existsUser = userMockArray.find(el => el.password === formData.password && el.email === formData.email);

    if (existsUser) {
      setUser(existsUser);
      setLoginError('');
      navigate(prevRoute || '/');
    } else {
      setUser(false);
      setLoginError('No existe el usuario o la contraseña no coincide');
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  const changeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };

  return (
    <div className="app">
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Header user={user} logoutUser={logoutUser} />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="characters/:characterId" element={<CharacterDetail />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route
              path="/profile"
              element={
                <AuthRoute user={user} component={<Profile user={user} />} />
              }
            />
            <Route path="/login" element={<LoginForm loginUser={loginUser} loginError={loginError} />} />
            <Route path="*" element={<h4>404 Not Found</h4>} />
          </Routes>
        </main>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
