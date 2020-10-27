
import React, { Component } from 'react';

class TableHeader extends Component {

  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  }

  getSortIcon = path => {
    const { sortColumn } = this.props;

    if (path !== sortColumn.path) return null;
    return sortColumn.order === 'asc'
      ? <i className="fa fa-sort-asc"></i>
      : <i className="fa fa-sort-desc"></i>
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => {
            return <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}>
              {column.label} {this.getSortIcon(column.path)}
            </th>
          })}
        </tr>
      </thead>
    )
  }
}

export default TableHeader;
