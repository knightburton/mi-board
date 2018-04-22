import { connect } from 'react-redux';
import { removeCompletedTodos, completeAllTodos } from '../../../state/todos';
import TodosFooter from './todos-footer.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleRemoveCompletedClick: () => dispatch(removeCompletedTodos()),
  handleCompleteAllClick: () => dispatch(completeAllTodos())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosFooter);
