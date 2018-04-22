import { connect } from 'react-redux';
import { removeCompletedTodos, completeAllTodos, changeTodosFilter } from '../../../state/todos';
import TodosFooter from './todos-footer.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleRemoveCompletedClick: () => dispatch(removeCompletedTodos()),
  handleCompleteAllClick: () => dispatch(completeAllTodos()),
  handleFilterChange: filter => dispatch(changeTodosFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosFooter);
