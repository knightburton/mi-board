import React from 'react';
import PropTypes from 'prop-types';
import TodosListItem from '../todos-list-item/todos-list-item.component';

export default class TodosList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todos, filter, handleTodoClick, handleRemoveTodoClick } = this.props;

    const filteredTodos = todos.filter(t => {
      switch (filter) {
        case 'completed':
          return t.completed;
        case 'active':
          return !t.completed;
        default:
          return true;
      }
    });

    const list = filteredTodos.map((todo, index) => {
      return (
        <TodosListItem
          key={index.toString()}
          id={todo._id}
          text={todo.text}
          checked={todo.completed}
          handleTodoClick={handleTodoClick}
          handleRemoveTodoClick={handleRemoveTodoClick} />
      );
    });

    return (
      <ul className="list-group pb-4 px-1 border-bottom">
        {list.length === 0 ? (
          <p className="text-center text-info font-weight-bold">The list is empty.</p>
        ) : (
          list
        )}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  handleTodoClick: PropTypes.func.isRequired,
  handleRemoveTodoClick: PropTypes.func.isRequired
};
