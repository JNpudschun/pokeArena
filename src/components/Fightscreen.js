import React from "react";
import Pokecard from "./Pokecard";
import {useNavigate} from "react-router-dom"

function Fightscreen(props){
    const navigate = useNavigate();

    function goHome(){
        let path = "/";
        navigate(path)
    }
    return(
        <div>
            <h2>FIGHT</h2>
             <div className="selector">
                <Pokecard pokemon1={props.pokemon1} />
                <div>
                    <p className="vs">VS.</p>
                </div>
                <Pokecard pokemon1={props.pokemon2} />
                <button className="buttons" onClick={goHome}>Go Home</button>
            </div>
        </div>
    );
}
export default Fightscreen;