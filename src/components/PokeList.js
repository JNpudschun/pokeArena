import React from "react";
import {useNavigate} from "react-router-dom"
import PickList from "./PickList";

function PokeList(props){
    const navigate = useNavigate();
    function goHome(){
        let path = "/";
        navigate(path)
    }
     return(
        <div>
            <PickList pokeDex={props.pokeDex} spriteArr={props.spriteArr}/>
            <button className="buttons" onClick={goHome}>Go Home</button>
        </div>
    );
}
export default PokeList;