import React, { useState } from 'react';
const InserirNovoRotulo = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewRow({target}) {
    setNewItem(target.value);
    console.log('texto digitado: ', target.value)
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
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
  )
};

export default InserirNovoRotulo; 