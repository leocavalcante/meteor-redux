Template.body.helpers({
  counter: function () {
    return store.get('counter');
  }
});

Template.body.events({
  'click .increment.button': function (event) {
    dispatch(incrementCounter());
  },

  'click .decrement.button': function (event) {
    dispatch(decrementCounter());
  }
});