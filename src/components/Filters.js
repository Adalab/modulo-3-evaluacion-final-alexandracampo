function Filters({ data, setErrorSearch, setSelectedHouse, errorSearch, setSearchName, searchName }) {

    const handleFilterName = (ev) => {
        setSearchName(ev.target.value)

        // Creamos un filtro para que salte un mensaje si lo que se escribe en el input no existe en la API:
        const filteredData = data.filter((eachCharacter) => {
            return eachCharacter.name.toLowerCase().includes(ev.target.value.toLowerCase());
        });

        // Si la longitud del dato filtrado es 0 (no hay ningún resultado) sale el mensaje. De lo contrario lo quita.
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
        <>
            <form onChange={handleSubmit}>
                <label>Busca por personaje:</label>
                <input value={searchName} onKeyDown={handleKeyDown} onChange={handleFilterName} placeholder="Harry..." type="text" />

                <label>Selecciona la casa:</label>
                <select onChange={handleFilterHouse}>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                </select>
            </form>

            <span>{errorSearch}</span>
        </>
    );
}

export default Filters;