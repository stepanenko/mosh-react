
import React from 'react';

// Stateless functional component:
const Like = ({ isLiked, onClick }) => {
  let classes = "fa fa-lg fa-heart";
  if (!isLiked) classes += "-o";

  return <i style={{ cursor: 'pointer' }} className={classes} onClick={onClick}></i>
}

export default Like;
