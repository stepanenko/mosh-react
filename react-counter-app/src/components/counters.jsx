
import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 4 },
      { id: 4, value: 0 }
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  }

  handleIncrement = counter => {
    this.setState({
      counters: this.state.counters.map(c => c.id === counter.id ? { ...c, value: c.value + 1 } : c)
    });
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  }

  render() {
    return <div>
      <button onClick={this.handleReset} className="btn btn-danger btn-sm m-2">Reset</button>
      {this.state.counters.map(counter =>
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}>
          <h5>Counter #{counter.id}</h5>
        </Counter>)}
    </div>
  }
}

export default Counters;
