import { connect } from 'react-redux';
import { getTodos, completeTodo, removeTodo } from '../../../state/todos';
import TodosList from './todos-list.component';

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  handleTodoClick: id => dispatch(completeTodo(id)),
  handleRemoveTodoClick: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
