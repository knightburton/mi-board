import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */

export const initialState = {
  list: [],
  filter: []
};

/**
 * ACTION TYPES
 */

export const ADD_TODO = 'ADD_NEW_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const INCOMPLETE_TODO = 'INCOMPLETE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

/**
 * ACTION CREATORS
 */

export const addTodo = createAction(
  ADD_TODO,
  todo => todo
);

export const updateTodo = createAction(
  UPDATE_TODO,
  updatedTodo => updatedTodo
);

export const removeTodo = createAction(
  REMOVE_TODO,
  id => id
);

export const completeTodo = createAction(
  COMPLETE_TODO,
  id => id
);

export const incompleteTodo = createAction(
  INCOMPLETE_TODO,
  id => id
);

export const changeFilter = createAction(
  CHANGE_FILTER,
  filter => filter
);

/**
 * SELECTORS
 */

export const getList = state => state.todo.list;
export const getFilter = state => state.todo.filter;

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [addTodo]: (state, { payload: todo }) => ({ ...state, list: [...state.list, todo] }),
    [updateTodo]: (state, { payload: updatedTodo }) => ({
      ...state,
      list: state.list.map(todo => (todo.id === updatedTodo.id ? { ...todo, updatedTodo } : todo)),
    }),
    [removeTodo]: (state, { payload: id }) => ({ ...state, list: state.list.filter(todo => todo.id !== id) }),
    [completeTodo]: (state, { payload: id }) => ({
      ...state,
      list: state.list.map(todo => (todo.id === id ? { ...todo, complete: true } : todo))
    }),
    [incompleteTodo]: (state, { payload: id }) => ({
      ...state,
      list: state.list.map(todo => (todo.id === id ? { ...todo, complete: false } : todo))
    }),
    [changeFilter]: (state, { payload: filter }) => ({ ...state, filter })
  },
  initialState
);
