import React, { Component } from "react";
import PropTypes from "prop-types";
import jsPDF from "jspdf";
import moment from "moment";
//Material UI Controls
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Save from "material-ui-icons/Save";
//Internal Controls
import InputExtra from "./InputExtra";
import ResultadoTotal from "./ResultadoTotal";
//API de Formato
import numeral from "numeral";
//CSS in JS
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1,
    width: "70vw"
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
    FechaSericio: moment(Date.now()).format("YYYY-MM-DD"),
    Cliente: "",
    Vehiculo: "",
    PuntoPartida: "",
    PuntoDestino: "",
    Descripcion: "",
    DerechoPiso: 0,
    Salario: 0,
    Gasolina: 0,
    Guia: 0,
    LunchBox: 0,
    Ganancias: 0,
    Comicion: 0,
    Otro: 0,
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

  makePdf = () => {
    let doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Acroride Cotizacion ", 10, 20);
    doc.setFontSize(16);
    doc.text(`Fecha: ${moment(Date.now()).format("YYYY-MM-DD")}`, 10, 30);
    doc.text(`Cotizacion para  ${this.state.Cliente}`, 10, 50);
    doc.text(`Fecha Servicio: ${this.state.FechaSericio}`, 10, 60);
    doc.text(
      `Descripcion del servicio: ${this.state.Descripcion} en el vehiculo: ${
        this.state.Vehiculo
      }`,
      10,
      75
    );
    doc.text(`Servicio`, 10, 160);
    doc.text(`-- ${this.sumaTodo()}`, 150, 160);
    doc.text(`IVA`, 10, 170);
    doc.text(`--${this.sumaIva()}`, 150, 170);
    doc.text(
      `________________________________________________________`,
      10,
      180
    );
    doc.text(`Total`, 10, 190);
    doc.text(`-- ${this.sumaTotal()}`, 150, 190);

    doc.save("cotización.pdf");
  };

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
            <InputExtra
              nombre="Fecha Servicio"
              monto={this.state.FechaSericio}
              cambioState={this.handleChange}
              idProps="FechaSericio"
              type="Date"
            />
            <InputExtra
              nombre="Cliente"
              monto={this.state.Cliente}
              cambioState={this.handleChange}
              idProps="Cliente"
              type="text"
            />
            <InputExtra
              nombre="Vehiculo"
              monto={this.state.Vehiculo}
              cambioState={this.handleChange}
              idProps="Vehiculo"
              type="text"
            />
            <InputExtra
              nombre="Punto de Partida"
              monto={this.state.PuntoPartida}
              cambioState={this.handleChange}
              idProps="PuntoPartida"
              type="text"
            />
            <InputExtra
              nombre="Punto de Destino"
              monto={this.state.PuntoDestino}
              cambioState={this.handleChange}
              idProps="PuntoDestino"
              type="text"
            />
            <InputExtra
              nombre="Descripcion del servicio"
              monto={this.state.Descripcion}
              cambioState={this.handleChange}
              idProps="Descripcion"
              type="text"
            />
            <InputExtra
              nombre="Derecho de Piso"
              monto={this.state.DerechoPiso}
              cambioState={this.handleChange}
              idProps="DerechoPiso"
            />
            <InputExtra
              nombre="Salario"
              monto={this.state.Salario}
              cambioState={this.handleChange}
              idProps="Salario"
            />
            <InputExtra
              nombre="Gasolina"
              monto={this.state.Gasolina}
              cambioState={this.handleChange}
              idProps="Gasolina"
            />
            <InputExtra
              nombre="Guia"
              monto={this.state.Guia}
              cambioState={this.handleChange}
              idProps="Guia"
            />
            <InputExtra
              nombre="Lunch Box"
              monto={this.state.LunchBox}
              cambioState={this.handleChange}
              idProps="LunchBox"
            />
            <InputExtra
              nombre="Comicion"
              monto={this.state.Comicion}
              cambioState={this.handleChange}
              idProps="Comicion"
            />
            <InputExtra
              nombre="Ganancias"
              monto={this.state.Ganancias}
              cambioState={this.handleChange}
              idProps="Ganancias"
            />
            <InputExtra
              nombre="Otros Gastos"
              monto={this.state.Otro}
              cambioState={this.handleChange}
              idProps="Otro"
            />
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalculadoraRuta);
