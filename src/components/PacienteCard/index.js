import React, { Component } from 'react';
// MUI temas
import { withStyles } from 'material-ui/styles';
//MUI componentes
import Card, { CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
//Icons
import LocalHotel from 'material-ui-icons/LocalHotel';
import Accessible from 'material-ui-icons/Accessible';
//Internal Components
import IngresoPacienteDialogo from '../Dialogos/IngresoPacienteDialogo';

//CSS in JS
const styles = theme => ({
  card: {
    margin: '1rem'
  },
  avatar: {
    backgroundColor: '#003c8f'
  },
  action: {
    fill: '#003c8f'
  },
  header: {
    letterSpacing: '.5rem',
    fontSize: '6rem',
    fontWeight: '400'
  },
  title: {
    color: '#fafafa'
  },
  flexGrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class PacienteCard extends Component {
  state = {
    openDialog: false
  };

  setOpenDialogo = empleado => {
    this.setState({ openDialog: true });
  };
  
  setCloseDialogo = () => {
    this.setState({ openDialog: false });
  };

  render() {
    const {
      nombre,
      apellidos,
      rfc,
      edad,
      sexo,
      classes
    } = this.props;

    return (
      <div>
        <Card className={`${classes.card} Pacientes`}>
          <CardHeader
            className={`${classes.header}`}
            avatar={
              <Avatar className={classes.avatar}>
                <LocalHotel />
              </Avatar>
            }
            title={`${apellidos} ${nombre} / RFC:${rfc}`}
            subheader={`Edad: ${edad} -- Sexo: ${sexo}`}
          />

          <CardActions className={classes.flexGrow} disableActionSpacing>
            <Button
              onClick={this.setOpenDialogo}
              color="primary"
            >
              Ingresar
              <Accessible className={classes.rightIcon} />
            </Button>
          </CardActions>
        </Card>

        <IngresoPacienteDialogo
          {...this.props}
          openDialog={this.state.openDialog}
          handleClose={this.setCloseDialogo}
          create={false}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PacienteCard);
