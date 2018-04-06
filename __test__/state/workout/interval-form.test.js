import reducer, * as form from '../../../src/state/workout/interval-form';
import initialState from '../../../src/state/workout/interval-form/initial.state';

describe('interval-form action creators', () => {
  // Repeat
  it('should create an action to set repeat value (1)', () => {
    const value = 1;
    const expectedAction = {
      type: form.SET_REPEAT,
      value
    };
    expect(form.setRepeat(value)).toEqual(expectedAction);
  });

  it('should create an action to set repeat value (2)', () => {
    const value = 2;
    const expectedAction = {
      type: form.SET_REPEAT,
      value
    };
    expect(form.setRepeat(value)).toEqual(expectedAction);
  });

  it('should create an action to set repeat value (-1)', () => {
    const value = -1;
    const expectedAction = {
      type: form.SET_REPEAT,
      value
    };
    expect(form.setRepeat(value)).toEqual(expectedAction);
  });

  it('should create an action to set repeat value (0)', () => {
    const value = 0;
    const expectedAction = {
      type: form.SET_REPEAT,
      value
    };
    expect(form.setRepeat(value)).toEqual(expectedAction);
  });

  // Work
  it('should create an action to set work value (1)', () => {
    const value = 1;
    const expectedAction = {
      type: form.SET_WORK,
      value
    };
    expect(form.setWork(value)).toEqual(expectedAction);
  });

  it('should create an action to set work value (2)', () => {
    const value = 2;
    const expectedAction = {
      type: form.SET_WORK,
      value
    };
    expect(form.setWork(value)).toEqual(expectedAction);
  });

  it('should create an action to set work value (-1)', () => {
    const value = -1;
    const expectedAction = {
      type: form.SET_WORK,
      value
    };
    expect(form.setWork(value)).toEqual(expectedAction);
  });

  it('should create an action to set work value (0)', () => {
    const value = 0;
    const expectedAction = {
      type: form.SET_WORK,
      value
    };
    expect(form.setWork(value)).toEqual(expectedAction);
  });

  // Rest
  it('should create an action to set rest value (1)', () => {
    const value = 1;
    const expectedAction = {
      type: form.SET_REST,
      value
    };
    expect(form.setRest(value)).toEqual(expectedAction);
  });

  it('should create an action to set rest value (2)', () => {
    const value = 2;
    const expectedAction = {
      type: form.SET_REST,
      value
    };
    expect(form.setRest(value)).toEqual(expectedAction);
  });

  it('should create an action to set rest value (-1)', () => {
    const value = -1;
    const expectedAction = {
      type: form.SET_REST,
      value
    };
    expect(form.setRest(value)).toEqual(expectedAction);
  });

  it('should create an action to set rest value (0)', () => {
    const value = 0;
    const expectedAction = {
      type: form.SET_REST,
      value
    };
    expect(form.setRest(value)).toEqual(expectedAction);
  });

  // Reset
  it('should create an action to reset values', () => {
    const expectedAction = {
      type: form.RESET_FORM
    };
    expect(form.resetForm()).toEqual(expectedAction);
  });
});

describe('interval-form selectors', () => {
  // Repeat
  it('should return the repeat value (null)', () => {
    const state = {
      workout: {
        intervalForm: {
          repeat: null
        }
      }
    };
    expect(form.getRepeat(state)).toEqual(null);
  });

  it('should return the repeat value (0)', () => {
    const state = {
      workout: {
        intervalForm: {
          repeat: 0
        }
      }
    };
    expect(form.getRepeat(state)).toEqual(0);
  });

  it('should return the repeat value (10)', () => {
    const state = {
      workout: {
        intervalForm: {
          repeat: 10
        }
      }
    };
    expect(form.getRepeat(state)).toEqual(10);
  });

  // Work
  it('should return the work value (null)', () => {
    const state = {
      workout: {
        intervalForm: {
          work: null
        }
      }
    };
    expect(form.getWork(state)).toEqual(null);
  });


  it('should return the work value (0)', () => {
    const state = {
      workout: {
        intervalForm: {
          work: 0
        }
      }
    };
    expect(form.getWork(state)).toEqual(0);
  });

  it('should return the work value (45)', () => {
    const state = {
      workout: {
        intervalForm: {
          work: 45
        }
      }
    };
    expect(form.getWork(state)).toEqual(45);
  });

  // Rest
  it('should return the rest value (null)', () => {
    const state = {
      workout: {
        intervalForm: {
          rest: null
        }
      }
    };
    expect(form.getRest(state)).toEqual(null);
  });

  it('should return the rest value (0)', () => {
    const state = {
      workout: {
        intervalForm: {
          rest: 0
        }
      }
    };
    expect(form.getRest(state)).toEqual(0);
  });

  it('should return the rest value (33)', () => {
    const state = {
      workout: {
        intervalForm: {
          rest: 33
        }
      }
    };
    expect(form.getRest(state)).toEqual(33);
  });
});

describe('interval-form helpers', () => {
  it('should return a positive value or zero or null (null)', () => {
    expect(form.positiveValue(null)).toEqual(null);
  });

  it('should return a positive value or zero or null (0)', () => {
    expect(form.positiveValue(0)).toEqual(0);
  });

  it('should return a positive value or zero or null (15)', () => {
    expect(form.positiveValue(15)).toEqual(15);
  });

  it('should return a positive value or zero or null (-10)', () => {
    expect(form.positiveValue(-10)).toEqual(0);
  });

  it('should return a positive value or zero or null (-99)', () => {
    expect(form.positiveValue(-99)).toEqual(0);
  });
});

describe('interval-form reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_REPEAT', () => {
    const action = {
      type: form.SET_REPEAT,
      value: 30
    };
    const expectedState = {
      repeat: 30,
      work: null,
      rest: null
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_WORK', () => {
    const action = {
      type: form.SET_WORK,
      value: 45
    };
    const expectedState = {
      repeat: null,
      work: 45,
      rest: null
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_REST', () => {
    const action = {
      type: form.SET_REST,
      value: 15
    };
    const expectedState = {
      repeat: null,
      work: null,
      rest: 15
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_FORM', () => {
    const action = {
      type: form.RESET_FORM
    };
    const state = {
      repeat: 30,
      work: 45,
      rest: 15
    };
    expect(reducer(state, action)).toEqual(initialState);
  });
});
