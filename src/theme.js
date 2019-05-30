import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fbaf37',
      main: '#fb9b05',
      dark: '#af6c03',
      contrastText: '#fff'
    },
    secondary: {
      light: '#aaabab',
      main: '#959697',
      dark: '#686969',
      contrastText: '#fff'
    },
    background: {
      default: '#eceff1'
    }
  }
});

export default theme;
