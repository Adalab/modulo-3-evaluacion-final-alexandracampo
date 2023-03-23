import { useLocation, pathname, matchPath } from 'react-router-dom';



function CharacterDetail({ data }) {

    // Si coincide, routeData es un objeto con mucha información útil
    // La información que me interesa está en routeData.params.id
    const { pathname } = useLocation();
    const routeData = matchPath('/character/:characterId', pathname);

    const characterId = routeData !== null ? routeData.params.characterId : '';
    const characterFound = data.find((character) => character.id === characterId);

    console.log(characterFound.alternate_names)

    return (

        <div className="detail-card">
            <img className='detail-img' src={characterFound.image} alt={characterFound.name}></img>
            <div className="detail-box-text">
                <p>Name: {characterFound.name}</p>
                <p>House: {characterFound.house || "Desconocida"}</p>
                {characterFound.alive === true ? <p>Status: Alive 🖤</p> : <p>Status: Dead 💀</p>}
                <p>Gender: {characterFound.gender}</p>
                <p>Specie: {characterFound.species}</p>
                <p>Alternate names: {characterFound.alternate_names}</p>

            </div>
        </div>

    );
}

export default CharacterDetail;