import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//MUI Components
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
//Internal components
import HomeIcon from '../../images/SVG/Home';
import CodeIcon from '../../images/SVG/Code';
//CSS in JS Styles
const styles = theme => ({
  root: {}
});

/**
 * A component that renders a tab menu with icons
 */
export class CambioRuta extends Component {
  state = {
    tabValue: "one",
  }

  handleChange = (event, value) => {
    this.setState({tabValue: value});
  };

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state;

    return (
      <div className={`header__bottonNavigation ${classes.root}`}>
        <Tabs
          value={tabValue}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          className="header__bottonNavigation__tabs"
          centered
        >
          <Tab
            label={'Home'}
            icon={<HomeIcon />}
            component={Link}
            value="one"
            to={'/'}
          />
          <Tab
            label={'Calculadora'}
            icon={<CodeIcon />}
            component={Link}
            value="two"
            to={'otra-calculadora'}
          />
        </Tabs>
      </div>
    );
  }
}

export default withStyles(styles)(CambioRuta);
