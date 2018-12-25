
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 3,
    tags: []
  }

  styles = {
    fontSize: 20
  }

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button className="btn btn-secondary btn-sm">Increment</button>
        <br/>
        
        { this.state.tags.length === 0 && "Please add a tag" }
        { this.renderTags() }
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
    <ul>
      { this.state.tags.map(tag => <li key={ tag }>{ tag }</li>) }
    </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;
