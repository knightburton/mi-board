import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import * as todos from '../../../state/todos';
import initialState from '../../../state/todos/initial.state';

describe('todos action creators', () => {
  // Fetch
  it('should create a TODOS_ASYNC_REQUEST action', () => {
    const expectedAction = {
      type: todos.TODOS_ASYNC_REQUEST
    };
    expect(todos.todosAsyncRequest()).toEqual(expectedAction);
  });

  it('should create a FETCH_TODOS_SUCCESS action', () => {
    const list = [{id: 12, completed: false, text: 'Todooo'}];
    const expectedAction = {
      type: todos.FETCH_TODOS_SUCCESS,
      list
    };
    expect(todos.fetchTodosSuccess(list)).toEqual(expectedAction);
  });

  it('should create a FETCH_TODOS_FAILURE action', () => {
    const expectedAction = {
      type: todos.FETCH_TODOS_FAILURE
    };
    expect(todos.fetchTodosFailure()).toEqual(expectedAction);
  });

  // Add
  it('should create a ADD_TODO_SUCCESS action', () => {
    const todo = {id: 33, completed: false, text: 'Write unit tests'};
    const expectedAction = {
      type: todos.ADD_TODO_SUCCESS,
      todo
    };
    expect(todos.addTodoSuccess(todo)).toEqual(expectedAction);
  });

  it('should create a ADD_TODO_FAILURE action', () => {
    const expectedAction = {
      type: todos.ADD_TODO_FAILURE
    };
    expect(todos.addTodoFailure()).toEqual(expectedAction);
  });

  // Remove
  it('should create a REMOVE_TODO_SUCCESS action', () => {
    const id = 55;
    const expectedAction = {
      type: todos.REMOVE_TODO_SUCCESS,
      id
    };
    expect(todos.removeTodoSuccess(id)).toEqual(expectedAction);
  });

  it('should create a REMOVE_TODO_FAILURE action', () => {
    const expectedAction = {
      type: todos.REMOVE_TODO_FAILURE
    };
    expect(todos.removeTodoFailure()).toEqual(expectedAction);
  });

  // Complete
  it('should create a COMPLETE_TODO_SUCCESS action', () => {
    const id = 55;
    const expectedAction = {
      type: todos.COMPLETE_TODO_SUCCESS,
      id
    };
    expect(todos.completeTodoSuccess(id)).toEqual(expectedAction);
  });

  it('should create a COMPLETE_TODO_FAILURE action', () => {
    const expectedAction = {
      type: todos.COMPLETE_TODO_FAILURE
    };
    expect(todos.completeTodoFailure()).toEqual(expectedAction);
  });

  // Complete all
  it('should create a COMPLETE_ALL_TODOS_SUCCESS action', () => {
    const expectedAction = {
      type: todos.COMPLETE_ALL_TODOS_SUCCESS
    };
    expect(todos.completeAllTodosSuccess()).toEqual(expectedAction);
  });

  it('should create a COMPLETE_ALL_TODOS_FAILURE action', () => {
    const expectedAction = {
      type: todos.COMPLETE_ALL_TODOS_FAILURE
    };
    expect(todos.completeAllTodosFailure()).toEqual(expectedAction);
  });

  // Remove completed
  it('should create a REMOVE_COMPLETED_TODOS_SUCCESS action', () => {
    const expectedAction = {
      type: todos.REMOVE_COMPLETED_TODOS_SUCCESS
    };
    expect(todos.removeCompletedTodosSuccess()).toEqual(expectedAction);
  });

  it('should create a REMOVE_COMPLETED_TODOS_FAILURE action', () => {
    const expectedAction = {
      type: todos.REMOVE_COMPLETED_TODOS_FAILURE
    };
    expect(todos.removeCompletedTodosFailure()).toEqual(expectedAction);
  });

  // Filter
  it('should create an action to change the filter state (all)', () => {
    const filter = 'all';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to change the filter state (active)', () => {
    const filter = 'active';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to change the filter state (completed)', () => {
    const filter = 'completed';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });

  it('should create an action to change the filter state (random -> not valid)', () => {
    const filter = 'random';
    const expectedAction = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    expect(todos.changeTodosFilter(filter)).toEqual(expectedAction);
  });
});

