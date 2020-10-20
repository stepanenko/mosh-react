
import React, { useState } from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect }) => {
  let classes = "list-group-item list-group-item-action";
  const [selectedItem, setSelectedItem] = useState('all');

  return (
    <aside className="list-group">
      {items.map(item => (
        <button
          className={selectedItem === item._id ? classes + ' active' : classes}
          onClick={() => {
            onItemSelect(item._id);
            setSelectedItem(item._id);
          }}
          key={item[valueProperty]}>
          {item[textProperty]}
        </button>
      ))}
    </aside>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

export default ListGroup;
