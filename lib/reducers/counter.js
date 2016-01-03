const { INCREMENT_COUNTER, DECREMENT_COUNTER } = counterActionTypes;
const initialState = 0;

Meteor.methods({
  counter(state, action) {
    state = state === null ? initialState : state;

    switch (action.type) {
      case INCREMENT_COUNTER:
        return state + 1;

      case DECREMENT_COUNTER:
        return state - 1;

      default:
        return state;
    }
  }
});