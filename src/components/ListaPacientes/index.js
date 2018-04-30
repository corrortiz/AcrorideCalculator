import React, { Component } from 'react';
//Componentes internos
import PacienteCard from '../PacienteCard';
import InputIcon from '../InputIcon';
//Icons
import LocalHotel from 'material-ui-icons/LocalHotel';

const arrayDePacientes = [
  {
    nombre: "Alejandro",
    apellidos: "Ortiz Corro",
    rfc: "OICA840706/1",
    edad: 33,
    sexo: "Masculino"
  },
  {
    nombre: "Carlos",
    apellidos: "Cruz Dorantes",
    rfc: "OICA840706/2",
    edad: 35,
    sexo: "Masculino"
  },
  {
    nombre: "Maga",
    apellidos: "Martines",
    rfc: "OICA840706/3",
    edad: 85,
    sexo: "Femenino"
  },
];

class ListaPacientes extends Component {
  renderPaciente = () => {
    return arrayDePacientes.map(paciente => (
      <PacienteCard key={paciente.rfc} {...paciente} />
    ));
  };

  render() {
    return (
      <div>
        <InputIcon  
          tipo="text"
          propiedad="buscar"
          label="Buscar Paciente"
          valor={""}
          Icono={LocalHotel}
          funcionCambio={()=>console.log("kiri")}
        />
        {this.renderPaciente()}
      </div>
    );
  }
}

export default ListaPacientes;