const { increment, decrement } = counterActions;

const Counter = React.createClass({
  render() {
    return (
      <div>
        <button onClick={event => dispatch(decrement())}>-</button>
        &nbsp;{this.props.counter}&nbsp; 
        <button onClick={event => dispatch(increment())}>+</button>
      </div>
    );
  }
});

this.Counter = Counter;