import React, { Component } from 'react';
import { connect } from 'react-redux';
//Actions
import { getResultadoRuta } from '../../../store/actions/resultadosRuta';
//MUI Components
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Send from 'material-ui-icons/Send';
//CSS in JS
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

/**
 * Componente que mustra y calcula el costo de la ruta
 */
class Resultados extends Component {

  handleClick = () =>{
    this.props.getResultadoRuta(this.props.inicial, this.props.final);
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
        <h1 className="calculadora__resultados__principal">{`$${resultadoRuta.costo_caseta}`}</h1>
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