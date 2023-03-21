//import '../styles/App.scss';
//import data from '../data/data .json' //para llamar a los datos
//import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
import Filter from './Filter'
import getDataFromApi from '../services/Api';

function App() {

  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [errorSearch, setErrorSearch] = useState('');



  useEffect(() => {
    getDataFromApi('Gryffindor').then((responseData) => {

      //Aquí estoy metiendo los datos de la respuesta de la Api en variable data:
      setData(responseData)
    })
  }, []);


  const renderList = () => {
    return data

      .filter((eachCharacter) => {
        return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
      })
      .map((eachCharacter, i) => (
        < li key={i} >
          {eachCharacter.image ? <img src={eachCharacter.image} alt="character"></img> : <img alt="character" src="https://via.placeholder.com/210x295/4634a3/ffffff/?text=HarryPotter"></img>}
          <p> {eachCharacter.name}</p>
          <p>{eachCharacter.species}</p>
        </li >
      ))
  }


  const handleFilterName = (ev) => {
    { /* console.log(data)
    if (searchName === data.name) {
      setErrorSearch('')
    } else {
      setErrorSearch('No existe ningún personaje con ese nombre, prueba de nuevo con otro')
    } */ }
    setSearchName(ev.target.value)
  }

  const handleKeyDown = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
    }
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <div >
      <header></header>
      <main>

        <form onChange={handleSubmit}>
          <label>Busca por personaje:</label>
          <input onKeyDown={handleKeyDown} onChange={handleFilterName} placeholder="Harry..." type="text" />

          <label>Selecciona la casa:</label>
          <select>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
        </form>

        { /* <span>{setErrorSearch}</span> */}

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