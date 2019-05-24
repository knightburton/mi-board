import { createMuiTheme } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8f8f8f',
      main: '#747474',
      dark: '#515151',
      contrastText: '#fff'
    },
    secondary: deepOrange,
  },
});

export default theme;
