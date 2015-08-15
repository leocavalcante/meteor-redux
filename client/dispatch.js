/**
 * magic
 */
dispatch = function (action) {
  reducers.forEach(function (reducer) {
    Meteor.call(reducer, store.get(reducer), action, function (err, state) {
      store.set(reducer, state);
    });
  });
};