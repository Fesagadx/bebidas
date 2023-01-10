import "./assets/css/styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BeveragesData from './components/BeveragesData';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LiquorIcon from '@mui/icons-material/Liquor';

function App() {

  const [dataCharacters, setDataCharacters] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, [name]);

  const searchCharacter = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php`;

  const getData = () => {

    axios.get(url+`?s=${name}`)
      .then((resp) => {
        console.log(resp.data.drinks);
        setDataCharacters(resp.data.drinks);
      })
      .catch((error) => {
        console.error(error);
        setDataCharacters([]);
      });
  };

  return (
    <div className="App">
      <form onSubmit={(e) => searchCharacter(e)}>
        <input type="text" placeholder="Buscar una bebida" />
        <button type="submit">
          <LocalBarIcon/>
        </button>
      </form>

      {
        dataCharacters !== null ? (
          dataCharacters.map((character, index) => (
              <BeveragesData key={`character-${index}`} data={character} />
          ))

        ) : (
          <div className="error-card">
            <LiquorIcon style={{ fontSize: 500 }}/>
            <h1>
              NO HAY COINCIDENCIAS
            </h1>
          </div>
          
        )
      }

    </div>
  )
}

export default App
