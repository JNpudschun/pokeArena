import React from "react";
import PickList from "./PickList";

function PokeSelector(props){
     return(
        <div>
            <h2>Click on a Pokemon to select it</h2>
            <PickList pokeDex={props.pokeDex} spriteArr={props.spriteArr} setPokemon1={props.setPokemon1} setPokemon2={props.setPokemon2} pokeNr={props.pokeNr}/>
        </div>
    );
}
export default PokeSelector;