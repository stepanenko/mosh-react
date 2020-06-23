
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return <main className="container">
      {/* <span style={this.styles} className={this.getBadgeClasses()}>
        Total: {this.props.onGetTotal}
      </span> */}
      <button onClick={this.props.onReset} className="btn btn-danger btn-sm m-2">
        Reset
      </button>
      {this.props.counters.map(counter =>
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onDelete={this.props.onDelete}>
          <h5>Counter #{counter.id}</h5>
        </Counter>)}
    </main>
  }
}

export default Counters;
