import initialState from './initial.state';

// Action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';
export const CHANGE_TODOS_FILTER = 'CHANGE_TODOS_FILTER';

// Action creators
export const addTodo = text => ({
  type: ADD_TODO,
  text
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id
});

export const completeAllTodos = () => ({
  type: COMPLETE_ALL_TODOS
});

export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS
});

export const changeTodosFilter = filter => ({
  type: CHANGE_TODOS_FILTER,
  filter
});

// Selectors
export const getTodos = state => state.todos.list;
export const getTodosFilter = state => state.todos.filter;

// Helpers
const filters = ['all', 'active', 'completed'];

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, {
          id: state.list.reduce((max, todo) => Math.max(todo.id, max), -1) + 1,
          completed: false,
          text: action.text
        }]
      };
    case REMOVE_TODO:
      return {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        list: state.list.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
      };
    case COMPLETE_ALL_TODOS: {
      const alreadyCompleted = state.list.every(({completed}) => completed);
      return {
        ...state,
        list: state.list.map(todo => ({...todo, completed: !alreadyCompleted}))
      };
    }
    case REMOVE_COMPLETED_TODOS:
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
