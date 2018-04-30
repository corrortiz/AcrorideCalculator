import React, { Component } from 'react';
//MUI Components
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';

const styles = theme => ({
  root:{},
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: "#003c8f",
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: "#003c8f",
    },
  },
  iconbutton:{
    fill: "#003c8f" 
  }
});

//TODO: hacer que el error se remarque con el color adecuado
class InputIcon extends Component {
  render() {
    const {classes} = this.props;
    const { tipo, propiedad, label, Icono, funcionCambio, valor} = this.props;

    return (
      <div>
        <FormControl className={`${classes.root}`} fullWidth>
          <InputLabel 
            htmlFor={propiedad}
            FormControlClasses={{
              focused: classes.inputLabelFocused,
            }}
            
          >
            {label}
          </InputLabel>
          <Input
            id={propiedad}
            classes={{
              underline: classes.inputInkbar,
            }}
            type={tipo}
            
            value={valor}
            onChange={funcionCambio}
            fullWidth={true}
            endAdornment={
              <InputAdornment position="end">
                <Icono className={classes.iconbutton}/>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(InputIcon);
