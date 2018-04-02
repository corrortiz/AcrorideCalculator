import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jsPDF from 'jspdf';
//Material UI Controls
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Save from 'material-ui-icons/Save';
//Internal Controls
import InputDestinoInicial from './InputDestinoInicial';
import InputDestinoFinal from './InputDestinoFinal';
import Resultados from './Resultados';
import InputExtra from './InputExtra';
import ResultadoTotal from './ResultadoTotal';
//API de Formato
import numeral from 'numeral';

//CSS in JS
const styles = theme => ({
  root:theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: '85vw',
  }),
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
 * Componente layout para la calculadora de la creacion del presupuesto
 */
class CalculadoraRuta extends Component {
  state = {
    Viaticos: 0,
    Comidas: 0,
    Salario: 0,
    Hotel: 0,
    Gasolina: 0,
    DerechoPiso: 0,
    Guia: 0,
    LunchBox: 0,
    Ganancias: 0,
    Otro: 0 
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  sumaTodo = () =>{
    let viaticos = Number(this.state.Viaticos);
    let comidas = Number(this.state.Comidas);
    let salario = Number(this.state.Salario);
    let hotel = Number(this.state.Hotel);
    let gasolina = Number(this.state.Gasolina);
    let derechoDePiso = Number(this.state.DerechoPiso);
    let guia = Number(this.state.Guia);
    let lunchBox = Number(this.state.LunchBox);
    let ganancias = Number(this.state.Ganancias);
    let casetas = Number(this.props.resultadoRuta.costo_caseta);
    let otro = Number(this.state.Otro);
    let resultado = viaticos+comidas+salario+hotel+gasolina+derechoDePiso+guia+lunchBox+ganancias+casetas+otro;
    return numeral(resultado).format('$0,0.00');
  }

  sumaIva = () =>{
    let viaticos = Number(this.state.Viaticos);
    let comidas = Number(this.state.Comidas);
    let salario = Number(this.state.Salario);
    let hotel = Number(this.state.Hotel);
    let gasolina = Number(this.state.Gasolina);
    let derechoDePiso = Number(this.state.DerechoPiso);
    let guia = Number(this.state.Guia);
    let lunchBox = Number(this.state.LunchBox);
    let ganancias = Number(this.state.Ganancias);
    let casetas = Number(this.props.resultadoRuta.costo_caseta);
    let otro = Number(this.state.Otro);
    let resultado = viaticos+comidas+salario+hotel+gasolina+derechoDePiso+guia+lunchBox+ganancias+casetas+otro;

    let IVA = resultado * .16;
    return numeral(IVA).format('$0,0.00');
  }

  sumaTotal = () =>{
    let viaticos = Number(this.state.Viaticos);
    let comidas = Number(this.state.Comidas);
    let salario = Number(this.state.Salario);
    let hotel = Number(this.state.Hotel);
    let gasolina = Number(this.state.Gasolina);
    let derechoDePiso = Number(this.state.DerechoPiso);
    let guia = Number(this.state.Guia);
    let lunchBox = Number(this.state.LunchBox);
    let ganancias = Number(this.state.Ganancias);
    let casetas = Number(this.props.resultadoRuta.costo_caseta);
    let otro = Number(this.state.Otro);
    let resultado = viaticos+comidas+salario+hotel+gasolina+derechoDePiso+guia+lunchBox+ganancias+casetas+otro;

    let IVA = (resultado * .16) + resultado;
    return numeral(IVA).format('$0,0.00');
  }

  makePdf = () =>{
    let doc = new jsPDF()
    
    doc.setFontSize(22);
    doc.text('Acroride Cotizacion ', 10, 20)
    doc.setFontSize(16);
    doc.text('A continuación le presento la cotización solicitada  ', 10, 40)
    doc.text(`Servicio`, 10, 65)
    doc.text(`-- ${this.sumaTodo()}`, 150, 65)
    doc.text(`IVA`, 10, 75)
    doc.text(`--${this.sumaIva()}`, 155, 75)
    doc.text(`________________________________________________________`, 10, 78)
    doc.text(`Total`, 10, 85)
    doc.text(`-- ${this.sumaTotal()}`, 150, 85)
    
    doc.save('cotización.pdf')
  }

  render(){
    const { classes } = this.props;
    return (
      <div className="box">
        <Paper className={`calculadora ${classes.root}`} elevation={4}>
          <div className="calculadora__header">
            <h1 className="calculadora__header__titulo">Cotización</h1>
            <ResultadoTotal IVA={this.sumaIva()} subTotal={this.sumaTodo()} total={this.sumaTotal()}/>
          </div>
          <InputDestinoInicial/>
          <InputDestinoFinal/>
          <Resultados/>
          <div className="calculadora__extra">
            <InputExtra nombre="Viaticos" monto={this.state.Viaticos} cambioState={this.handleChange} />
            <InputExtra nombre="Comidas" monto={this.state.Comidas} cambioState={this.handleChange} />
            <InputExtra nombre="Salario" monto={this.state.Salario} cambioState={this.handleChange} />
            <InputExtra nombre="Hotel" monto={this.state.Hotel} cambioState={this.handleChange} />
            <InputExtra nombre="Gasolina" monto={this.state.Gasolina} cambioState={this.handleChange} />
            <InputExtra nombre="DerechoPiso" monto={this.state.DerechoPiso} cambioState={this.handleChange} />
            <InputExtra nombre="Guia" monto={this.state.Guia} cambioState={this.handleChange} />
            <InputExtra nombre="LunchBox" monto={this.state.LunchBox} cambioState={this.handleChange} />
            <InputExtra nombre="Ganancias" monto={this.state.Ganancias} cambioState={this.handleChange} />
            <InputExtra nombre="Otro" monto={this.state.Otro} cambioState={this.handleChange} />
            <Button 
              className={`${classes.button}`}
              variant="raised" 
              color="secondary"
              onClick={this.makePdf}
            >
              Guarda
              <Save className={classes.rightIcon} />
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

CalculadoraRuta.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    resultadoRuta: state.resultadoRuta.resultadoCalculoRuta,
  };
};

CalculadoraRuta = connect(mapStateToProps, null)(CalculadoraRuta);


export default withStyles(styles)(CalculadoraRuta);
