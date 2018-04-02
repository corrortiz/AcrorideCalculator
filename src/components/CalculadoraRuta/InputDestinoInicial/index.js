import React, { Component } from 'react';
import { connect } from 'react-redux';
//Actions
import { getDestinosInicial, setDestinosInicial } from '../../../store/actions/destinoInicial';
//MUI Components
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import Search from 'material-ui-icons/Search';
import FlightTakeoff from 'material-ui-icons/FlightTakeoff';

const styles = theme => ({
  root:{},
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: "#e6cf8b",
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: "#e6cf8b",
    },
  },
  iconbutton:{
    fill: "#b56969"
  }
});

/**
 * Input for looking
 */
class InputDestinoInicial extends Component {
  state = {
    interno: '',
    destino: "", 
    open: false,
    anchorEl: null,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  buscarDestino = () =>{
    this.props.getDestinosInicial(this.state.destino);
  }

  handleClick = event => {
    const anchorEl = event.currentTarget;
    this.setState(() => ({ open: true, anchorEl }));
  };

  handleClose = (event, destino) => {
    const interno = event.currentTarget.id;
    this.props.setDestinosInicial(destino);
    this.setState(() => ({ open: false, interno }));
  };

  setDestino = (interno) => {
    this.setState(() => ( interno ));
  };

  renderMenu = arreglo =>{
    if(!arreglo){
      return  <MenuItem onClick={(event)=>this.handleClose(event, "Buscando")}>
                Buscando
              </MenuItem>
    }

    if(arreglo[0].nombre===""){
      return  <MenuItem onClick={(event)=>this.handleClose(event, "Sin Resultados")}>
                Sin Resultados
              </MenuItem>
    }

    return arreglo.map(destino => (
      <MenuItem 
        onClick={(event)=>this.handleClose(event, destino)} 
        id={destino.nombre} 
        key={destino.id_dest} 
      >
        {destino.nombre}
      </MenuItem>
    ));
  }

  render() {
    const {classes} = this.props;
    const { open, anchorEl, interno} = this.state;

    return (
      <div className="calculadora__destinoInicial">
        <div className="calculadora__destinoInicial__inputContainer">
          <FormControl className={`${classes.root}`}>
            <InputLabel 
              htmlFor="destino"
              FormControlClasses={{
                focused: classes.inputLabelFocused,
                
              }}
            >
              Punto Inicial
            </InputLabel>
            <Input
              id="adornment-destino"
              classes={{
                inkbar: classes.inputInkbar,
                underline: classes.inkbar,
              }}
              type={'text'}
              value={this.state.destino}
              onChange={this.handleChange('destino')}
              className="calculadora__destinoInicial__inputContainer__input"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.buscarDestino}>
                    <Search className={classes.iconbutton}/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="calculadora__destinoInicial__controls">
          <Button
            aria-owns={open ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className="calculadora__destinoInicial__controls__button"
            variant="raised"
          >
            {interno}
          </Button>
        </div>
        <div>
          <FlightTakeoff
            onClick={this.handleClick}
            className="calculadora__destinoInicial__controls__icon"
          />
        </div>
        <div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
          >
            {this.renderMenu(this.props.destinos)}
          </Menu>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    destinos: state.destinosInicial.arregloDeDestinosIniciales
  };
};

const mapDispatchToProps = dispatch => ({
  getDestinosInicial: lugar => dispatch(getDestinosInicial(lugar)),
  setDestinosInicial: destinoSeleccionado => dispatch(setDestinosInicial(destinoSeleccionado)),
});

InputDestinoInicial = connect(mapStateToProps, mapDispatchToProps)(InputDestinoInicial);

export default withStyles(styles)(InputDestinoInicial);
