import React, { Component } from 'react';
//Componentes internos
import ListaPacientes from '../../../ListaPacientes';


class IngresoPaciente extends Component {
  render() {
    return (
      <div>
        <h1 className="titulo">Ingreso Paciente</h1>
        <ListaPacientes />
      </div>
    );
  }
}

export default IngresoPaciente;