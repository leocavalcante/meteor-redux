const App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      counter: store.get('counter')
    }
  },

  render() {
    return (
      <div>
        <Counter counter={this.data.counter} />
      </div>
    );
  }
});

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react'));
});