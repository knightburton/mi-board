import { connect } from 'react-redux';
import { getTodos, getTodosFilter } from '../../state/todos';
import Todos from './todos.component';

const mapStateToProps = state => ({
  todos: getTodos(state),
  filter: getTodosFilter(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
