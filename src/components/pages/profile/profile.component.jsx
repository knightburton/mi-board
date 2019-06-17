import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import Section from '../../commons/section/section.component';
import Form from '../../commons/form/form.component';
import FormSingleValue from '../../commons/form-single-value/form-single-value.component';

import { getFormattedTimestamp } from '../../../helpers';
import { FORM_DISPLAY_NAME, FORM_EMAIL } from './profile.constants';

export default class Profile extends React.PureComponent {
  static propTypes = {
    profileData: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    }),
    updataAuthAndProfile: PropTypes.func.isRequired,
    updataEmail: PropTypes.func.isRequired
  };

  static defaultProps = {
    profileData: {}
  };

  render() {
    const {
      profileData,
      updataAuthAndProfile,
      updataEmail
    } = this.props;

    return (
      <Container maxWidth="md">

        <Section title="Profile info">
          <Form
            controls={[{ ...FORM_DISPLAY_NAME, defaultValue: profileData.name || '' }]}
            submitFunction={attributes => updataAuthAndProfile(attributes)}
            single
          />
          <Form
            controls={[{
              ...FORM_EMAIL,
              defaultValue: profileData.email || '',
              label: `Email (${profileData.emailVerified ? 'Verified' : 'Not verified'})`
            }]}
            submitFunction={({ email }) => updataEmail(email)}
            single
          />
          <FormSingleValue label="Created at" value={getFormattedTimestamp(profileData.createdAt)} />
          <FormSingleValue label="Last Login at" value={getFormattedTimestamp(profileData.lastLoginAt)} />
        </Section>

      </Container>
    );
  }
}
