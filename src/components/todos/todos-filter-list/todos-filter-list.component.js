import React from 'react';
import PropTypes from 'prop-types';
import TodosFilterListItem from '../todos-filter-list-item/todos-filter-list-item.container';

export default class TodosFilterList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { filters } = this.props;

    return filters.map((f, i) => <TodosFilterListItem key={i.toString()} filter={f} />);
  }
}

TodosFilterList.propTypes = {
  filters: PropTypes.array.isRequired
};
