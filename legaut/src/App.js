import React from 'react';
import logo from './images/logo.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <div class="infoBar">
        <img src={logo} alt="logo" />
      </div>
      <div className="body">
        <p>
        Johnnie Walker comprou uma Ferrari por R$ 1.000.000,00 de seu conhecido Jack Daniels.
        </p>
      </div>
    </div>
  );
}

export default App;
