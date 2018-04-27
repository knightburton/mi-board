import axios from 'axios';
import initialState from './initial.state';

// Action types
export const TODOS_ASYNC_REQUEST = 'TODOS_ASYNC_REQUEST';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE';
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS';
export const COMPLETE_TODO_FAILURE = 'COMPLETE_TODO_FAILURE';
export const COMPLETE_ALL_TODOS_SUCCESS = 'COMPLETE_ALL_TODOS_SUCCESS';
export const COMPLETE_ALL_TODOS_FAILURE = 'COMPLETE_ALL_TODOS_FAILURE';
export const REMOVE_COMPLETED_TODOS_SUCCESS = 'REMOVE_COMPLETED_TODOS_SUCCESS';
export const REMOVE_COMPLETED_TODOS_FAILURE = 'REMOVE_COMPLETED_TODOS_FAILURE';

export const CHANGE_TODOS_FILTER = 'CHANGE_TODOS_FILTER';

// Action creators
export const todosAsyncRequest = () => ({
  type: TODOS_ASYNC_REQUEST
});

export const fetchTodosSuccess = list => ({
  type: FETCH_TODOS_SUCCESS,
  list
});

export const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  error
});

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  todo
});

export const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  error
});

export const removeTodoSuccess = id => ({
  type: REMOVE_TODO_SUCCESS,
  id
});

export const removeTodoFailure = error => ({
  type: REMOVE_TODO_FAILURE,
  error
});

export const completeTodoSuccess = id => ({
  type: COMPLETE_TODO_SUCCESS,
  id
});

export const completeTodoFailure = error => ({
  type: COMPLETE_TODO_FAILURE,
  error
});

export const completeAllTodosSuccess = () => ({
  type: COMPLETE_ALL_TODOS_SUCCESS
});

export const completeAllTodosFailure = error => ({
  type: COMPLETE_ALL_TODOS_FAILURE,
  error
});

export const removeCompletedTodosSuccess = () => ({
  type: REMOVE_COMPLETED_TODOS_SUCCESS
});

export const removeCompletedTodosFailure = error => ({
  type: REMOVE_COMPLETED_TODOS_FAILURE,
  error
});


export const changeTodosFilter = filter => ({
  type: CHANGE_TODOS_FILTER,
  filter
});

// Async action creators
export const fetchTodos = () => dispatch => {
  dispatch(todosAsyncRequest());
  return axios.get('/api/todos')
    .then(response => dispatch(fetchTodosSuccess(response.data.list)))
    .catch(error => dispatch(fetchTodosFailure(error)));
};

export const addTodo = text => dispatch => {
  dispatch(todosAsyncRequest());
  return axios.post('/api/todos/add', {text})
    .then(response => dispatch(addTodoSuccess(response.data.todo)))
    .catch(error => dispatch(addTodoFailure(error)));
};

export const removeTodo = id => dispatch => {
  dispatch(todosAsyncRequest());
  return axios.post('/api/todos/remove', {id})
    .then(response => dispatch(removeTodoSuccess(response.data.id)))
    .catch(error => dispatch(removeTodoFailure(error)));
};

export const completeTodo = id => dispatch => {
  dispatch(todosAsyncRequest());
  return axios.post('/api/todos/complete', {id})
    .then(response => dispatch(completeTodoSuccess(response.data.id)))
    .catch(error => dispatch(completeTodoFailure(error)));
};

export const completeAllTodos = () => dispatch => {
  dispatch(todosAsyncRequest());
  return axios.post('/api/todos/completeAll')
    .then(() => dispatch(completeAllTodosSuccess()))
    .catch(error => dispatch(completeAllTodosFailure(error)));
};

export const removeCompletedTodos = () => dispatch => {
  dispatch(todosAsyncRequest());
  return axios.post('/api/todos/removeCompleted')
    .then(() => dispatch(removeCompletedTodosSuccess()))
    .catch(error => dispatch(removeCompletedTodosFailure(error)));
};

// Selectors
export const getTodos = state => state.todos.list;
export const getTodosFilter = state => state.todos.filter;

// Helpers
const filters = ['all', 'active', 'completed'];

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TODOS_ASYNC_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_TODOS_FAILURE:
    case ADD_TODO_FAILURE:
    case REMOVE_TODO_FAILURE:
    case COMPLETE_TODO_FAILURE:
    case COMPLETE_ALL_TODOS_FAILURE:
    case REMOVE_COMPLETED_TODOS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        list: action.list,
        loading: false
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.todo]
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      };
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        list: state.list.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
      };
    case COMPLETE_ALL_TODOS_SUCCESS: {
      const alreadyCompleted = state.list.every(({completed}) => completed);
      return {
        ...state,
        list: state.list.map(todo => ({...todo, completed: !alreadyCompleted}))
      };
    }
    case REMOVE_COMPLETED_TODOS_SUCCESS:
      return {
        ...state,
        list: state.list.filter(todo => todo.completed === false)
      };
    case CHANGE_TODOS_FILTER:
      return {
        ...state,
        filter: filters.includes(action.filter) ? action.filter : initialState.filter
      };
    default:
      return state;
  }
};
