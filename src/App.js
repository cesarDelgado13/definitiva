import React from "react";
import Login from "./views/login";
import Registro from "./views/registro";
import Home from "./views/Home";
import Bridge from "./views/bridge";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//Estilos
import './App.css'

function App(){
  
  return(
    // Aqui va a ser la nevagacion
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Bridge" element={<Bridge/>}/>
      </Routes>
    </Router>
  );
}

export default App;