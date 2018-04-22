import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faMinusSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid';
import TodosFilterList from '../todos-filter-list/todos-filter-list.component';

export default class TodosFooter extends React.Component {

  constructor(props) {
    super(props);

    this.getFilterClass = current => this.props.filter === current ? 'text-info' : 'text-muted';
  }

  render() {
    const { todos, handleRemoveCompletedClick, handleCompleteAllClick } = this.props;
    const activeLeft = todos.reduce((left, {completed}) => completed ? left : left + 1, 0);

    return (
      <div className="row mt-2">
        <div className="col">
          <div className="row px-1 align-items-center">
            <div className="col-md-2 text-left">
              <p className="pt-2">
                <span className="font-weight-bold text-info">{activeLeft}</span> items left
              </p>
            </div>

            <div className="col-md-8 text-center">
              <TodosFilterList filters={['all', 'active', 'completed']} />
            </div>

            <div className="col-md-2 text-right">
              <span title="Remove completed todos" onClick={handleRemoveCompletedClick}>
                <FontAwesomeIcon
                  icon={faMinusSquare}
                  size="2x"
                  className="text-danger cursor-pointer mr-2" />
              </span>

              <span title="Complete all todos" onClick={handleCompleteAllClick}>
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  size="2x"
                  className="text-info cursor-pointer ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TodosFooter.propTypes = {
  todos: PropTypes.array.isRequired,
  handleRemoveCompletedClick: PropTypes.func.isRequired,
  handleCompleteAllClick: PropTypes.func.isRequired
};
