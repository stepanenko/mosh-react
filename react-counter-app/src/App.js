
import React, { Component } from 'react';
import './App.css';

import Counters from './components/counters';
import Navbar from './components/navbar';


class App extends Component {
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
    if (counter.value <= 0) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  }

  getTotalCount() {
    return this.state.counters.reduce((accum, c) => accum + c.value, 0);
  }

  render() {
    return (
      <div class="App">
        <Navbar
          counters={this.state.counters}
          onGetTotal={this.getTotalCount()}/>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
