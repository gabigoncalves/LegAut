import React, { Component } from 'react';
import {HotTable} from '@handsontable/react';
import 'handsontable/dist/handsontable.full.css';

class TabelaTeste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      colHeaders: ['Nome', 'Sexo', 'Planeta'],
      settings: {
        columns: [
            { data: "name", type: "text", title: 'Nome' },
            { data: "gender", title: 'Sexo', editor: 'select', selectOptions: ['male', 'female'] },
            { data: "homeplanet", title: 'Planeta', type: "text" }
        ],
        allowInsertRow: true
      }
    };
    this._listarPessoas();
  }

  _listarPessoas() {
    fetch('https://swapi.co/api/people/')
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.count > 0) {
        for (let i in responseJson.results) {
          this._pegarPlaneta(responseJson.results[i]);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _pegarPlaneta(pessoa) {
    fetch(pessoa.homeworld)
    .then((response) => response.json())
    .then((responseJson) => {
      let dados = this.state.data;
      if (responseJson !== null) {
        dados.push({
          name: pessoa.name, gender: pessoa.gender,
          homeplanet: responseJson.name});
      } else {
        dados.push({
          name: pessoa.name, gender: pessoa.gender,
          homeplanet: 'unknow'});
      }
      this.setState({data: dados});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="App">
        <HotTable data={this.state.data} colHeaders={this.state.colHeaders} settings={this.state.settings} />
      </div>
    );
  }
}

export default TabelaTeste