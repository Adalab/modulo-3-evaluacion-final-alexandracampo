import { NavLink } from "react-router-dom";

function CharacterCard({ i, eachCharacter }) {

    return (
        <>
            < li key={i} >
                <NavLink to={`/character/${eachCharacter.id}`}>
                    {eachCharacter.image ? <img src={eachCharacter.image} alt="character"></img> : <img alt="character" src="https://via.placeholder.com/210x295/4634a3/ffffff/?text=HarryPotter"></img>}
                    <p> {eachCharacter.name}</p>
                    <p>{eachCharacter.species}</p>
                </NavLink>
            </li >
        </>
    );
}

export default CharacterCard;