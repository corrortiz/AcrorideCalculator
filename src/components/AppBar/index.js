import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import { inicialListItems } from './tileData';

import App from '../Routs/App';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 2,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
//TODO: cerrar en click
class AppBarDrawer extends React.Component {
  state = {
    openDrawer: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      openDrawer: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div>
        <div className={classes.list} />
        <List>{inicialListItems}</List>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Cotizador Online de Acroride
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.openDrawer}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <App/>
        </main>
      </div>
    );
  }
}

AppBarDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarDrawer);