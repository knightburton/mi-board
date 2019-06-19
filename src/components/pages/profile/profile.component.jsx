import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import DeleteIcon from '@material-ui/icons/DeleteOutline';

import Section from '../../commons/section/section.component';
import Form from '../../commons/form/form.component';
import FormSingleValue from '../../commons/form-single-value/form-single-value.component';
import Avatar from '../../commons/avatar/avatar.container';

import ActionsMenu from './actions-menu/actions-menu.container';

import { getFormattedTimestamp } from '../../../helpers';
import { FORM_DISPLAY_NAME, FORM_EMAIL, FORM_PHOTO } from './profile.constants';

export default class Profile extends React.PureComponent {
  static propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      photoURL: PropTypes.string,
      createdAt: PropTypes.string,
      lastLoginAt: PropTypes.string
    }),
    updataAuth: PropTypes.func.isRequired,
    updataEmail: PropTypes.func.isRequired,
    uploadProfilePhoto: PropTypes.func.isRequired,
    deleteProfilePhoto: PropTypes.func.isRequired
  };

  static defaultProps = {
    profile: {}
  };

  render() {
    const {
      profile,
      updataAuth,
      updataEmail,
      uploadProfilePhoto,
      deleteProfilePhoto
    } = this.props;

    return (
      <Container maxWidth="md">

        <Section title="Profile">
          <Grid spacing={0} justify="flex-end" alignItems="flex-start" container>
            <Grid xs="auto" item>
              <ActionsMenu />
            </Grid>
          </Grid>
          <Grid spacing={0} container>
            <Grid xs={12} sm={4} justify="center" alignItems="center" direction="column" item container>
              <Grid xs item>
                <Avatar size="huge" withDisabledColor />
              </Grid>
            </Grid>
            <Grid xs={12} sm={8} item>
              <Form
                controls={[{ ...FORM_DISPLAY_NAME, defaultValue: profile.name || '' }]}
                submitFunction={attributes => updataAuth(attributes)}
                single
              />
              <Form
                controls={[{
                  ...FORM_EMAIL,
                  defaultValue: profile.email || '',
                  label: `Email (${profile.emailVerified ? 'Verified' : 'Not verified'})`
                }]}
                submitFunction={({ email }) => updataEmail(email)}
                single
              />
              <Form
                controls={[{ ...FORM_PHOTO, defaultValue: profile.photoURL || '' }]}
                submitFunction={({ photo }) => uploadProfilePhoto(photo[0])}
                secondaryFunction={() => deleteProfilePhoto()}
                secondaryIcon={DeleteIcon}
                secondaryDisabled={!profile.photoURL}
                secondaryColor="error"
                allowControlsChange
                single
              />
              <FormSingleValue label="Created at" value={getFormattedTimestamp(profile.createdAt)} />
              <FormSingleValue label="Last Login at" value={getFormattedTimestamp(profile.lastLoginAt)} />
            </Grid>
          </Grid>
        </Section>

      </Container>
    );
  }
}
