counterStore = {
  dispatch: function(action, state) {
    Meteor.call(
      'counter',
      state.get('counter'),
      action,
      function (err, val) {
        state.set('counter', val);
      }
    );
  }
};