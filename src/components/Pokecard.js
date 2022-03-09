import React from "react";

function Pokecard({pokemon1, pokemonSprite1}){
        // console.log(pokemon1)data.base
    return(
        <div className="pokeCard"> 
                <h3>{"#"+pokemon1.id+" "+ pokemon1.name.english} </h3>
                    <img src={pokemon1.sprite.front_default} alt="Pokemon 2"/>
                    <table className="cardtable">
                    <tbody>
                        <tr>
                            <td>Type:</td>
                            <td>{pokemon1.type[1] ? (pokemon1.type[0] + ", "+ pokemon1.type[1]):(pokemon1.type[0])}</td>    
                        </tr>
                        <tr>
                            <td>HP:</td>
                            <td>{pokemon1.base.HP}</td>    
                        </tr>
                        <tr>
                            <td>Attack:</td>
                            <td>{pokemon1.base.Attack}</td>    
                        </tr>
                        <tr>
                            <td>Defense:</td>
                            <td>{pokemon1.base.Defense}</td>    
                        </tr>
                        <tr>
                            <td>Special Attack:</td>
                            <td>{pokemon1.base['Sp. Attack']}</td>    
                        </tr>
                        <tr>
                            <td>Special Defense:</td>
                            <td>{pokemon1.base['Sp. Defense']}</td>    
                        </tr>
                        <tr>
                            <td>Speed:</td>
                            <td>{pokemon1.base.Speed}</td>    
                        </tr>
                    </tbody>
                </table>
                </div>
    );

}
export default Pokecard;