import React, { Component } from 'react';

class RerultadoTotal extends Component {
  render() {
    return (
      <div className="calculadora__resultadosTotales">
        <div className="calculadora__resultados__contenedorEtiquetas">
          <p className="calculadora__resultados__contenedorEtiquetas__texto">Sub Total</p> 
          <p className="calculadora__resultados__contenedorEtiquetas__texto">I.V.A</p> 
          <p className="calculadora__resultados__contenedorEtiquetas__texto">Total</p> 
        </div>
        <div className="calculadora__resultados__contenedorResultados">
          <p className="calculadora__resultados__contenedorResultados__res">{`${this.props.subTotal}`}</p>
          <p className="calculadora__resultados__contenedorResultados__res">{`${this.props.IVA}`}</p>
          <p className="calculadora__resultados__contenedorResultados__res">{`${this.props.total}`}</p>
        </div>
      </div>
    );
  }
}

export default RerultadoTotal;