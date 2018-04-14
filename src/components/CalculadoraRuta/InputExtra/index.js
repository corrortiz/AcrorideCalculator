import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Material UI
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
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
    const {nombre, monto, cambioState, classes, idProps} = this.props;
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
              classes={{
                inkbar: classes.inputInkbar,
                underline: classes.inkbar,
              }}
              type={'number'}
              value={monto}
              onChange={cambioState(idProps)}
              className="calculadora__extra__container__input"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <AddBox className={classes.iconbutton}/>
                  </IconButton>
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
};

export default withStyles(styles)(InputExtra);