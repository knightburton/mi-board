import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Form from '../common/form/form.container';

const styles = theme => ({
  container: {
    height: '100vh'
  },
  grid: {
    height: '100vh'
  }
});

class Login extends React.PureComponent {
  render() {
    const { error, authInProgress, login, classes } = this.props;

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Grid spacing={0} direction="row" alignItems="center" justify="center" className={classes.grid} container>
          <Grid xs={12} item>
            <Typography variant="h6" component="h6" align="center" gutterBottom>
              MI
            </Typography>
            {error &&
              <Typography variant="body1" component="p" align="center" color="error" gutterBottom>
                {error}
              </Typography>
            }
            <Form
              controls={[
                {
                  key: 'email',
                  type: 'text',
                  label: 'Email',
                  autocomplete: 'email',
                  defaultValue: '',
                  disabled: authInProgress,
                  required: true,
                  errorText: 'This field is required'
                },
                {
                  key: 'password',
                  type: 'password',
                  label: 'Password',
                  autocomplete: 'password',
                  defaultValue: '',
                  disabled: authInProgress,
                  required: true,
                  errorText: 'This field is required'
                }
              ]}
              submitFunction={credentials => login(credentials)}
              submitLabel="Login"
              submitDisabled={authInProgress}
              submitFullWith
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
