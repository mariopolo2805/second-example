import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';

const CharacterList = () => {
  const BASEURL = "https://rickandmortyapi.com/api";
	const ITEMSURL = "/character";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(BASEURL + ITEMSURL)
      .then(res => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setItems(response.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul style={{ background: theme.background, color: theme.foreground }}>
        {items.map(item => (
          <li key={item.id}>
            <Link to={"./" + item.id}>
              {item.id} - {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default CharacterList;