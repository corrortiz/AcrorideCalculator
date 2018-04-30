import React, { Component } from 'react';
//Forma de empleado
import IngresoPacienteForm from '../Formularios/IngresoPacienteForm';
//Material UI
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';

class IngresoPacienteDialogo extends Component {

  updateOrCreate = () =>{
    console.log("kiri")
  }

  render() {
    const {
      openDialog,
      handleClose
    } = this.props;

    return (
      <div>
        <Dialog
          open={openDialog}
          onClose={handleClose}
          maxWidth="md"
          aria-labelledby="dialogo-ingreso-paciente"
        >
          <DialogTitle id="dialogo-ingreso-paciente" className="titulo">
            {`Ingreso de Paciente`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Datos de ingreso</DialogContentText>
            <IngresoPacienteForm handleClose={handleClose} {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default IngresoPacienteDialogo;
