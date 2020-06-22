
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['apples']
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  styles = {
    fontSize: 16
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <br />

        {this.state.tags.length === 0 && "Please add a tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
