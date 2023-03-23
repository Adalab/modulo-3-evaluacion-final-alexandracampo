const getDataFromApi = (house) => {
    const byHouse = house ? `/house/${house}` : '';

    return fetch(`https://hp-api.onrender.com/api/characters${byHouse}`)
        .then((response) => response.json())
        .then((dataApi) => {
            const cleanData = dataApi.map((eachCharacter) => {
                return {
                    image: eachCharacter.image,
                    name: eachCharacter.name,
                    species: eachCharacter.species,
                    id: eachCharacter.id,
                    house: eachCharacter.house,
                    alive: eachCharacter.alive,
                    dateOfBirth: eachCharacter.dateOfBirth,
                    gender: eachCharacter.gender,
                    alternate_names: eachCharacter.alternate_names
                };
            });
            return cleanData;
        });
}

export default getDataFromApi;






