initCounter = function (initialValue) {
  return {
    type: 'INIT',
    initialValue: initialValue
  }
}

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