Meteor.methods({
  counter: function (state, action) {
    state = state === null ? 0 : state;
    // es6 default params will rescue!

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