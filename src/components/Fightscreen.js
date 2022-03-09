import React from "react";
import Pokecard from "./Pokecard";
import {useNavigate} from "react-router-dom"

function Fightscreen(props){
    const navigate = useNavigate();
    let fightlog = props.pokemon1.name.english + " vs. " + props.pokemon2.name.english;
    function goHome(){
        let path = "/";
        navigate(path)
    }
    function startFight(){
        let log = document.getElementById("log");
        let pok1Name=props.pokemon1.name.english;
        let pok1HP = props.pokemon1.base.HP;
        let pok1Dmg = 0;
        let pok2Dmg = 0;
        if(props.pokemon2.base.Defense - props.pokemon1.base.Attack > 0){
            pok1Dmg = props.pokemon2.base.Defense - props.pokemon1.base.Attack;
        } else{
            pok1Dmg = 1;
        }
        if( props.pokemon1.base.Defense - props.pokemon2.base.Attack > 0){
            pok1Dmg =  props.pokemon1.base.Defense - props.pokemon2.base.Attack;
        } else{
            pok1Dmg = 1;
        }
        let pok1Spd = props.pokemon1.base.Speed;
        let pok2Name=props.pokemon2.name.english;
        let pok2HP = props.pokemon2.base.HP;   
        let pok2Spd = props.pokemon2.base.Speed;
        // fightlog.concat(props.pokemon1.name.english + " vs. " + props.pokemon2.name.english);
       setInterval(()=>{
           if(pok1HP >0 && pok2HP >0){
                if(pok1Spd > pok2Spd){
                    pok1HP = pok1HP-pok2Dmg;
                    pok2HP = pok2HP-pok2Dmg;
                    log.appendChild(<li>{pok1Name + " attacks for " + pok1Dmg + " Points of Damage."}</li>);
                    props.setPokemon2({
                        // id:props.pokemon1.id,
                        // name:props.pokemon1.name,
                        // type:props.pokemon1.type,
                        base:{
                            HP:pok2HP,
                        },
                        // sprite:props.pokemon1.sprite
                    })
                    log.appendChild(<li>{pok2Name + " attacks for " + pok2Dmg + " Points of Damage."}</li>);
                    props.setPokemon1({
                        // id:props.pokemon1.id,
                        // name:props.pokemon1.name,
                        // type:props.pokemon1.type,
                        base:{
                            HP:pok1HP,
                        },
                        // sprite:props.pokemon1.sprite
                    })
                } else{
                    pok1HP = pok1HP-pok2Dmg;
                    pok2HP = pok2HP-pok2Dmg;
                    log.appendChild(<li>{pok2Name + " attacks for " + pok2Dmg + " Points of Damage."}</li>);
                    props.setPokemon1({
                        // id:props.pokemon1.id,
                        // name:props.pokemon1.name,
                        // type:props.pokemon1.type,
                        base:{
                            HP:pok1HP,
                        },
                        // sprite:props.pokemon1.sprite
                    })
                    log.appendChild(<li>{pok1Name + " attacks for " + pok1Dmg + " Points of Damage."}</li>);
                    props.setPokemon2({
                        // id:props.pokemon1.id,
                        // name:props.pokemon1.name,
                        // type:props.pokemon1.type,
                        base:{
                            HP:pok2HP,
                        },
                        // sprite:props.pokemon1.sprite
                    })
                   
                }
        } else {
            log.appendChild(<li>TheFight is over.</li>);
            if(pok1HP <=0){
                log.appendChild(<li>{pok2Name + " Won."}</li>);
            } else{
                log.appendChild(<li>{pok1Name + " Won."}</li>);
            }

        }   
       },1000)
        log.appendChild(<li>{pok1Name + " attacks for " + pok1Dmg + " Points of Damage."}</li>);
    }
    return(
        <div>
            <h2>FIGHT</h2>
             <div >
                <div className="selector">
                    <Pokecard pokemon1={props.pokemon1} />
                    <div>
                        <ul id="log">
                            <li>{fightlog}</li>
                        </ul>
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