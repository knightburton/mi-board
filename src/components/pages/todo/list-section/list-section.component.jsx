import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import Section from '../../../commons/section/section.container';

const ListSection = ({ personalTodos }) => (
  <Section title="Personal Todos">
    {personalTodos.map(item => (
      <Typography key={item.id}>
        {item.todo}
      </Typography>
    ))}
  </Section>
);

ListSection.propTypes = {
  personalTodos: PropTypes.arrayOf(PropTypes.shape({
    todo: PropTypes.string,
    priority: PropTypes.string,
    'expiry-date': PropTypes.number,
    complete: PropTypes.bool,
  })),
};

ListSection.defaultProps = {
  personalTodos: [],
};

export default ListSection;
