import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import CharacterList from "./components/CharacterList";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [getCharacters, setGetCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://swapi.dev/api/people/?page=${pageNumber}`
      );

      console.log('Found the info', result.data);

      setGetCharacters(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [pageNumber]);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="content">
      <p className="character-title">CHARACTERS:</p>
        <SearchComponent getCharacters={getCharacters} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery ? null : 
        <CharacterList isLoading={isLoading} getCharacters={getCharacters} />
        }
        </div>
      <div className="pagination">
      {getCharacters.previous ?
        <div className="previous-page" onClick={() => previousPage()}>
          <IconButton aria-label="arrowback">
            <ArrowBackIcon style={{ fill: "#ffffff" }} />
          </IconButton>
        </div>
        : null
      }
        {getCharacters.next ? 
        <div
          className="next-page"
          onClick={() => setPageNumber(pageNumber + 1)}>
          <IconButton aria-label="arrowforward">
            <ArrowForwardIcon style={{ fill: "#ffffff" }} /> 
          </IconButton> 
        </div>
        : null
        } 
      </div>
    </div>
  );
}

export default App;
