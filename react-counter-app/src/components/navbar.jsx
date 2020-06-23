
import React, { Component } from 'react';

class Navbar extends Component {
  styles = {
    fontSize: 16
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.onGetTotal === 0) ? "warning" : "primary";
    return classes;
  }

  render() {
    return <nav style={{ justifyContent: 'start' }} class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">CounterApp</span>
      <span style={this.styles} className={this.getBadgeClasses()}>
        Total: {this.props.onGetTotal}
      </span>
    </nav>
  }
}

export default Navbar;
