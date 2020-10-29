
import React from 'react';
import { Link } from 'react-router-dom';

const Customer = ({ match, history }) => {

  const handleDelete = () => {
    console.log('Post successfully deleted');
    history.replace('/customers'); // will NOT be stored in the browser history
    // history.push('/customers'); // the route will be stored in the browser history
  }

  return (
    <>
      <h1>Customer - {match.params.customer}</h1>
      <Link to='/customers'><button>To all Customers</button></Link>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default Customer;
