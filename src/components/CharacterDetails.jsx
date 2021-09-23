import React from "react";
import { useState } from "react";
import "./CharacterDetails.css";

const CharacterDetails = ({ character }) => {
  const [moreDetails, setMoreDetails] = useState(false);

  return (
    <div
      className="character-info"
      onClick={() => setMoreDetails(!moreDetails)}
    >
      <p className="name-title">{character.name}</p>
      {moreDetails ? (
        <ul className="u-list">
          <li className="list-info">
            <strong>Gender:</strong> {character.gender}
          </li>
          <li className="list-info">
            <strong>Haircolour:</strong> {character.hair_color}
          </li>
          <li className="list-info">
            <strong>Height:</strong> {character.height}
          </li>
        </ul>
      ) : null
      }
    </div>
  );
};

export default CharacterDetails;
