import './App.css';
import { Route, Routes } from "react-router-dom";
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";
import PokemonDetails from "./components/PokemonDetails";
import Leaderboard from "./components/Leaderboard";
import Fightscreen from "./components/Fightscreen";
import Selector from "./components/Selector";
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [rnd1, setId1]=useState(Math.floor(Math.random()*808)+1);
  const [rnd2, setId2]=useState(Math.floor(Math.random()*808)+1);
  const [pokemon1 ,setPokemon1] = useState({id:0,name:{},type:[],base:{},sprite:{}});
  const [pokemon2 ,setPokemon2] = useState({id:0,name:{},type:[],base:{},sprite:{}});
  const [pokeDex , setPokeDex] = useState([]);
  const [spriteArr, setSpriteArr] = useState([])

  function random(){
    setId2(Math.floor(Math.random()*808)+1);
    setId1(Math.floor(Math.random()*808)+1);
    getPokemon();
  }
  async function getData(){
    let arr=[];
    for(let i =1;i<810;i++){
    let urlSprite="https://pokeapi.co/api/v2/pokemon/"+String(i);
    let resSprite = await axios.get(urlSprite);
    arr.push(resSprite.data.sprites.front_default)
    }
    setSpriteArr(arr);
    let url = "https://pokefight-by-jnp.herokuapp.com/pokemon";
    let response = await axios.get(url);
    console.log(response.data);
    setPokeDex(response.data);
    
}
  async function getPokemon(){
    const urlPokemon1 ="https://pokefight-by-jnp.herokuapp.com/pokemon/"+String(rnd1);
    const urlPokemon2 ="https://pokefight-by-jnp.herokuapp.com/pokemon/"+String(rnd2);
    const urlSprite1="https://pokeapi.co/api/v2/pokemon/"+String(rnd1);
    const urlSprite2="https://pokeapi.co/api/v2/pokemon/"+String(rnd2);
    let resPokemon1 = await axios.get(urlPokemon1);
    let resPokemon2 = await axios.get(urlPokemon2);
    let resSprite1 = await axios.get(urlSprite1);
    let resSprite2 = await axios.get(urlSprite2);
    setPokemon1(
        {
            id:resPokemon1.data.id,
            name:resPokemon1.data.name,
            type:resPokemon1.data.type,
            base:resPokemon1.data.base,
            sprite:resSprite1.data.sprites
        });
    setPokemon2(
        {
            id:resPokemon2.data.id,
            name:resPokemon2.data.name,
            type:resPokemon2.data.type,
            base:resPokemon2.data.base,
            sprite:resSprite2.data.sprites
        });

}
  useEffect(()=>{
    getData();
    random();
    // getPokemon();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the Pokemon Arena</p>
      </header>
      <Routes>
          <Route path="/pokemon/:id/:info" element={<PokemonDetails/>} />
          <Route path="/pokemon/:id" element={<Pokemon/>} />
          <Route path="/pokemon" element={<PokeList pokeDex={pokeDex} spriteArr={spriteArr}/>}/>
          <Route path="/leaderboard" element ={<Leaderboard/>}/>
          <Route path ="/fight" element ={<Fightscreen pokemon1={pokemon1} pokemon2={pokemon2}/>}/>
          <Route path="/" element={<Selector pokemon1={pokemon1} pokemon2={pokemon2} random={random}/>} />
      </Routes>
 
    </div>
  );
}

export default App;
