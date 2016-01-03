const counterActionTypes = {
  INCREMENT_COUNTER: 'INCREMENT_COUNTER',
  DECREMENT_COUNTER: 'DECREMENT_COUNTER'
};

const counterActions = {
  increment() {
    return {
      type: counterActionTypes.INCREMENT_COUNTER
    }
  },

  decrement() {
    return {
      type: counterActionTypes.DECREMENT_COUNTER
    }
  }
};

this.counterActionTypes = counterActionTypes;
this.counterActions = counterActions;