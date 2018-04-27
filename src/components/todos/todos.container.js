import { connect } from 'react-redux';
import { getTodos, fetchTodos } from '../../state/todos';
import Todos from './todos.component';

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
