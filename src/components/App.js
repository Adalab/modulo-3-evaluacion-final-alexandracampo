import '../styles/App.scss'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Filters from './Filters'
import getDataFromApi from '../services/Api';
import { useLocation } from 'react-router-dom';

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


  return (
    <div >
      <header className='header'>
        <h1>Header</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<>
            <Filters
              data={data}
              setErrorSearch={setErrorSearch}
              setSelectedHouse={setSelectedHouse}
              errorSearch={errorSearch}
              setSearchName={setSearchName}
              searchName={searchName}
            >
            </Filters>

            <CharacterList
              data={data}
              searchName={searchName}
            > </CharacterList>  </>}>
          </Route>

          <Route path='/character/:characterId' element={<CharacterDetail data={data} ></CharacterDetail>}></Route>
        </Routes>


      </main>
      <footer className='footer'>
      </footer>
    </div >
  );
}
export default App;