Template.body.onCreated(function () {
  this.store = new ReactiveDict('bodyStore');

  Meteor.call(
    'counter',
    this.store.get('counter'),
    {type: 'INIT'},
    function (error, state) {
      this.store.set('counter', state);
    }.bind(this)
  );
})

Template.body.helpers({
  counter: function () {
    return Template.instance().store.get('counter');
  }
});

Template.body.events({
  'click .increment.button': function (event, template) {
    Meteor.call(
      'counter',
      template.store.get('counter'),
      {type: INCREMENT_COUNTER},
      function (error, state) {
        template.store.set('counter', state);
      }
    );
  },

  'click .decrement.button': function (event, template) {
    Meteor.call(
      'counter',
      template.store.get('counter'),
      {type: DECREMENT_COUNTER},
      function (error, state) {
        template.store.set('counter', state);
      }
    );
  }
});