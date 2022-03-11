import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Leaderboard(props){
    const [anz, setAnz] = useState(809);
    const navigate = useNavigate();
    function goHome(){
        let path = "/";
        navigate(path)
    }

    return(
        <div>
            <h2>Leaderboard</h2>
            <div className="liste">
                <table className="pokelist">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Wins</td>
                            <td>Losses</td>
                            <td>Win Percentage</td>
                        </tr>
                    </thead>
                    <tbody>
                    {props.leaderList.map((entry, index)=>(
                        <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.wins}</td>
                            <td>{entry.losses}</td>
                            <td>{entry.winPer}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            
            <button className="buttons" onClick={goHome}>Go Home</button>
        </div>
    );
}
export default Leaderboard;