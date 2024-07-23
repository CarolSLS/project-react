// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Login from "./components/login";
import "./components/login.css";
import office from "./assets/office.png";
import { useEffect, useState } from "react"; // hook = função js que faz algo especial na biblioteca
//useState - area de memória para reutilizar / váriavel longa / permite que as info gerem alterações na tela
// possui o estado "relogio" e a função que altera o estado "setRelogio"
function App() {
  return (
    <div className="App">
      <div className="background">
        {/* <img src="{office}" alt="background" /> */}
      </div>
      <Login />
    </div>
  );
}

export default App;

// const [relogio, setRelogio] = useState();

// useEffect(() => {
//   console.log("teste");
// }, [])

// const name = 'Carol'
// return ( // html será renderizado
//   <div className="App">
//     <h1>JRS MOTORS</h1>
//     <p>Olá, {name} </p>

//   </div>
// );
