//import '../styles/App.scss';
//import data from '../data/data .json' //para llamar a los datos
//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
import Filter from './Filter'
import getDataFromApi from './services/Api';

function App() {

  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState();

  useEffect(() => {
    getDataFromApi('Gryffindor').then((responseData) => {
      setData(responseData)
    })
  }, []);

  const renderList = () => {
    return data

      .filter((eachCharacter) => {
        return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
      })

      .map((eachCharacter, i) => (
        <li key={i}>
          {eachCharacter.image ? <img src={eachCharacter.image} alt="character"></img> : <img alt="character" src="https://via.placeholder.com/210x295/4634a3/ffffff/?text=HarryPotter"></img>}
          <p>{eachCharacter.name}</p>
          <p>{eachCharacter.species}</p>
        </li>
      ))
  }

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value)
  }

  return (
    <div >
      <header></header>
      <main>
        <form>
          <label>Busca por personaje:</label>
          <input onInput={handleSearchName} placeholder="Harry..." type="text"></input>

          <label>Selecciona la casa:</label>
          <select>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
        </form>

        <ul>{renderList()}</ul>

        <Routes>
          <Route path="/" element={<><Filter ></Filter> <CharacterList> </CharacterList>  </>}> </Route>
          <Route path="/detail/:id" element={<CharacterCard></CharacterCard>}></Route>
        </Routes>

      </main>
      <footer></footer>
    </div>
  );

}
export default App;