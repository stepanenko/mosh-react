
import React from 'react';

// Stateless functional component:
const Navbar = ({ totalItems, totalCounters }) => {
  const styles = {
    fontSize: 15
  };

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (totalItems === 0) ? "warning" : "primary";

    return classes;
  }

  return (<nav style={{ justifyContent: 'start' }} class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">CounterApp</span>
    <span style={styles} className={getBadgeClasses()}>
      Total: {totalItems}
    </span>
    <span className="badge badge-pill badge-secondary">
      Counters: {totalCounters}
    </span>
  </nav>);
}

export default Navbar;
