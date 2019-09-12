import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { setSectionWaiting, addNotification } from '../app';
import { getProfileID } from '../profile';
import { getTimestampFromDate } from '../../utils';

/**
 * INITIAL STATE
 */

export const initialState = {
  filter: [],
};

/**
 * ACTION TYPES
 */

export const CHANGE_FILTER = 'CHANGE_FILTER';

/**
 * ACTION CREATORS
 */

export const changeFilter = createAction(
  CHANGE_FILTER,
  filter => filter
);

/**
 * SELECTORS
 */

// export const getList = state => state.todo.list;
export const getFilter = state => state.todo.filter;

export const getFirestoreOrderedData = state => state.firestore.ordered;
export const getPersonalTodos = createSelector(
  getFirestoreOrderedData,
  ordered => (ordered && ordered.personalTodos) || []
);

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [changeFilter]: (state, { payload: filter }) => ({ ...state, filter }),
  },
  initialState
);

/**
 * ASYNC ACTIONS
 */

export const addTodo = (firestore, todo) => async (dispatch, getState) => {
  dispatch(setSectionWaiting(true, 'newTodo'));
  try {
    const profileID = getProfileID(getState());
    await firestore.add(
      {
        collection: 'todos',
        doc: profileID,
        subcollections: [{ collection: 'personal' }],
      },
      {
        ...todo,
        'expiry-date': getTimestampFromDate(todo['expiry-date']),
        complete: false,
      }
    );
    dispatch(addNotification('The new todo is created successfully', 'success'));
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'newTodo'));
  }
};
