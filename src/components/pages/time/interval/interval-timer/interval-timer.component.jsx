import React from 'react';

import Section from '../../../../commons/section/section.component';

export default class IntervalTimer extends React.PureComponent {
  render() {
    return (
      <Section
        footer={{
          // align: 'right',
          actions: [
            {
              key: 'settings',
              function: () => {},
              label: 'Change Settings'
            }
          ]
        }}
      >
        The timer is active
      </Section>
    );
  }
}
