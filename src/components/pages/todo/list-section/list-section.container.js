import { compose } from 'redux';
import { connect } from 'react-redux';
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect';
import { getPersonalTodos } from '../../../../store/todo';

import ListSection from './list-section.component';

const mapStateToProps = state => ({
  personalTodos: getPersonalTodos(state),
});

const mapDispatchToProps = {};

export default compose(
  firestoreConnect(props => [
    { collection: 'todos', doc: props.profileID, subcollections: [{ collection: 'personal' }], storeAs: 'personalTodos' },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(ListSection);
