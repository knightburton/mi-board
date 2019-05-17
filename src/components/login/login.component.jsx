import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';

import Form from '../common/form/form.container';
import ProjectTitle from '../common/project-title/project-title.component';

const styles = theme => ({
  container: {
    height: '100vh'
  },
  grid: {
    height: '100vh'
  },
  avatarWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  progressCircle: {
    position: 'absolute',
    top: theme.spacing(.5),
    alignSelf: 'center',
    color: theme.palette.primary.light,
    zIndex: 1
  }
});

class Login extends React.PureComponent {
  render() {
    const { error, authInProgress, login, classes } = this.props;

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Grid spacing={0} direction="row" alignItems="center" justify="center" className={classes.grid} container>
          <Grid xs={12} sm={12} md={10} item>
            <div className={classes.avatarWrapper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              {authInProgress &&
                <CircularProgress size={48} className={classes.progressCircle} />
              }
            </div>
            <ProjectTitle />
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
              submitVariant="text"
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
