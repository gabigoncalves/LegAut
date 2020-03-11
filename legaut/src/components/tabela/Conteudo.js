import React from 'react';
import TextoMarcado from './TextoMarcado'
import Rotulo from './Rotulo'

const Conteudo = (props) => {
  return (
    <tr>
        <Rotulo value={props.value}/>
        <TextoMarcado />
    </tr>
  );
};

export default Conteudo;