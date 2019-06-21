import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Section from '../../commons/section/section.container';
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
            submitFunction={() => {}}
            submitButton={(
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            )}
          />
        </Section>

      </Container>
    );
  }
}

export default Todo;
