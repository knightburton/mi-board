import { connect } from 'react-redux';
import { completeTodo, removeTodo, getTodosFilter } from '../../../state/todos';
import TodosList from './todos-list.component';

const mapStateToProps = state => ({
  filter: getTodosFilter(state)
});

const mapDispatchToProps = dispatch => ({
  handleTodoClick: id => dispatch(completeTodo(id)),
  handleRemoveTodoClick: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
