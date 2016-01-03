const { increment, decrement } = counterActions;

Template.body.helpers({
  counter() {
    return store.get('counter');
  }
});

Template.body.events({
  'click .increment.button': event => dispatch(increment()),
  'click .decrement.button': event => dispatch(decrement())
});