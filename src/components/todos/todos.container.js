import { connect } from 'react-redux';
import { getTodos, getTodosError, fetchTodos } from '../../state/todos';
import Todos from './todos.component';

const mapStateToProps = state => ({
  todos: getTodos(state),
  error: getTodosError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
