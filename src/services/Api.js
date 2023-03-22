const getDataFromApi = (house) => {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then((response) => response.json())
        .then((dataApi) => {
            const cleanData = dataApi.map((eachCharacter) => {
                return {
                    image: eachCharacter.image,
                    name: eachCharacter.name,
                    species: eachCharacter.species,
                    id: eachCharacter.id,
                    house: eachCharacter.house,
                    vivo: eachCharacter.alive,
                    dateOfBirth: eachCharacter.dateOfBirth,
                    gender: eachCharacter.gender
                };
            });
            return cleanData;
        });
}

export default getDataFromApi;






