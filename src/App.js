import React from "react";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react"; // hook = função js que faz algo especial na biblioteca
//useState - area de memória para reutilizar / váriavel longa / permite que as info gerem alterações na tela
// possui o estado "relogio" e a função que altera o estado "setRelogio"
import Home from "./components/home"

function App() {
  return ( //html será renderizado
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Navigate to="/login" />}/>
      </Routes>
    </Router>
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
