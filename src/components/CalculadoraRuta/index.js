import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Material UI Controls
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
//Internal Controls
import InputDestinoInicial from './InputDestinoInicial';
import InputDestinoFinal from './InputDestinoFinal';
import Resultados from './Resultados';

//CSS in JS
const styles = theme => ({
  root:theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: '85vw',
  }),
});

/**
 * Componente layout para la calculadora de la creacion del presupuesto
 */
class CalculadoraRuta extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className="box">
        <Paper className={`calculadora ${classes.root}`} elevation={4}>
          <div>
            <h1 className="calculadora__titulo">Calculo de cotización</h1>
          </div>
          <InputDestinoInicial/>
          <InputDestinoFinal/>
          <Resultados/>
        </Paper>
      </div>
    );
  }
}

CalculadoraRuta.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalculadoraRuta);
