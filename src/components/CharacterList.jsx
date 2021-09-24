import React, { useEffect, useState } from "react";
import CharacterDetails from "./CharacterDetails";

const CharacterList = ({ getCharacters, isLoading }) => {
  const [characterArray, setCharacterArray] = useState([]);
  
  useEffect(() => {
    setCharacterArray(getCharacters.results);
    console.log('Character Array', characterArray);
  },[getCharacters]);


  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="characters-list">
      {characterArray.map((character) => {
        return (
          <CharacterDetails
            key={character.name}
            character={character}
          />
        );
      })}
    </div>
  );
};

export default CharacterList;

