INCREMENT_COUNTER = 'INCREMENT_COUNTER';
DECREMENT_COUNTER = 'DECREMENT_COUNTER';

incrementCounter = function () {
  return {
    type: INCREMENT_COUNTER
  }
}

decrementCounter = function () {
  return {
    type: DECREMENT_COUNTER
  }
}