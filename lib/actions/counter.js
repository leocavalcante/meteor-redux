const types = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  DECREMENT_COUNTER: 'DECREMENT_COUNTER'
};

const actions = {
  increment() {
    return {
      type: types.INCREMENT_COUNTER
    }
  },

  decrement() {
    return {
      type: types.DECREMENT_COUNTER
    }
  }
};

this.counterActionTypes = types;
this.counterActions = actions;