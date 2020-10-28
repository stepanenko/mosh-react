
import React from 'react';

const TableHeader = ({ columns, sortColumn, onSort }) => {

  const raiseSort = path => {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    onSort(sortColumn);
  }

  const getSortIcon = path => {
    if (path !== sortColumn.path) return null;
    return sortColumn.order === 'asc'
      ? <i className="fa fa-sort-asc"></i>
      : <i className="fa fa-sort-desc"></i>
  }

  return (
    <thead>
      <tr>
        {columns.map(column => {
          return <th className='clickable'
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}>
            {column.label} {getSortIcon(column.path)}
          </th>
        })}
      </tr>
    </thead>
  )
}

export default TableHeader;
