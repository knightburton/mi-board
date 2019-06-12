import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Section from '../../common/section/section.component';

export default class Stopwatch extends React.PureComponent {
  render() {
    return (
      <Container maxWidth="md">

        <Section>
          <Typography variant="body1">
            A clock that can be started and stopped in order to measure the exact time of an event,
            especially a sports event.
          </Typography>
        </Section>

      </Container>
    );
  }
}
