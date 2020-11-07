
import React from 'react';
import { Link } from 'react-router-dom';

const Customers = ({ match }) => {

  const customers = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' }
  ];

  return (
    <>
      <h1>All Customers</h1>
      <p>Year: {match.params.year}, Month: {match.params.month}</p>
      {customers.map(c => <Link to={'/customers/' + c.title} key={c.id}><h2>{c.title}</h2></Link>)}
    </>
  );
}

export default Customers;
