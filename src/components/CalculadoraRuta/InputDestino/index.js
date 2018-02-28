import React, { Component } from 'react';
//MUI Components
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
//Form Validation
import { Field, reduxForm } from 'redux-form';

/**
 * Internal Form Component
 * @param {Hijos} param0
 */
const FormField = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    id={label}
    label={label}
    placeholder={label}
    margin="normal"
    error={touched && error}
    type={type}
    {...input}
    {...custom}
  />
);

const styles = theme => ({
  root:{},
});

/**
 * Input for looking
 */
class InputDestino extends Component {
  render() {
    const { 
      classes, 
      input,
      label,
      type,
      meta: { touched, error }} = this.props;

    return (
      <FormControl className={classes.formControl} error aria-describedby="name-error-text">
        <InputLabel htmlFor="name-error">Name</InputLabel>
        <Input id="name-error" value={this.state.name} onChange={this.handleChange} />
        <FormHelperText id="name-error-text">Error</FormHelperText>
      </FormControl>
    );
  }
}

export default withStyles(styles)(InputDestino);
