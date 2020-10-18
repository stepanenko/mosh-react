
import React from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect }) => {
  return (
    <aside className="list-group">
      <button className="list-group-item list-group-item-action active"
        onClick={() => onItemSelect('all')}>
        All Genres
      </button>
      {items.map(item => (
        <button
          className="list-group-item list-group-item-action"
          onClick={() => onItemSelect(item.name)}
          key={item[valueProperty]}>
          {item[textProperty]}
        </button>
      ))}
    </aside>
  );
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default ListGroup;
