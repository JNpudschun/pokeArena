import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import Pokecard from "./Pokecard";

function Pokemon(props){
    const [pokemon ,setPokemon] = useState({id:0,name:{},type:[],base:{},sprite:{}});
    let [count, setCount]= useState(1);
    const { id } = useParams();
    const navigate = useNavigate();
    function goHome(){
        let path = "/";
        navigate(path)
    }
    function toList(){
        let path = "/pokemon";
        navigate(path)
    }
    // function chooseMe(){
    //     console.log(count)
    //     if(count%2 === 0){
    //         props.setPokemon2(pokemon);
    //         count++;
    //         setCount(count)
    //         console.log(count)
    //     } else{
    //         props.setPokemon1(pokemon);
    //         count++;
    //         setCount(count)
    //         console.log(count)
    //     }
    //     let path = "/";
    //     navigate(path)
    // }
    async function getData(){
        const urlPokemon1 ="https://pokefight-by-jnp.herokuapp.com/pokemon/"+String(id);
        const urlSprite1="https://pokeapi.co/api/v2/pokemon/"+String(id);
        let resPokemon = await axios.get(urlPokemon1);
        let resSprite = await axios.get(urlSprite1);
        setPokemon(
            {
                id:resPokemon.data.id,
                name:resPokemon.data.name,
                type:resPokemon.data.type,
                base:resPokemon.data.base,
                sprite:resSprite.data.sprites
            });
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
            <div className="pokeWrap">
                {JSON.stringify(pokemon.sprite).length > 2 ? (
                    <Pokecard pokemon1={pokemon}/>
                ):(
                    <p>Loading ...</p>
                )}
            </div>
            {/* <button className="buttons" onClick={chooseMe}>Choose Me</button> */}
            <button className="buttons" onClick={goHome}>Go Home</button>
            <button className="buttons" onClick={toList}>Back to List</button>
            
        </div>
    );
}
export default  Pokemon;