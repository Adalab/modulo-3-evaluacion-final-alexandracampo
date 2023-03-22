import { useLocation, pathname, matchPath } from 'react-router-dom';



function CharacterDetail({ data }) {

    // Si coincide, routeData es un objeto con mucha información útil
    // La información que me interesa está en routeData.params.id
    const { pathname } = useLocation();
    const routeData = matchPath('/character/:characterId', pathname);

    const characterId = routeData !== null ? routeData.params.characterId : '';
    const characterFound = data.find((character) => character.id === characterId);
    console.log(characterFound)
    return (
        <>

            <img src={characterFound.image} alt={characterFound.name}></img>
            <p>Nombre: {characterFound.name}</p>
            <p>Especie: {characterFound.species}</p>
            <p>Género: {characterFound.gender}</p>
            <p>Casa: {characterFound.house || "Desconocida"}</p>
            <p>Fecha de nacimiento: {characterFound.dateOfBirth || "Desconocida"}</p>
        </>
    );
}

export default CharacterDetail;