import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard';
import Filters from './Filters'
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


  return (
    <div >
      <header></header>
      <main>
        <Routes>
          <Route path="/" element={<>
            <Filters
              data={data}
              setErrorSearch={setErrorSearch}
              setSelectedHouse={setSelectedHouse}
              errorSearch={errorSearch}
              setSearchName={setSearchName}
            >
            </Filters>

            <CharacterList
              data={data}
              searchName={searchName}
            > </CharacterList>  </>}>
          </Route>

          <Route path="/detail/:id" element={<CharacterCard></CharacterCard>}></Route>
        </Routes>



      </main>
      <footer></footer>
    </div>
  );
}
export default App;