import React from "react";
import {useNavigate} from "react-router-dom"

function PickList(props){
    const navigate = useNavigate();
    
    function onClick(id){
        if(props.pokeNr ===1){
            console.log(props.pokeDex[id-1],props.spriteArr[id-1] )
            props.setPokemon1(
                {
                    id:props.pokeDex[id-1].id,
                    name:props.pokeDex[id-1].name,
                    type:props.pokeDex[id-1].type,
                    base:props.pokeDex[id-1].base,
                    sprite:props.spriteArr[id-1]
                }
            )
            let path = "/"
            navigate(path)
        } else if(props.pokeNr === 2){
            props.setPokemon2(
                {
                    id:props.pokeDex[id-1].id,
                    name:props.pokeDex[id-1].name,
                    type:props.pokeDex[id-1].type,
                    base:props.pokeDex[id-1].base,
                    sprite:props.spriteArr[id-1]
                }
            )
            let path = "/"
            navigate(path)
        } else {
            let path = "/pokemon/"+String(id)
            navigate(path)
        }
        
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
                    <tr key={pokemon.id} onClick={()=>onClick(pokemon.id)}>
                        <td>{pokemon.id}</td>
                        <td>{pokemon.name.english}</td>
                        <td><img src={props.spriteArr[index].front_default} alt="sprite"/></td>
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
        </div>
    );
}
export default PickList;