
import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {

  return (
    <tbody>
      {data.map(item =>
        <tr key={item._id ?? item.name.common}>
          {columns.map(column => {
            // my solution:
            return column.content
              ? <td key={column.key}>{column.content(item)}</td>
              : <td key={column.path}>{_.get(item, column.path)}</td>
          })}
        </tr>)}
    </tbody>
  );
}

export default TableBody;
