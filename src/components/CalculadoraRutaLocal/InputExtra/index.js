import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Material UI
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import AddBox from 'material-ui-icons/AddBox';

//CSS in JS
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

class InputExtra extends Component {
  render() {
    const {nombre, monto, cambioState, classes, idProps, type} = this.props;
    return (
        <div className="calculadora__extra__container">
          <FormControl className={`${classes.root}`}>
            <InputLabel 
                htmlFor={nombre}
                FormControlClasses={{
                  focused: classes.inputLabelFocused,
                }}
              >
                {nombre}
              </InputLabel>

            <Input
              id={`extra_${nombre}`}
              fullWidth
              classes={{
                focused: classes.inputLabelFocused,
                underline: classes.inputInkbar,
              }}
              type={type || 'number'}
              value={monto}
              onChange={cambioState(idProps)}
              className="calculadora__extra__container__input"
              endAdornment={
                <InputAdornment position="start">
                  <AddBox className={classes.iconbutton}/>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
    );
  }
}

InputExtra.propTypes = {
  nombre: PropTypes.string.isRequired,
  monto: PropTypes.number.isRequired,
  cambioState: PropTypes.func.isRequired,
  idProps: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default withStyles(styles)(InputExtra);