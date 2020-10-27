
import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item =>
          <tr key={item._id}>
            {columns.map(column => {
              // my solution:
              return column.path
                ? <td key={column.path}>{_.get(item, column.path)}</td>
                : <td key={column.key}>{column.content(item)}</td>
            })}
          </tr>)}
      </tbody>
    );
  }
}

export default TableBody;
