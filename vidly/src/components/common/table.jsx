
import React from 'react';

import TableBody from './tableBody';
import TableHeader from './tableHeader';

const Table = props => {
  const { data, columns, sortColumn, onSort } = props;

  return (
    <table className="table">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody
        data={data}
        columns={columns}
      />
    </table>
  );
}

export default Table;
