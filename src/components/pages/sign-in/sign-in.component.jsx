import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import Form from '../../commons/form/form.component';
import ProjectTitle from '../../commons/project-title/project-title.component';

import Logo from '../../../assets/images/icon.png';

import useStyles from './sign-in.styles';

const SignIn = ({ error, authInProgress, signIn }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Grid spacing={0} direction="row" alignItems="center" justify="center" className={classes.grid} container>
        <Grid xs={12} sm={12} md={10} item>
          <div className={classes.avatarWrapper}>
            <Avatar className={classes.avatar} imgProps={{ draggable: false }} src={Logo} />
            {authInProgress && (
              <CircularProgress size={52} thickness={1.8} className={classes.progressCircle} />
            )}
          </div>
          <ProjectTitle />
          {error && (
            <Typography className={classes.error} variant="body1" component="p" align="center" color="error" gutterBottom>
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
                required: true,
              },
              {
                key: 'password',
                type: 'password',
                label: 'Password',
                autocomplete: 'password',
                defaultValue: '',
                disabled: authInProgress,
                required: true,
              },
            ]}
            submitFunction={signIn}
            submitButton={(
              <Button type="submit" color="primary" variant="text" disabled={authInProgress}>
                Sign In
              </Button>
            )}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

SignIn.propTypes = {
  authInProgress: PropTypes.bool.isRequired,
  error: PropTypes.string,
  signIn: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  error: null,
};

export default SignIn;
