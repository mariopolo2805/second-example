import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import ThemeContext from '../../context/ThemeContext';


const CharacterDetail = () => {
  const BASEURL = "https://rickandmortyapi.com/api";
  const ITEMSURL = "/character/";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [character, setCharacter] = useState({});
  let { characterId } = useParams();

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(BASEURL + ITEMSURL + characterId)
      .then(res => res.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setCharacter(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [characterId]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ background: theme.background, color: theme.foreground }}>
        <p>{character.name}</p>
        <img src={character.image} alt={character.name} width="200px" />
      </div>
    );
  }
}

export default CharacterDetail;