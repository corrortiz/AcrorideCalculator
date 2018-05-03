import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
//Material UI Controls
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from 'material-ui/Grid';
import Button from "material-ui/Button";
import Save from "material-ui-icons/Save";
//Internal Controls
import InputExtra from "./InputExtra";
import ResultadoTotal from "./ResultadoTotal";
import {makePdf} from './reporte';
//API de Formato
import numeral from "numeral";
//CSS in JS
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1,
  }),
  button: {
    margin: theme.spacing.unit,
    color: "white",
    background: "#b56969"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

/**
 * Componente layout para la calculadora de la creacion del presupuesto
 */
class CalculadoraRuta extends Component {
  state = {
    FechaServicio: moment(Date.now()).format("YYYY-MM-DD"),
    Cliente: "",
    Vehiculo: "",
    PuntoPartida: "",
    PuntoDestino: "",
    Descripcion: "",
    DerechoPiso: "",
    Salario: "",
    Gasolina: "",
    Guia: "",
    LunchBox: "",
    Ganancias: "",
    Comicion: "",
    Otro: "",
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  sumaTodo = () => {
    let derechoDePiso = Number(this.state.DerechoPiso);
    let salario = Number(this.state.Salario);
    let gasolina = Number(this.state.Gasolina);
    let guia = Number(this.state.Guia);
    let lunchBox = Number(this.state.LunchBox);
    let ganancias = Number(this.state.Ganancias);
    let comicion = Number(this.state.Comicion);
    let otro = Number(this.state.Otro);
    let resultado =
      salario +
      gasolina +
      derechoDePiso +
      guia +
      lunchBox +
      ganancias +
      comicion +
      otro;
    return resultado;
  };

  sumaIva = () => {
    let IVA = this.sumaTodo() * 0.16;
    return IVA;
  };

  sumaTotal = () => {
    return this.sumaTodo() + this.sumaIva();
  };

  generateReport = () => {
    const {Cliente, FechaServicio, Descripcion, Vehiculo} = this.state
    makePdf(Cliente, FechaServicio, Descripcion, Vehiculo, this.sumaTodo(), this.sumaIva(), this.sumaTotal());
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className="box">
        <Paper className={`calculadora ${classes.root}`} elevation={4}>
          <div className="calculadora__header">
            <h1 className="calculadora__header__titulo">Cotización</h1>
            <ResultadoTotal
              IVA={numeral(this.sumaIva()).format("$0,0.00")}
              subTotal={numeral(this.sumaTodo()).format("$0,0.00")}
              total={numeral(this.sumaTotal()).format("$0,0.00")}
            />
          </div>
          <div className="calculadora__extra">
            <Grid container spacing={24}>
              <Grid item xs>
                <InputExtra
                  nombre="Fecha Servicio"
                  monto={this.state.FechaServicio}
                  cambioState={this.handleChange}
                  idProps="FechaServicio"
                  type="Date"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Cliente"
                  monto={this.state.Cliente}
                  cambioState={this.handleChange}
                  idProps="Cliente"
                  type="text"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Vehiculo"
                  monto={this.state.Vehiculo}
                  cambioState={this.handleChange}
                  idProps="Vehiculo"
                  type="text"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Punto de Partida"
                  monto={this.state.PuntoPartida}
                  cambioState={this.handleChange}
                  idProps="PuntoPartida"
                  type="text"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Punto de Destino"
                  monto={this.state.PuntoDestino}
                  cambioState={this.handleChange}
                  idProps="PuntoDestino"
                  type="text"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Descripcion del servicio"
                  monto={this.state.Descripcion}
                  cambioState={this.handleChange}
                  idProps="Descripcion"
                  type="text"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Derecho de Piso"
                  monto={this.state.DerechoPiso}
                  cambioState={this.handleChange}
                  idProps="DerechoPiso"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Salario"
                  monto={this.state.Salario}
                  cambioState={this.handleChange}
                  idProps="Salario"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Gasolina"
                  monto={this.state.Gasolina}
                  cambioState={this.handleChange}
                  idProps="Gasolina"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Guia"
                  monto={this.state.Guia}
                  cambioState={this.handleChange}
                  idProps="Guia"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Lunch Box"
                  monto={this.state.LunchBox}
                  cambioState={this.handleChange}
                  idProps="LunchBox"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Comicion"
                  monto={this.state.Comicion}
                  cambioState={this.handleChange}
                  idProps="Comicion"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Ganancias"
                  monto={this.state.Ganancias}
                  cambioState={this.handleChange}
                  idProps="Ganancias"
                />
              </Grid>
              <Grid item xs>
                <InputExtra
                  nombre="Otros Gastos"
                  monto={this.state.Otro}
                  cambioState={this.handleChange}
                  idProps="Otro"
                />
              </Grid>
              <Grid item xs>
                <Button
                  className={`${classes.button}`}
                  variant="raised"
                  color="secondary"
                  onClick={this.generateReport}
                >
                  Guarda
                  <Save className={classes.rightIcon} />
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>
    );
  }
}

CalculadoraRuta.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalculadoraRuta);
