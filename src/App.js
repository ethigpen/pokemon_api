import './App.css';
import React,{useState} from 'react';
import axios from 'axios';



function App() {

  const[allPokemon, setAllPokemon]=useState([])

const clickHandler=()=>{

  axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
  .then(res=>{
    // console.log(res.data.results)
    setAllPokemon(res.data.results)
  })
  .catch(err=>{
    console.log(err)
  })

}




  return (
    <div className="container">
      <h1>Click the button for a list of Pokémon</h1>
      <button onClick={clickHandler} className="btn btn-primary">Fetch Pokémon</button>
      {
        allPokemon.map((poke, idx)=>{
          return <div key={idx}>
            <h3>{idx}.) {poke.name}</h3>
          </div>

        })
      }
    </div>
  );
}

export default App;
