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
          <li>
            <strong>Gender:</strong> <p className="list-info">{character.gender}</p>
          </li>
          <li>
            <strong>Hair colour:</strong> <p className="list-info"> {character.hair_color}</p>
          </li>
          <li>
            <strong>Eye colour:</strong> <p className="list-info">{character.eye_color} </p>
          </li>
          <li>
            <strong>Height:</strong> <p className="list-info">{character.height} </p>
          </li>
        </ul>
      ) : null
      }
    </div>
  );
};

export default CharacterDetails;
