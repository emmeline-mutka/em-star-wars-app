import { useState, useEffect } from "react";
import "./SearchComponent.css";
import CharacterDetails from "./CharacterDetails";

const SearchComponent = ({ getCharacters, searchQuery, setSearchQuery }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [characterArray, setCharacterArray] = useState([]);

  useEffect(() => {
    setCharacterArray(getCharacters.results);
  }, [getCharacters]);

  useEffect(() => {
    if (searchQuery.length !== 0) {
      const handleSearch = characterArray.filter((character) =>
        character.name.toLowerCase().includes(searchQuery)
      );
      setSearchResult(handleSearch);
    } else {
      setSearchResult([]);
    }
  }, [searchQuery]);

  function onChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={onChange}
      />
      {searchResult.map((character) => (
        <CharacterDetails key={character.name} character={character} />
      ))}
    </div>
  );
};

export default SearchComponent;
