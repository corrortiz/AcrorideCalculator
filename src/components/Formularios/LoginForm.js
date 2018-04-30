import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
//Formick
import { Formik, Field, Form } from 'formik';
//Componests
import InputIcon from '../InputIcon';
import Button from 'material-ui/Button';
//Icons
import Person from 'material-ui-icons/Person';
import Security from 'material-ui-icons/Security';

/**
 * Clase que crea el formato
 */
class LoginForm extends Component {
  render() {
    return (
      <Formik
      validate={ values => {
        let errors = {};
        if (!values.usuario) {
          errors.usuario = 'Requerido';
        }
        if (!values.password) {
          errors.password = 'Requerido';
        } 
        return errors;
      }}
       initialValues={
          {
            usuario:"",
            password:""
          }
       }
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            this.props.history.push("/ingreso-paciente");
          }, 1000);
        }}
        render={(props: FormikProps<Values>) => (
          <Form>
            <div className="login__inputs">
              <Field 
                name="usuario"  
                render={(props)=>(
                  <InputIcon  
                    tipo="text"
                    propiedad="usuario"
                    label="Usuario"
                    valor={props.field.value}
                    Icono={Person}
                    funcionCambio={props.form.handleChange}
                    {...props}
                  />
                )}
              />
              <Field 
                name="password"  
                render={(props)=>(
                  <InputIcon  
                    tipo="password"
                    propiedad="password"
                    label="Contraseña"
                    valor={props.field.value}
                    Icono={Security}
                    funcionCambio={props.form.handleChange}
                  />
                )}
              />
              </div>
              <div className="login__button">
                <Button 
                  variant="raised" 
                  color="primary" 
                  fullWidth
                  type="submit"
                  disabled={!props.isValid || props.isSubmitting}
                >
                  Entrar
                </Button>
            </div>
          </Form>
        )}
      />
    );
  }
}

export default withRouter(LoginForm);

