/**
 * this is what createStore() looks like,
 * but instead of a redux store, a well know reactivedict will do the job
 * then we specify what are our reducers, than dispatch makes the magic
 */
store = new ReactiveDict('store');
reducers = ['counter'];
dispatch({type: '@@redux/INIT'});