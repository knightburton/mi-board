import { connect } from 'react-redux';
import { getProfileID } from '../../../store/profile';

import Todo from './todo.component';

const mapStateToProps = state => ({
  profileID: getProfileID(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
