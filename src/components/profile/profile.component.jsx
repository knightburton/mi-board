import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import Section from '../common/section/section.component';
import Form from '../common/form/form.component';
import FormSingleValue from '../common/form-single-value/form-single-value.component';

import PROFILE_CONTROLS from './profile.constants';

export default class Profile extends React.PureComponent {
  static propTypes = {
    profileData: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    }),
    updataAuthAndProfile: PropTypes.func.isRequired
  };

  static defaultProps = {
    profileData: {}
  };

  render() {
    const { profileData, updataAuthAndProfile } = this.props;

    return (
      <Container maxWidth="md">

        <Section>
          <Form
            controls={[{ ...PROFILE_CONTROLS.NAME, defaultValue: profileData.name || '' }]}
            submitFunction={attributes => updataAuthAndProfile(attributes)}
            single
          />
          <FormSingleValue label="Email" value={profileData.email} />
        </Section>

      </Container>
    );
  }
}
