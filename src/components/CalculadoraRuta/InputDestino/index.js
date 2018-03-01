import React, { Component } from 'react';
import { connect } from 'react-redux';
//Actions
import { getDestinos } from '../../../store/actions/destinos';
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
class InputDestino extends Component {
  state = {
    destino: '',
    interno: '', 
    open: false,
    anchorEl: null,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  buscarDestino = () =>{
    this.props.getDestinos(this.state.destino);
  }

  handleClick = event => {
    const anchorEl = event.currentTarget;
    this.setState(() => ({ open: true, anchorEl }));
  };

  handleClose = (event, destino) => {
    const interno = event.currentTarget.id;
    console.log(destino);
    this.setState(() => ({ open: false, interno }));
  };

  renderMenu = arreglo =>{
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
      <div className="calculadora__destino">
        <div>
          <FormControl className={`${classes.root}`}>
            <InputLabel 
              htmlFor="destino"
              FormControlClasses={{
                focused: classes.inputLabelFocused,
                
              }}
            >
              Destino
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
              className="calculadora__destino__input "
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
        <div >
          <Button
            aria-owns={open ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className="calculadora__destino__menu__button"
          >
            {interno}
          </Button>
        </div>
        <div>
          <FlightTakeoff
            onClick={this.handleClick}
            className="calculadora__destino__menu__icon"
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
    destinos: state.destinos.arregloDeDestinos
  };
};

const mapDispatchToProps = dispatch => ({
  getDestinos: lugar => dispatch(getDestinos(lugar)),
});

InputDestino = connect(mapStateToProps, mapDispatchToProps)(InputDestino);

export default withStyles(styles)(InputDestino);
