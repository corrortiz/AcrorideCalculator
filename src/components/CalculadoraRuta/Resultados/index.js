import React, { Component } from 'react';
import { connect } from 'react-redux';
//Actions
import { getResultadoRuta } from '../../../store/actions/resultadosRuta';
//MUI Components
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Send from 'material-ui-icons/Send';
import { CircularProgress } from 'material-ui/Progress';
//CSS in JS
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    color: 'white',
    background: "#b56969"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

/**
 * Componente que mustra y calcula el costo de la ruta
 */
class Resultados extends Component {
  state = {
    showloading: false
  }

  changeLoadin = () => {
    this.setState((prevState)=> ({showloading: !prevState.showloading}));
  }

  handleClick = async () =>{
    await this.changeLoadin();
    await this.props.getResultadoRuta(this.props.inicial, this.props.final);
    await this.changeLoadin();
  }

  render() {
    const { classes, resultadoRuta} = this.props;
    return (
      <div className="calculadora__resultados">
        <Button 
          className={`${classes.button} calculadora__resultados__button`}
          variant="raised" 
          color="secondary"
          onClick={this.handleClick}
        >
          Calcula
          <Send className={classes.rightIcon} />
        </Button>
        <div className="calculadora__resultados__loading">
          {this.state.showloading && <CircularProgress className={classes.progress} color="secondary" size={70}/>}
        </div>
        <div className="calculadora__resultados__contenedorEtiquetas">
          <p className="calculadora__resultados__contenedorEtiquetas__texto">Casetas</p> 
          <p className="calculadora__resultados__contenedorEtiquetas__texto">Distancia</p> 
          <p className="calculadora__resultados__contenedorEtiquetas__texto">Tiempo</p> 
        </div>
        <div className="calculadora__resultados__contenedorResultados">
          <p className="calculadora__resultados__contenedorResultados__res">{`$${resultadoRuta.costo_caseta}`}</p>
          <p className="calculadora__resultados__contenedorResultados__res">{`${resultadoRuta.long_km} Km`}</p>
          <p className="calculadora__resultados__contenedorResultados__res">{`${resultadoRuta.tiempo_min} Min`}</p>
        </div>    
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    inicial: state.destinosInicial.destinoInicial.id_dest,
    final: state.destinosFinal.destinoFinal.id_dest,
    resultadoRuta: state.resultadoRuta.resultadoCalculoRuta,
  };
};

const mapDispatchToProps = dispatch => ({
  getResultadoRuta: (inicial, final) => dispatch(getResultadoRuta(inicial, final)),
});

Resultados = connect(mapStateToProps, mapDispatchToProps)(Resultados);

export default  withStyles(styles)(Resultados);