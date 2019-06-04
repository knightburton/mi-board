import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';

import Form from '../common/form/form.container';
import ProjectTitle from '../common/project-title/project-title.component';

import Logo from '../../assets/images/icon.png';

import styles from './login.styles';

class Login extends React.PureComponent {
  render() {
    const { error, authInProgress, login, classes } = this.props;

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Grid spacing={0} direction="row" alignItems="center" justify="center" className={classes.grid} container>
          <Grid xs={12} sm={12} md={10} item>
            <div className={classes.avatarWrapper}>
              <Avatar className={classes.avatar} src={Logo} />
              {authInProgress && (
                <CircularProgress size={52} thickness={1.8} className={classes.progressCircle} />
              )}
            </div>
            <ProjectTitle />
            {error && (
              <Typography variant="body1" component="p" align="center" color="error" gutterBottom>
                {error}
              </Typography>
            )}
            <Form
              controls={[
                {
                  key: 'email',
                  type: 'text',
                  label: 'Email',
                  autocomplete: 'email',
                  defaultValue: '',
                  disabled: authInProgress,
                  required: true
                },
                {
                  key: 'password',
                  type: 'password',
                  label: 'Password',
                  autocomplete: 'password',
                  defaultValue: '',
                  disabled: authInProgress,
                  required: true
                }
              ]}
              submitFunction={credentials => login(credentials)}
              submitLabel="Login"
              submitDisabled={authInProgress}
              submitVariant="text"
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Login.propTypes = {
  authInProgress: PropTypes.bool.isRequired,
  error: PropTypes.string,
  login: PropTypes.func.isRequired
};

Login.defaultProps = {
  error: null,
};

export default withStyles(styles)(Login);
