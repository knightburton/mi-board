import React from 'react';
import PropTypes from 'prop-types';

export default class TodosFilterListItem extends React.Component {

  constructor(props) {
    super(props);

    this.isChecked = () => this.props.selectedFilter === this.props.filter;
    this.getLabelClass = () => this.isChecked() ? 'text-info' : 'text-muted';
  }

  render() {
    const { filter, handleFilterChange } = this.props;
    const labelClass = this.getLabelClass();
    const checked = this.isChecked();

    return (
      <div className="form-check form-check-inline mr-2">
        <input
          className="form-check-input cursor-pointer"
          type="radio"
          name="filter"
          id={`filter-${filter}`}
          value={filter}
          onChange={() => handleFilterChange(filter)}
          checked={checked} />
        <label
          className={`form-check-label cursor-pointer font-weight-bold text-capitalize ${labelClass}`}
          htmlFor={`filter-${filter}`}>
          {filter}
        </label>
      </div>
    );
  }
}

TodosFilterListItem.propTypes = {
  filter: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired
};
