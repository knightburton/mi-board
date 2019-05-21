import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b5b5b7',
      main: '#677077',
      dark: '#252839',
      contrastText: '#fff'
    },
    secondary: deepOrange,
  },
});

export default theme;
