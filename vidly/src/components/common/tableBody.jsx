
import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {

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

export default TableBody;
