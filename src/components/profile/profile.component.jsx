import React from 'react';

import Container from '@material-ui/core/Container';

import Section from '../common/section/section.component';

export default class Profile extends React.PureComponent {
  render() {
    return (
      <Container maxWidth="md">

        <Section>
          <p>Profile</p>
        </Section>

      </Container>
    );
  }
}
