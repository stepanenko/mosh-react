
import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { children, onIncrement, onDecrement, onDelete, counter } = this.props;

    return (
      <React.Fragment>
        {children}

        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-primary btn-sm">
          Increment
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm m-2">
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm">
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
