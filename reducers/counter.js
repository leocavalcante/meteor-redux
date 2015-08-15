var initialState = 0;

Meteor.methods({
  counter: function (state, action) {
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