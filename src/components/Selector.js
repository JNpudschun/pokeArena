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
        navigate(path)
    }
    function onClick(e){
        props.random();
        e.preventDefault();
    }
   
    return(
        <div>
            <h2>Pick your Fighters</h2>
            {JSON.stringify(props.pokemon1.sprite).length > 2 && JSON.stringify(props.pokemon2.sprite).length > 2  ?
            (<div className="selector">
                <Pokecard pokemon1={props.pokemon1} />
                <div>
                    <p className="vs">VS.</p>
                </div>
                <Pokecard pokemon1={props.pokemon2} />
                
            </div>) : (<p>Loading ...</p>)}
            <div className="buttonRow">
                    <button onClick={onClick} className="buttons">New Random Pokemon</button>
                    <button className="buttons specialLink" onClick={goFight}>Go Fight</button>
                    <button className="buttons" onClick={goList}>to full List</button>
            </div>
        </div>
    );
}
export default Selector;