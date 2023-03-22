import CharacterCard from "./CharacterCard";

function CharacterList({ data, searchName }) {

    const renderList = () => {
        return data

            .filter((eachCharacter) => {
                return eachCharacter.name.toLowerCase().includes(searchName.toLowerCase())
            })

            .map((eachCharacter, i) => (
                <CharacterCard key={i} eachCharacter={eachCharacter} />
            ))
    }

    return (
        <>
            <ul>{renderList()}</ul>
        </>
    );
}

export default CharacterList;