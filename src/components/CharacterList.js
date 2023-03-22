import CharacterCard from "./CharacterCard";

function CharacterList({ data, searchName }) {

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

    return (
        <>
            <ul>{renderList()}</ul>
        </>
    );
}

export default CharacterList;