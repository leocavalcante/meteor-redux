# Meteorux? Reduxor?
Let's find out!

If you don't know what Redux is, take a look at [this link](http://rackt.github.io/redux/).

* [Redux](http://rackt.github.io/redux/) first principle is to mantain a single source of truth, the whole application state is handled by a single store.
Here we imitate store behaviour using a [ReactiveDict](https://atmospherejs.com/meteor/reactive-dict).

[@see client/store.js](client/store.js).

* State is read-only.

> The only way to mutate the state is to emit an action, an object describing what happened.

[@see client/templates/body.js](client/templates/body.js) and [@see actions/counter.js](actions/counter.js)

Here we delegate dispatch behavior to [Meteor.methods()](http://docs.meteor.com/#/full/meteor_methods), it is already a [Observer](https://en.wikipedia.org/wiki/Observer_pattern) implementation and state can be async and handled by server computations.

[@see client/dispatch.js](client/dispatch.js)

* Last but not least: 

> Mutations are written as [pure functions](https://en.wikipedia.org/wiki/Pure_function).

Here there is a gap, a huge one. Reducers aren't simple pure functions, since they are Meteor.methods they can handle persistent data. This persisted (or not) state is returned and passed to equivalent ReactiveDict storage key that being a reactive source, Blaze templates as reactive computations can listen the new state by the helpers and update the UI.

[@see reducers/counter.js](reducers/counter.js)

### Why not using Redux itself?
If you want to, please take a look at [this specific branch of this repo](https://github.com/AdamBrodzinski/meteor-flux-leaderboard/tree/redux), but the ideia here is to use Redux ideais/principles not it's library.

Any thoughts?
