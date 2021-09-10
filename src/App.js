import './App.css';
import {useEffect, useState} from 'react';
import GetData from './components/getData';
import PeopleList from './components/PeopleList';

function App() {
  const [getPeople, setGetPeople] = useState([]);

  useEffect(() => {
    GetData(getPeople, setGetPeople)
  }, []);

  useEffect(() => {
    console.log('Found the info', getPeople);
  }, [getPeople]);

  return (
    <div className="App">
      <header className="App-header">
      Star Wars app
      </header>
      <div>
        <p>List of people:</p>
        <PeopleList getPeople = {getPeople} />
      </div>
    </div>
  );
}

export default App;
