import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/fontawesome-free-solid';

export default class TodosListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, text, checked, handleTodoClick, handleRemoveTodoClick } = this.props;
    const textClass = checked ? ' font-line-through text-muted' : '';

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center border-0 pr-1">
        <div className="form-group mb-0">
          <input
            className="form-check-input cursor-pointer"
            type="checkbox"
            id={`todo-${id}`}
            onChange={() => handleTodoClick(id)}
            checked={checked} />
          <label
            className={`form-check-label cursor-pointer font-weight-bold${textClass}`}
            htmlFor={`todo-${id}`}>
            {text}
          </label>
        </div>
        <span
          title="Remove todo"
          onClick={() => handleRemoveTodoClick(id)}>
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="text-danger cursor-pointer" />
        </span>
      </li>
    );
  }
}
