import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/DeleteOutline';

import Section from '../../commons/section/section.container';
import Form from '../../commons/form/form.component';
import FormSingleValue from '../../commons/form-single-value/form-single-value.component';
import Avatar from '../../commons/avatar/avatar.component';
import Confirmation from '../../widgets/confirmation/confirmation.component';

import ActionsMenu from './actions-menu/actions-menu.container';

import { ProfileConsumer } from '../../contexts/profile';

import { getFormattedTimestamp } from '../../../utils';
import { FORM_DISPLAY_NAME, FORM_EMAIL, FORM_PHOTO } from './profile.constants';

const Profile = ({ updateAuth, updateEmail, uploadProfilePhoto, deleteProfilePhoto }) => (
  <Container maxWidth="md">

    <Section title="Details" waitingKey="profileDetails">
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
        <ProfileConsumer>
          {profile => (
            <Grid xs={12} sm={8} item>
              <Form
                controls={[{ ...FORM_DISPLAY_NAME, defaultValue: profile.name || '' }]}
                submitFunction={attributes => updateAuth(attributes)}
                single
              />
              <Form
                controls={[{
                  ...FORM_EMAIL,
                  defaultValue: profile.email || '',
                  label: `Email (${profile.emailVerified ? 'Verified' : 'Not verified'})`,
                }]}
                submitFunction={({ email }) => updateEmail(email)}
                single
              />
              <Form
                controls={[{ ...FORM_PHOTO, defaultValue: profile.photoURL || '' }]}
                submitFunction={({ photo }) => uploadProfilePhoto(photo[0])}
                secondaryButton={(
                  <Confirmation
                    id="delete-profile-photo"
                    title="Delete profile photo?"
                    description="Your photo will be completely removed from everywhere and will be replaced with the default avatar."
                    onAgree={() => deleteProfilePhoto()}
                    toggle={show => (
                      <IconButton onClick={() => show()} disabled={!profile.photoURL}>
                        <DeleteIcon fontSize="small" color="error" />
                      </IconButton>
                    )}
                  />
                )}
                allowControlsChange
                single
              />
              <FormSingleValue label="Created at" value={getFormattedTimestamp(profile.createdAt)} />
              <FormSingleValue label="Last Sign In at" value={getFormattedTimestamp(profile.lastLoginAt)} />
            </Grid>
          )}
        </ProfileConsumer>
      </Grid>
    </Section>

  </Container>
);

Profile.propTypes = {
  updateAuth: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  uploadProfilePhoto: PropTypes.func.isRequired,
  deleteProfilePhoto: PropTypes.func.isRequired,
};


export default Profile;
