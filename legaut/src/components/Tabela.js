import React, { useState } from 'react';
import '../App.css';
import Conteudo from './tabela/Conteudo'
import InserirNovoRotulo from './tabela/InserirNovoRotulo'

const Tabela = () => {
  const [rotulos, setRotulos] = useState([]);

  function addNewRotulo(rotulo) {
    const itens = Array.from(rotulos);
    itens.push({id: rotulos.length, value: rotulo});
    setRotulos(itens);
    console.log('itens: ', itens)
  }

  return (
    <div className="App">
      <div className="App-tabela">
        <InserirNovoRotulo onSubmit={addNewRotulo} />
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