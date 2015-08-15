Template.body.onCreated(function () {
  this.state = new ReactiveDict('bodyState');
  counterStore.dispatch(initCounter(0), this.state);
})

Template.body.helpers({
  counter: function () {
    return Template.instance().state.get('counter');
  }
});

Template.body.events({
  'click .increment.button': function (event, template) {
    counterStore.dispatch(incrementCounter(), template.state);
  },

  'click .decrement.button': function (event, template) {
    counterStore.dispatch(decrementCounter(), template.state);
  }
});