import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//MUI Components and Config
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
//Internal Components
import Routs from '../Routs';
/*import AppSnackBar from '../AppSnackBar/AppSnackBar';
*/

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#003c8f"
    },
    secondary: {
      main:"#e0e0e0"
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

export default RouterWraper;
