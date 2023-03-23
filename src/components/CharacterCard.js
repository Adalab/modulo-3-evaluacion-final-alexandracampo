import { NavLink } from "react-router-dom";
import notfound1 from '../images/notfound1.png'

function CharacterCard({ i, eachCharacter }) {

    return (

        <NavLink className="link" to={`/character/${eachCharacter.id}`}>
            < li key={i} className="card" >

                {eachCharacter.image ? <img className="card-image" src={eachCharacter.image} alt="character"></img> : <img className="card-image" alt="character" src={notfound1}></img>}
                <p className="card-text"> {eachCharacter.name}</p>
                <p className="card-text">{eachCharacter.species}</p>

            </li >
        </NavLink>

    );
}

export default CharacterCard;