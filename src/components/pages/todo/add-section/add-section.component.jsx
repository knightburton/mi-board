import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import Section from '../../../commons/section/section.container';
import Form from '../../../commons/form/form.component';

import { BASIC_TODO_CONTROLS } from './add-section.constants';

const AddSection = ({ addTodo }) => (
  <Section title="New Todo" waitingKey="newTodo">
    <Form
      controls={BASIC_TODO_CONTROLS}
      submitFunction={addTodo}
      submitButton={(
        <Button type="submit" variant="contained" color="primary">
          Create Todo
        </Button>
      )}
    />
  </Section>
);

AddSection.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddSection;
