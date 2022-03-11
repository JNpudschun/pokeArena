import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import Pokecard from "./Pokecard"

function Selector(props){
    const navigate = useNavigate()
    function goFight(){
        let path = "/fight";
        navigate(path)
    }
    function goList(){
        let path = "/pokemon"
        props.getDB();
        navigate(path)
    }
    function goBoard(){
        let path = "/leaderboard"
        navigate(path)
    }
    function onClick(e){
        props.random();
        e.preventDefault();
    }
    function pickPokemon1(){
        let path = "/pick/1"
        navigate(path)
    }
    function pickPokemon2(){
        let path = "/pick/2"
        navigate(path)
    }
   
    return(
        <div>
            <h2>Pick your Fighters</h2>
            {JSON.stringify(props.pokemon1.sprite).length > 2 && JSON.stringify(props.pokemon2.sprite).length > 2  ?
            (<div className="selector">
                <div>
                    <Pokecard pokemon1={props.pokemon1} />
                    <button onClick={pickPokemon1}>Pick Pokemon</button>
                </div>
                <div>
                    <p className="vs">VS.</p>
                </div>
                <div>
                    <Pokecard pokemon1={props.pokemon2} />
                    <button onClick={pickPokemon2}>Pick Pokemon</button>
                </div>
            </div>) : (<p>Loading ...</p>)}
            <div className="buttonRow">
                    <button onClick={onClick} className="buttons">New Random Pokemon</button>
                    <button className="buttons specialLink" onClick={goFight}>Go Fight</button>
                    <button className="buttons" onClick={goList}>to full List</button>
                    <button className="buttons" onClick={goBoard}>See Leaderboard</button>
            </div>
        </div>
    );
}
export default Selector;