describe('todos async action creators', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // Fetch
  it('creates TODOS_ASYNC_REQUEST and FETCH_TODOS_SUCCESS after successfuly fetching todos', () => {
    const list = [];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {list}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.FETCH_TODOS_SUCCESS, list }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and FETCH_TODOS_FAILURE after tried to fetch todos', () => {
    const error = new Error('Request failed with status code 400');

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.FETCH_TODOS_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and FETCH_TODOS_FAILURE after tried to fetch todos', () => {
    const error = new Error('Request failed with status code 404');

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.FETCH_TODOS_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.fetchTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // Add
  it('creates TODOS_ASYNC_REQUEST and ADD_TODO_SUCCESS after successfuly add a todo', () => {
    const todo = {id: 12, completed: false, text: 'Smile'};

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {todo}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.ADD_TODO_SUCCESS, todo }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.addTodo('Smile')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and ADD_TODO_FAILURE after tried to add a todo', () => {
    const error = new Error('Request failed with status code 500');

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.ADD_TODO_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.addTodo('Something...')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // Remove
  it('creates TODOS_ASYNC_REQUEST and REMOVE_TODO_SUCCESS after successfuly add a todo', () => {
    const id = 554;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {id}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.REMOVE_TODO_SUCCESS, id }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.removeTodo(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and REMOVE_TODO_FAILURE after tried to add a todo', () => {
    const error = new Error('Request failed with status code 400');
    const id = 321;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.REMOVE_TODO_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.removeTodo(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // Complete
  it('creates TODOS_ASYNC_REQUEST and COMPLETE_TODO_SUCCESS after successfuly add a todo', () => {
    const id = 554;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {id}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.COMPLETE_TODO_SUCCESS, id }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.completeTodo(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and COMPLETE_TODO_FAILURE after tried to add a todo', () => {
    const error = new Error('Request failed with status code 400');
    const id = 987;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.COMPLETE_TODO_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.completeTodo(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // Complete all
  it('creates TODOS_ASYNC_REQUEST and COMPLETE_ALL_TODOS_SUCCESS after successfuly add a todo', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.COMPLETE_ALL_TODOS_SUCCESS }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.completeAllTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and COMPLETE_ALL_TODOS_FAILURE after tried to add a todo', () => {
    const error = new Error('Request failed with status code 400');

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.COMPLETE_ALL_TODOS_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.completeAllTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // Remove completed
  it('creates TODOS_ASYNC_REQUEST and REMOVE_COMPLETED_TODOS_SUCCESS after successfuly add a todo', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.REMOVE_COMPLETED_TODOS_SUCCESS }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.removeCompletedTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates TODOS_ASYNC_REQUEST and REMOVE_COMPLETED_TODOS_FAILURE after tried to add a todo', () => {
    const error = new Error('Request failed with status code 400');

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {error}
      });
    });

    const expectedActions = [
      { type: todos.TODOS_ASYNC_REQUEST },
      { type: todos.REMOVE_COMPLETED_TODOS_FAILURE, error }
    ];

    const store = mockStore({...initialState});

    return store.dispatch(todos.removeCompletedTodos()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('todos selectors', () => {
  it('Should return with todos (initial state -> empty)', () => {
    const state = {
      todos: {
        ...initialState
      }
    };
    expect(todos.getTodos(state)).toEqual([]);
  });

  it('Should return with todos', () => {
    const list = [{id: 1, completed: false, text: 'Delete this'}, {id: 2, completed: true, text: 'Complete me'}];
    const state = {
      todos: {
        ...initialState,
        list
      }
    };
    expect(todos.getTodos(state)).toEqual(list);
  });

  it('Should return with the selected filter (initial state -> active)', () => {
    const state = {
      todos: {
        ...initialState
      }
    };
    expect(todos.getTodosFilter(state)).toEqual('active');
  });

  it('Should return with the selected filter (active)', () => {
    const filter = 'active';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });

  it('Should return with the selected filter (all)', () => {
    const filter = 'all';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });

  it('Should return with the selected filter (completed)', () => {
    const filter = 'completed';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });

  it('Should return with the selected filter (random -> not valid)', () => {
    const filter = 'random';
    const state = {
      todos: {
        ...initialState,
        filter
      }
    };
    expect(todos.getTodosFilter(state)).toEqual(filter);
  });

  it('Should return with the loading state (false)', () => {
    const loading = false;
    const state = {
      todos: {
        ...initialState,
        loading
      }
    };
    expect(todos.getTodosLoading(state)).toEqual(loading);
  });

  it('Should return with the loading state (true)', () => {
    const loading = true;
    const state = {
      todos: {
        ...initialState,
        loading
      }
    };
    expect(todos.getTodosLoading(state)).toEqual(loading);
  });

  it('Should return with the error state (string)', () => {
    const error = 'Some random error message.';
    const state = {
      todos: {
        ...initialState,
        error
      }
    };
    expect(todos.getTodosError(state)).toEqual(error);
  });

  it('Should return with the error state (Error object)', () => {
    const error = new Error('Some random error message.');
    const state = {
      todos: {
        ...initialState,
        error
      }
    };
    expect(todos.getTodosError(state)).toEqual(error);
  });

  it('Should return with the error state (object)', () => {
    const error = {
      object: new Error('Some random error message.'),
      data: 'Something data'
    };
    const state = {
      todos: {
        ...initialState,
        error
      }
    };
    expect(todos.getTodosError(state)).toEqual(error);
  });
});

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(todos.default(undefined, {})).toEqual(initialState);
  });

  // Fetch
  it('should handle TODOS_ASYNC_REQUEST', () => {
    const action = {
      type: todos.TODOS_ASYNC_REQUEST
    };
    const state = {
      ...initialState
    };
    const expectedState = {
      ...state,
      loading: true
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle FETCH_TODOS_SUCCESS', () => {
    const list = [
      {id: 1, completed: false, text: 'First thing to do.'},
      {id: 2, completed: true, text: 'An old thing to do.'}
    ];
    const action = {
      type: todos.FETCH_TODOS_SUCCESS,
      list
    };
    const state = {
      ...initialState
    };
    const expectedState = {
      ...state,
      list,
      loading: false
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle FETCH_TODOS_FAILURE', () => {
    const error = new Error('Something went wrong.....');
    const action = {
      type: todos.FETCH_TODOS_FAILURE,
      error
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  // Add
  it('should handle ADD_TODO_SUCCESS', () => {
    const firstTodo = {id: 1, completed: false, text: 'Very first todo...'};
    const action = {
      type: todos.ADD_TODO_SUCCESS,
      todo: firstTodo
    };
    const expectedState = {
      ...initialState,
      list: [...initialState.list, firstTodo]
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);

    const secondTodo = {id: 2, completed: false, text: 'Almost first todo....'};
    action.todo = secondTodo;
    const state = {
      ...expectedState
    };
    expectedState.list = [...expectedState.list, secondTodo];
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle ADD_TODO_FAILURE', () => {
    const error = new Error('Request failed with status code 400');
    const action = {
      type: todos.ADD_TODO_FAILURE,
      error
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  // Remove
  it('should handle REMOVE_TODO_SUCCESS', () => {
    const list = [
      {_id: 34, completed: false, text: 'A todo again'},
      {_id: 55, completed: true, text: 'Here we go...'},
      {_id: 29, completed: true, text: 'This is important!'}
    ];
    const expectedList = [list[0], list[2]];
    const action = {
      type: todos.REMOVE_TODO_SUCCESS,
      id: 55
    };
    const state = {
      ...initialState,
      list
    };
    const expectedState = {
      ...state,
      list: expectedList
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_TODO_FAILURE', () => {
    const error = new Error('Request failed with status code 400');
    const action = {
      type: todos.ADD_TODO_FAILURE,
      error
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  // Complete
  it('should handle COMPLETE_TODO_SUCCESS', () => {
    const id = 34;
    const list = [
      {_id: id, completed: false, text: 'A todo again'},
      {_id: 55, completed: true, text: 'Here we go...'},
      {_id: 29, completed: true, text: 'This is important!'}
    ];
    const action = {
      type: todos.COMPLETE_TODO_SUCCESS,
      id
    };
    const state = {
      ...initialState,
      list
    };
    const expectedState = {
      ...state,
      list: list.map(t => ({...t, completed: true}))
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle COMPLETE_TODO_FAILURE', () => {
    const error = new Error('Request failed with status code 400');
    const action = {
      type: todos.COMPLETE_TODO_FAILURE,
      error
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  // Complete all
  it('should handle COMPLETE_ALL_TODOS_SUCCESS', () => {
    const list = [
      {id: 10, completed: false, text: 'A todo again'},
      {id: 55, completed: true, text: 'Here we go...'},
      {id: 29, completed: true, text: 'This is important!'}
    ];
    const action = {
      type: todos.COMPLETE_ALL_TODOS_SUCCESS
    };
    const state = {
      ...initialState,
      list
    };
    const expectedState = {
      ...state,
      list: list.map(t => ({...t, completed: true}))
    };
    expect(todos.default(state, action)).toEqual(expectedState);

    const expectedStateTwo = {
      ...state,
      list: expectedState.list.map(t => ({...t, completed: false}))
    };
    expect(todos.default(expectedState, action)).toEqual(expectedStateTwo);
  });

  it('should handle COMPLETE_ALL_TODOS_FAILURE', () => {
    const error = new Error('Request failed with status code 400');
    const action = {
      type: todos.COMPLETE_TODO_FAILURE,
      error
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  // Remove completed
  it('should handle REMOVE_COMPLETED_TODOS_SUCCESS', () => {
    const list = [
      {id: 10, completed: false, text: 'A todo again'},
      {id: 55, completed: true, text: 'Here we go...'},
      {id: 29, completed: true, text: 'This is important!'}
    ];
    const action = {
      type: todos.REMOVE_COMPLETED_TODOS_SUCCESS
    };
    const state = {
      ...initialState,
      list
    };
    const expectedState = {
      ...state,
      list: [list[0]]
    };
    expect(todos.default(state, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_COMPLETED_TODOS_FAILURE', () => {
    const error = new Error('Request failed with status code 400');
    const action = {
      type: todos.COMPLETE_TODO_FAILURE,
      error
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false
    };
    expect(todos.default(initialState, action)).toEqual(expectedState);
  });

  // Filter change
  it('should handle CHANGE_TODOS_FILTER', () => {
    const filter = 'all';
    const action = {
      type: todos.CHANGE_TODOS_FILTER,
      filter
    };
    const state = {
      ...initialState
    };
    const expectedState = {
      ...state,
      filter
    };
    expect(todos.default(state, action)).toEqual(expectedState);

    const filterTwo = 'active';
    let actionTwo = {
      type: todos.CHANGE_TODOS_FILTER,
      filter: filterTwo
    };
    const expectedStateTwo = {
      ...expectedState,
      filter: filterTwo
    };
    expect(todos.default(expectedState, actionTwo)).toEqual(expectedStateTwo);

    const filterThree = 'completed';
    let actionThree = {
      type: todos.CHANGE_TODOS_FILTER,
      filter: filterThree
    };
    const expectedStateThree = {
      ...expectedStateTwo,
      filter: filterThree
    };
    expect(todos.default(expectedStateTwo, actionThree)).toEqual(expectedStateThree);
  });
});
