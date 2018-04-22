import * as todos from '../../../state/todos';
import initialState from '../../../state/todos/initial.state';

describe('todos actions', () => {
  it('should create an action to add a new todo', () => {
    const text = 'This is a todo.';
    const expectedAction = {
      type: todos.ADD_TODO,
      text
    };
    expect(todos.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const id = 12;
    const expectedAction = {
      type: todos.REMOVE_TODO,
      id
    };
    expect(todos.removeTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to complete a todo', () => {
    const id = 54;
    const expectedAction = {
      type: todos.COMPLETE_TODO,
      id
    };
    expect(todos.completeTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to complete all todo', () => {
    const expectedAction = {
      type: todos.COMPLETE_ALL_TODOS
    };
    expect(todos.completeAllTodos()).toEqual(expectedAction);
  });

  it('should create an action to remove completed todos', () => {
    const expectedAction = {
      type: todos.REMOVE_COMPLETED_TODOS
    };
    expect(todos.removeCompletedTodos()).toEqual(expectedAction);
  });

  it('should create an action to change the filter (all)', () => {
    const filter = 'all';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to change the filter (active)', () => {
    const filter = 'active';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to change the filter (completed)', () => {
    const filter = 'completed';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });
});

describe('todos selectors', () => {
  it('should return the todos list (empty)', () => {
    const state = {
      todos: {
        list: []
      }
    };
    expect(todos.getTodos(state)).toEqual([]);
  });

  it('should return the todos list (array with one element)', () => {
    const list = [{
      id: 1,
      completed: false,
      text: 'Test todo...'
    }];
    const state = {
      todos: {
        list
      }
    };
    expect(todos.getTodos(state)).toEqual(list);
  });

  it('should return the todos list (array with three element)', () => {
    const list = [{
      id: 1,
      completed: false,
      text: 'Test todo...'
    }, {
      id: 54,
      completed: true,
      text: 'Got ot the...'
    }, {
      id: 99,
      completed: false,
      text: 'Buy some...'
    }];
    const state = {
      todos: {
        list
      }
    };
    expect(todos.getTodos(state)).toEqual(list);
  });

  it('should return the initial filter value (active)', () => {
    const state = {
      todos: {
        ...initialState
      }
    };
    expect(todos.getTodosFilter(state)).toEqual('active');
  });

  it('should return the filter value (all)', () => {
    const filter = 'active';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });

  it('should return the filter value (active)', () => {
    const filter = 'active';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });

  it('should return the filter value (completed)', () => {
    const filter = 'completed';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });
});

describe('todos reducers', () => {
  const state = {
    ...initialState,
    list: [...initialState.list, {
      id: 0,
      completed: false,
      text: 'First todo.'
    }, {
      id: 1,
      completed: true,
      text: 'Second todo.'
    }, {
      id: 2,
      completed: false,
      text: '3rd todo.'
    }]
  };

  it('should return the initial state (undefined action)', () => {
    expect(todos.default(undefined, undefined)).toEqual(initialState);
  });

  it('should handle the ADD_TODO action (to the initial state)', () => {
    const text = 'Finish the stuff.';
    const action = {
      type: todos.ADD_TODO,
      text
    };
    const expectedState = {
      ...initialState,
      list: [...initialState.list, {
        id: 0,
        completed: false,
        text
      }]
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle the ADD_TODO action (not an empty state)', () => {
    const text = 'The last todo with this time.';
    const action = {
      type: todos.ADD_TODO,
      text
    };
    const expectedState = {
      ...state,
      list: [...state.list, {
        id: 3,
        completed: false,
        text
      }]
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the REMOVE_TODO action (from the initial state)', () => {
    const id = 10;
    const action = {
      type: todos.REMOVE_TODO,
      id
    };
    expect(todos.default(initialState, action)).toEqual(initialState);
  });

  it('should handle the REMOVE_TODO action (not an empty state)', () => {
    const id = 1;
    const action = {
      type: todos.REMOVE_TODO,
      id
    };
    const expectedState = {
      ...state,
      list: state.list.filter(t => t.id !== id)
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the COMPLETE_TODO action (in case of initial state)', () => {
    const id = 20;
    const action = {
      type: todos.COMPLETE_TODO,
      id
    };
    expect(todos.default(initialState, action)).toEqual(initialState);
  });

  it('should handle the COMPLETE_TODO action (not an empty state)', () => {
    const id = 2;
    const action = {
      type: todos.COMPLETE_TODO,
      id
    };
    const expectedState = {
      ...state,
      list: state.list.map(t => t.id === id ? {...t, completed: true} : t)
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the COMPLETE_ALL_TODOS action (in case of initial state)', () => {
    const action = {
      type: todos.COMPLETE_ALL_TODOS
    };
    expect(todos.default(initialState, action)).toEqual(initialState);
  });

  it('should handle the COMPLETE_ALL_TODOS action (not an empty state)', () => {
    const action = {
      type: todos.COMPLETE_ALL_TODOS
    };
    const expectedState = {
      ...state,
      list: state.list.map(t => ({...t, completed: true}))
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the REMOVE_COMPLETED_TODOS action (in case of initial state)', () => {
    const action = {
      type: todos.REMOVE_COMPLETED_TODOS
    };
    expect(todos.default(initialState, action)).toEqual(initialState);
  });

  it('should handle the REMOVE_COMPLETED_TODOS action (not an empty state)', () => {
    const action = {
      type: todos.REMOVE_COMPLETED_TODOS
    };
    const expectedState = {
      ...state,
      list: state.list.filter(t => t.completed === false)
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the CHANGE_TODOS_FILTER action (active -> all)', () => {
    const filter = 'all';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    const expectedState = {
      ...state,
      filter
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the CHANGE_TODOS_FILTER action (active -> completed)', () => {
    const filter = 'completed';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    const expectedState = {
      ...state,
      filter
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle the CHANGE_TODOS_FILTER action (all -> completed)', () => {
    const filter = 'completed';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    const localState = {
      ...state,
      filter: 'all'
    };
    const expectedState = {
      ...state,
      filter
    };
    expect(todos.default(localState, action)).toEqual(expectedState);
  });

  it('should handle the CHANGE_TODOS_FILTER action (completed -> active)', () => {
    const filter = 'active';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    const localState = {
      ...state,
      filter: 'completed'
    };
    const expectedState = {
      ...state,
      filter
    };
    expect(todos.default(localState, action)).toEqual(expectedState);
  });

  it('should handle the CHANGE_TODOS_FILTER action (completed -> fresh - invalid)', () => {
    const filter = 'fresh';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    const localState = {
      ...state,
      filter: 'completed'
    };
    expect(todos.default(localState, action)).toEqual(state);
  });

  it('should handle the CHANGE_TODOS_FILTER action (active -> old - invalid)', () => {
    const filter = 'fresh';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.default(state, action)).toEqual(state);
  });
});
