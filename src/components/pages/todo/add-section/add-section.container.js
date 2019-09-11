import { compose } from 'redux';
import { connect } from 'react-redux';
import firestoreConnect from 'react-redux-firebase/lib/firestoreConnect';
import {
  addTodo
} from '../../../../store/todo';

import AddSections from './add-section.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { firestore }) => ({
  addTodo: todo => dispatch(addTodo(firestore, todo)),
});

export default compose(
  firestoreConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(AddSections);
