import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
// import GetData from './components/GetData';

function App() {
  const [getCharacters, setGetCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`https://swapi.dev/api/people`);

      console.log('Found the info', result.data);

      setGetCharacters(result.data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <div className="content">
        <p className="character-title">CHARACTERS:</p>
        <CharacterList isLoading={isLoading} getCharacters={getCharacters} />
      </div>
    </div>
  );
}

export default App;
