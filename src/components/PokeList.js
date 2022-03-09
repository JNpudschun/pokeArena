import React from "react";
import {useNavigate} from "react-router-dom"

function PokeList(props){
    const navigate = useNavigate();
    
    function goToPokemon(id){
        let path = "/pokemon/"+String(id)
        navigate(path)
    }
    function goHome(){
        let path = "/";
        navigate(path)
    }
     return(
        <div className="liste">
          <table className="pokelist">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Sprite</td>
                        <td>Type</td>
                        <td>HP</td>
                        <td>Attack</td>
                        <td>Defense</td>
                        <td>Sp.Attack</td>
                        <td>Sp.Defense</td>
                        <td>Speed</td>
                    </tr>
                </thead>
                <tbody>
                {props.pokeDex.map((pokemon, index)=>(
                    <tr key={pokemon.id} onClick={()=>goToPokemon(pokemon.id)}>
                        <td>{pokemon.id}</td>
                        <td>{pokemon.name.english}</td>
                        <td><img src={props.spriteArr[index]} alt="sprite"/></td>
                        <td>{pokemon.type[1] ? (pokemon.type[0] + ", "+ pokemon.type[1]):(pokemon.type[0])}</td>
                        <td>{pokemon.base.HP}</td>
                        <td>{pokemon.base.Attack}</td>
                        <td>{pokemon.base.Defense}</td>
                        <td>{pokemon.base['Sp. Attack']}</td>
                        <td>{pokemon.base['Sp. Defense']}</td>
                        <td>{pokemon.base.Speed}</td>
                     </tr>
                 ))}
                </tbody>
            </table>
            <button className="buttons" onClick={goHome}>Go Home</button>
        </div>
    );
}
export default PokeList;