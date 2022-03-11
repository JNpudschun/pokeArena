import React, { useState } from "react";
import Pokecard from "./Pokecard";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Fightscreen(props){
    const navigate = useNavigate();
    const [fightlog, setFightLog] = useState(props.pokemon1.name.english + " vs. " + props.pokemon2.name.english);
    function goHome(){
        let path = "/";
        navigate(path)
    }
    function simulateFight(){
        let dmgArr = calculateDmgPrio();
        let hpArr = [props.pokemon1.base.HP,props.pokemon2.base.HP];
        let winner ="";
        let looser ="";
        while(hpArr[0] > 0 && hpArr[1]> 0){
            console.log(props.pokemon1.name.english + ": "+ hpArr[0] + ", " + props.pokemon2.name.english + ": "+ hpArr[1])
            if(dmgArr[2] === 1){
                hpArr[1] -= dmgArr[0];
                if(hpArr[1]> 0){
                    hpArr[0] -= dmgArr[1];
                    if(hpArr[0]<=0){
                        winner = props.pokemon2.name.english;
                        looser =props.pokemon1.name.english;
                    }
                } else{
                    winner = props.pokemon1.name.english;
                    looser =props.pokemon2.name.english;
                }
            } else {
                hpArr[0] -= dmgArr[1];
                if(hpArr[0] > 0){
                    hpArr[1] -= dmgArr[0];
                    if(hpArr[1]<=0){
                        winner = props.pokemon1.name.english;
                        looser =props.pokemon2.name.english;
                    }
                } else {
                    winner = props.pokemon2.name.english;
                    looser =props.pokemon1.name.english;
                }
            }
        }
        console.log(winner, looser)
        axios.post("https://pokefight-by-jnp.herokuapp.com/leaderboard/"+winner+"/win");
        axios.post("https://pokefight-by-jnp.herokuapp.com/leaderboard/"+looser+"/loss");
        return winner;
    }
    function calculateDmgPrio(){
        let arr=[]
        if(props.pokemon1.base.Attack - props.pokemon2.base.Defense > 0){
            arr.push(props.pokemon1.base.Attack - props.pokemon2.base.Defense)
        } else{
            arr.push(1)
        }
        if( props.pokemon2.base.Attack - props.pokemon1.base.Defense > 0){
            arr.push(props.pokemon2.base.Attack - props.pokemon1.base.Defense);
        } else{
            arr.push(1)
        }
        if(props.pokemon2.base.Speed<props.pokemon1.base.Speed){
            arr.push(1)
        } else if(props.pokemon2.base.Speed>props.pokemon1.base.Speed){
            arr.push(-1)
        } else{
            let random = Math.floor(Math.random()*2)
            if(random === 0){
                arr.push(1);
            } else{
                arr.push(-1);
            }
        }
        console.log(arr)
        return arr;
    }
    function startFight(){
        setFightLog(simulateFight() + " has Won!");

    }
    return(
        <div>
            <h2>FIGHT</h2>
             <div >
                <div className="selector">
                    <Pokecard pokemon1={props.pokemon1} />
                    <div>
                        <p>
                            {fightlog}
                        </p>
                    </div>
                    <Pokecard pokemon1={props.pokemon2} />
                </div>
                <button className="buttons" onClick={startFight}>FIGHT!</button>
                <button className="buttons" onClick={goHome}>Go Home</button>
            </div>
        </div>
    );
}
export default Fightscreen;