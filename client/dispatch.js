/**
 * Magic?
 */
dispatch = function (action) {
  reducers.forEach(reducer => {
    Meteor.call(reducer, store.get(reducer), action, (err, state) => {
      store.set(reducer, state);
    });
  });
};