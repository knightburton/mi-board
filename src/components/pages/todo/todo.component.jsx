import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import AddSection from './add-section/add-section.container';
import ListSection from './list-section/list-section.container';

const Todo = ({ profileID }) => (
  <Container maxWidth="md">
    <AddSection />
    <ListSection profileID={profileID} />
  </Container>
);

Todo.propTypes = {
  profileID: PropTypes.string.isRequired,
};

export default Todo;
