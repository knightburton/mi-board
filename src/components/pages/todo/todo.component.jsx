import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Section from '../../commons/section/section.container';
import Form from '../../commons/form/form.component';

import { BASIC_TODO_CONTROLS } from './todo.constants';

const Todo = () => (
  <Container maxWidth="md">

    <Section title="New Todo">
      <Form
        controls={BASIC_TODO_CONTROLS}
        submitFunction={() => {}}
        submitButton={(
          <Button type="submit" variant="contained" color="primary">
            Create Todo
          </Button>
        )}
      />
    </Section>

  </Container>
);

export default Todo;
