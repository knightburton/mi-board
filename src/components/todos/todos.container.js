import { connect } from 'react-redux';
import { getTodos } from '../../state/todos';
import Todos from './todos.component';

const mapStateToProps = state => ({
  todos: getTodos(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
