import { connect } from 'react-redux';
import { addTodo } from '../../../state/todos';
import TodosHeader from './todos-header.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleTodoSubmit: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosHeader);
