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
  const [selectedHouse, setSelectedHouse] = useState('Gryffindor');



  useEffect(() => {
    getDataFromApi(selectedHouse).then((responseData) => {
      //Aquí estoy metiendo los datos de la respuesta de la Api en variable data:
      setData(responseData)
    })
  }, [selectedHouse]);


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
    setSearchName(ev.target.value)

    //Creamos un filtro para que salte un mensaje si lo que se escribe en el input no existe en la API:
    const filteredData = data.filter((eachCharacter) => {
      return eachCharacter.name.toLowerCase().includes(ev.target.value.toLowerCase());
    });

    //Si la longitud del dato filtrado es 0 (no hay ningún resultado) sale el mensaje. De lo contrario lo quita.
    if (filteredData.length === 0) {
      setErrorSearch('No hay ningún personaje con ese nombre. Prueba con otro...');
    } else {
      setErrorSearch('');
    }
  };

  const handleFilterHouse = (ev) => {
    setSelectedHouse(ev.target.value)
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
          <select onChange={handleFilterHouse}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
          </select>
        </form>
        <span>{errorSearch}</span>

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