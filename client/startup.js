Meteor.startup(() => {
  dispatch({type: '@@redux/INIT'}); // https://github.com/rackt/redux/blob/master/src/createStore.js#L147
});