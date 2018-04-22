import initialState from './initial.state';

// Action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS';
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';

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

// Selectors
export const getTodos = state => state.todos.list;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, {
          id: state.list.length,
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
    default:
      return state;
  }
};
