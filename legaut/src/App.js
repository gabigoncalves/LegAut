import React from 'react';
import logo from './images/logo.png'
import './App.css';
import Tabela from './components/Tabela';
import ContaClick from './components/ContaClick';
import TabelaTeste from './components/TabelaTeste';

function App() {
  return (
    <div className="container">
      <div className="infoBar">
        <img src={logo} alt="logo" />
      </div>
      <div className="body">
        <p> Johnnie Walker comprou uma Ferrari por R$ 1.000.000,00 de seu conhecido Jack Daniels. </p>
        <Tabela/>
      </div>

      {/* <div>
        <TabelaTeste />
      </div> */}
    </div>
  );
}

export default App;
