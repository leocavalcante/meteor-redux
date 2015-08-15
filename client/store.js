/**
 * This is what createStore() looks like,
 * but instead of a Redux store, a well know ReactiveDict will do the job.
 * Then we specify what are our reducers as in createStore() first argument and dispatch makes the magic
 */
store = new ReactiveDict('store');
reducers = ['counter'];
dispatch({type: '@@redux/INIT'}); // https://github.com/rackt/redux/blob/master/src/createStore.js#L147