import React, {Component} from 'react';
import PropTypes from 'prop-types';
//MUI Components
import { withStyles } from 'material-ui/styles';
import Card, {CardContent, CardMedia } from 'material-ui/Card';
//Imagen
import ISSSTE from '../../img/portada.jpg';
//Componente Interno
import LoginForm from '../Formularios/LoginForm'


const styles = theme => ({
  card: {
    maxWidth: 450,
    [theme.breakpoints.down('md')]: {
      maxWidth: 250,
    },
  },
  media: {
    height: 350,
    width: 450,
    [theme.breakpoints.down('md')]: {
      height: 150,
      width: 250,
    },
  },
});

class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="login">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={ISSSTE}
            title="ISSSTE"
          />
          <CardContent>
            <h1 className="login__titulo">
              Ingresa tus credenciales
            </h1>
            <LoginForm />
          </CardContent>
        </Card>
    </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
