import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import Section from '../common/section/section.component';
import Form from '../common/form/form.component';

import PROFILE_CONTROLS from './profile.constants';

export default class Profile extends React.PureComponent {
  static propTypes = {
    profileData: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    })
  };

  static defaultProps = {
    profileData: {}
  };

  render() {
    const { profileData } = this.props;

    return (
      <Container maxWidth="md">

        <Section>
          <Form
            controls={[{ ...PROFILE_CONTROLS.NAME, defaultValue: profileData.name || undefined }]}
            submitFunction={() => {}}
            single
          />
          <Form
            controls={[{ ...PROFILE_CONTROLS.EMAIL, defaultValue: profileData.email || undefined }]}
            submitFunction={() => {}}
            single
          />
        </Section>

      </Container>
    );
  }
}
