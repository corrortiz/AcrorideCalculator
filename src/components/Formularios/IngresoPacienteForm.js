import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
//Formato fecha
import moment from 'moment';
//Formick
import { Formik, Field, Form } from 'formik';
//Componests
import InputIcon from '../InputIcon';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
//Icons
import Person from 'material-ui-icons/Person';
import Security from 'material-ui-icons/Security';

/**
 * Clase que crea el formato
 */
class IngresoPacienteForm extends Component {
  render() {
    return (
      <Formik
      validate={ values => {
        let errors = {};
        if (!values.nombre) {
          errors.nombre = 'Requerido';
        }
        if (!values.apellidos) {
          errors.apellidos = 'Requerido';
        } 
        if (!values.sexo) {
          errors.sexo = 'Requerido';
        } 
        if (!values.edad) {
          errors.edad = 'Requerido';
        } 
        if (!values.rfc) {
          errors.rfc = 'Requerido';
        } 
        if (!values.servicio) {
          errors.servicio = 'Requerido';
        } 
        if (!values.cama) {
          errors.cama = 'Requerido';
        } 
        if (!values.diagnostico) {
          errors.diagnostico = 'Requerido';
        } 
        if (!values.fechaIngreso) {
          errors.fechaIngreso = 'Requerido';
        } 
        return errors;
      }}
       initialValues={
          {
            nombre:"",
            apellidos:"",
            sexo:"",
            edad:"",
            rfc:"",
            servicio:"",
            cama:"",
            diagnostico:"",
            fechaIngreso: moment(Date.now()).format("YYYY-MM-DD"),
          }
       }
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
            this.props.handleClose();
          }, 1000);
        }}
        render={(props: FormikProps<Values>) => (
          <Form>
            <Grid container alignItems="center" alignContent="center" spacing={24}>
              {/*Inicio de arrary*/}
              <Grid item sm={12} md={6}>
                <Field 
                  name="nombre"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="nombre"
                      label="Nombre"
                      valor={props.field.value}
                      Icono={Person}
                      funcionCambio={props.form.handleChange}
                      {...props}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <Field 
                  name="apellidos"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="apellidos"
                      label="Apellidos"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              {/*Primera fila*/}
              <Grid item sm={12} md={4}>
                <Field 
                  name="sexo"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="sexo"
                      label="Sexo"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={4}>
                <Field 
                  name="edad"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="number"
                      propiedad="edad"
                      label="Edad"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={4}>
                <Field 
                  name="rfc"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="rfc"
                      label="RFC"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              {/*Segunda fila*/}
              <Grid item sm={12} md={4}>
                <Field 
                  name="servicio"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="servicio"
                      label="Servicio"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={2}>
                <Field 
                  name="cama"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="cama"
                      label="Cama"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <Field 
                  name="diagnostico"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="text"
                      propiedad="diagnostico"
                      label="Diagnostico de Ingreso"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              {/*Tercera fila*/}
              <Grid item sm={12} md={4}>
                <Field 
                  name="fechaIngreso"  
                  render={(props)=>(
                    <InputIcon  
                      tipo="date"
                      propiedad="fechaIngreso"
                      label="Fecha de Ingreso"
                      valor={props.field.value}
                      Icono={Security}
                      funcionCambio={props.form.handleChange}
                    />
                  )}
                />
              </Grid>
              <Grid item sm={12} md={8}>
                <Button 
                  variant="raised" 
                  color="primary" 
                  fullWidth
                  type="submit"
                  disabled={!props.isValid || props.isSubmitting}
                >
                  Guardar
                </Button>
              </Grid>

            </Grid>
          </Form>
        )}
      />
    );
  }
}

export default withRouter(IngresoPacienteForm);

