import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//Redux Store
import { Provider } from 'react-redux';
import storeConfig from '../../store/storeConfig';
//MUI Components and Config
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import deepPurple from 'material-ui/colors/deepPurple';
//Internal Components

import Routs from '../Routs';
/*import AppSnackBar from '../AppSnackBar/AppSnackBar';
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500:"#e8edf3"
    },
    secondary: {
      ...deepPurple,
      500:"#e6cf8b"
    }
  },
  typography: {
    htmlFontSize: 10
  }
});

/**
 * Material UI Theme Wrap
 */
const Layout = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <h1>Kiri</h1>
      <Routs/>
    </MuiThemeProvider>
  );
};

/*React Router Wrap*/
const RouterWraper = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

/**
 * Redux Store Wrap
 */
const store = storeConfig();

const ReduxWraper = (
  <Provider store={store}>
    <RouterWraper />
  </Provider>
);

export default ReduxWraper;
