import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//Redux Store
import { Provider } from 'react-redux';
import storeConfig from '../../store/storeConfig';
//MUI Components and Config
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//Internal Components
import AppBar from '../AppBar';
import AppSnackBar from '../AppSnackBar';
import Routs from '../Routs';
/*import AppSnackBar from '../AppSnackBar/AppSnackBar';
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#e8edf3"
    },
    secondary: {
      main:"#e6cf8b"
    },
    error:{
      main:"#b56969"
    }
  },
  typography: {
    htmlFontSize: 10
  }
});

/**
 * Material UI Theme Wrap
 */
export const Layout = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar/>
      <Routs/>
      <AppSnackBar/>
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
