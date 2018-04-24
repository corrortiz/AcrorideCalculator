import React, { Component } from 'react';
import PropTypes from 'prop-types';
//MUI Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
//Componentes internos
import CambioRuta from '../CambioRuta';
//CSS in JS
const styles = {
  root: {},
};

/**
 * Simple AppBar
 */
export class HeaderAppBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="appBar">
        <AppBar className={classes.root} position={'sticky'}>
          <Toolbar className="appBar__toolbar">
              <Typography variant="title" color="inherit" className={"appBar__title"}>
                Cotizaciónes
              </Typography>
          </Toolbar>
          <CambioRuta />
        </AppBar>
      </div>
    );
  }
}

HeaderAppBar.propTypes = {
  globals: PropTypes.shape({
    showLoading: PropTypes.bool.isRequired
  })
};

export default withStyles(styles)(HeaderAppBar);
