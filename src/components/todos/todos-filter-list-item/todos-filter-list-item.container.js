import { connect } from 'react-redux';
import { getTodosFilter, changeTodosFilter } from '../../../state/todos';
import TodosFilterListItem from './todos-filter-list-item.component';

const mapStateToProps = state => ({
  selectedFilter: getTodosFilter(state)
});

const mapDispatchToProps = dispatch => ({
  handleFilterChange: filter => dispatch(changeTodosFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosFilterListItem);
