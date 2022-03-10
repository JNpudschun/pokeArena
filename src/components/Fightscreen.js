import React, { useState } from "react";
import Pokecard from "./Pokecard";
import {useNavigate} from "react-router-dom"

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
        while(hpArr[0] > 0 && hpArr[1]> 0){
            console.log(props.pokemon1.name.english + ": "+ hpArr[0] + ", " + props.pokemon2.name.english + ": "+ hpArr[1])
            if(dmgArr[2] === 1){
                hpArr[1] -= dmgArr[0];
                if(hpArr[1]> 0){
                    hpArr[0] -= dmgArr[1];
                    if(hpArr[0]<=0){
                        winner = props.pokemon2.name.english;
                    }
                } else{
                    winner = props.pokemon1.name.english;
                }
            } else {
                hpArr[0] -= dmgArr[1];
                if(hpArr[0] > 0){
                    hpArr[1] -= dmgArr[0];
                    if(hpArr[1]<=0){
                        winner = props.pokemon1.name.english;
                    }
                } else {
                    winner = props.pokemon2.name.english;
                }
            }
        }

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
      
        // let log = document.getElementById("log");
        // let pok1Name=props.pokemon1.name.english; 
        // let pok2Name=props.pokemon2.name.english;
        // fightlog.concat(props.pokemon1.name.english + " vs. " + props.pokemon2.name.english);
    //    setInterval(()=>{
    //        let li = createElement("li")
    //        let label = createElement("label")
    //        if(pok1HP >0 && pok2HP >0){
    //             if(pok1Spd > pok2Spd){
    //                 pok1HP = pok1HP-pok2Dmg;
    //                 pok2HP = pok2HP-pok2Dmg;
    //                 li.value = pok1Name + " attacks for " + pok1Dmg + " Points of Damage."
    //                 // li.appendChild(label)
    //                 log.appendChild(li);
    //                 props.setPokemon2({
    //                     // id:props.pokemon1.id,
    //                     // name:props.pokemon1.name,
    //                     // type:props.pokemon1.type,
    //                     base:{
    //                         HP:pok2HP,
    //                     },
    //                     // sprite:props.pokemon1.sprite
    //                 })
    //                 li.value = pok2Name + " attacks for " + pok2Dmg + " Points of Damage."
    //                 // li.appendChild(label)
    //                 log.appendChild(li);
                   
    //                 props.setPokemon1({
    //                     // id:props.pokemon1.id,
    //                     // name:props.pokemon1.name,
    //                     // type:props.pokemon1.type,
    //                     base:{
    //                         HP:pok1HP,
    //                     },
    //                     // sprite:props.pokemon1.sprite
    //                 })
    //             } else{
    //                 pok1HP = pok1HP-pok2Dmg;
    //                 pok2HP = pok2HP-pok2Dmg;
    //                 li.value = pok2Name + " attacks for " + pok2Dmg + " Points of Damage."
    //                 // li.appendChild(label)
    //                 log.appendChild(li);
    //                 props.setPokemon1({
    //                     // id:props.pokemon1.id,
    //                     // name:props.pokemon1.name,
    //                     // type:props.pokemon1.type,
    //                     base:{
    //                         HP:pok1HP,
    //                     },
    //                     // sprite:props.pokemon1.sprite
    //                 })
    //                 li.value = pok1Name + " attacks for " + pok1Dmg + " Points of Damage."
    //                 // li.appendChild(label)
    //                 log.appendChild(li);
    //                 props.setPokemon2({
    //                     // id:props.pokemon1.id,
    //                     // name:props.pokemon1.name,
    //                     // type:props.pokemon1.type,
    //                     base:{
    //                         HP:pok2HP,
    //                     },
    //                     // sprite:props.pokemon1.sprite
    //                 })
                   
    //             }
    //     } else {
    //         li.value = "TheFight is over."
    //         // li.appendChild(label)
    //         log.appendChild(li);
    //         // log.appendChild(<li>TheFight is over.</li>);
    //         if(pok1HP <=0){
    //             li.value = pok2Name + " Won."
    //                 // li.appendChild(label)
    //                 log.appendChild(li);
    //         } else{
    //             li.value = pok1Name + " Won."
    //                 // li.appendChild(label)
    //                 log.appendChild(li);
                   
    //         }

    //     }   
    //    },1000)
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