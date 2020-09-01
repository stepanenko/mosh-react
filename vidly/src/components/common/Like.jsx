
import React from 'react';

// Stateless functional component:
const Like = props => {
  let classes = "fa fa-lg fa-heart";
  if (!props.isLiked) classes += "-o";

  return <i style={{ cursor: 'pointer' }} className={classes} onClick={props.onClick}></i>
}

export default Like;
