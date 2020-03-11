import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import '../App.css';
import Conteudo from './tabela/Conteudo'
import InserirNovoRotulo from './tabela/InserirNovoRotulo'

const Tabela = () => {

  const [rotulos, setRotulos] = useState([]);
  const [newItem, setNewItem] = useState('');
  

  //função que envia o rótulo digitado
  function setNewRow({target}) {
    setNewItem(target.value);
    console.log('texto digitado: ', target.value)
  }

  function submit(e) {
    e.preventDefault();
    addNewRotulo(newItem);
  }

  //função para adicionar novo rótulo na tabela
  function addNewRotulo(rotulo) {
    const itens = Array.from(rotulos);
    itens.push({id: rotulos.length, value: rotulo});
    setRotulos(itens);
    console.log('itens: ', itens)
    // for(let i=0; i < itens.length; i++) {
    //     if (itens[i].value) {
    //         console.log('itens[i].value: ', itens[i].value)
    //     }
    // }
  }

  return (
    <div className="App">
      <div className="App-tabela">
        {/* <InserirNovoRotulo onSubmit={addNewRotulo} /> */}
        <div>
      <form onSubmit={submit}>
        <input
          id = "rotulo"
          className="Todo-input"
          placeholder="Digite um novo rótulo"
          onChange={setNewRow}
        />
        <button type="submit">
          +
        </button>
      </form>
    </div>
      </div>
      <div>
            <table border="1" cellSpacing="10">
                <thead>
                    <tr>
                        <th>Rótulo</th>
                        <th>Textos Marcados</th>
                    </tr>
                </thead>
                <tbody>
                    {rotulos.map(({id, value}, index) => (
                        <Conteudo
                            key={id}
                            value={value}
                        />
                    ))}
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default Tabela;

// Tabela.propTypes = {
//     coluna: PropTypes.string.isRequired
// }