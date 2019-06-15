import React from 'react';

import Container from '@material-ui/core/Container';

import Section from '../../commons/section/section.component';
import Form from '../../commons/form/form.component';

class Todo extends React.PureComponent {
  render() {
    return (
      <Container maxWidth="md">

        <Section>
          <Form
            controls={[
              {
                key: 'todo',
                type: 'textarea',
                defaultValue: '',
                label: 'To Do',
                required: true,
                rows: 1
              },
              {
                key: 'date',
                type: 'date',
                defaultValue: new Date(),
                label: 'Date'
              }
            ]}
            submitFunction={() => console.log('form submited')}
          />
        </Section>

      </Container>
    );
  }
}

export default Todo;
