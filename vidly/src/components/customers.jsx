
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import fetchGenres from '../services/movieService';

const Customers = ({ match }) => {
  let [genres, setGenres] = useState([]);

  const customers = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' }
  ];

  useEffect(() => {
    fetchGenres()
      .then(data => setGenres(data))
      .catch(console.log('Couldnt fetch data'));
  }, []);

  return (
    <>
      <h1>All Customers</h1>
      <p>Year: {match.params.year}, Month: {match.params.month}</p>
      {customers.map(c =>
        <Link to={'/customers/' + c.title} key={c.id}>
          <h2>{c.title}</h2>
        </Link>)}
      <h2>Genres:</h2>
      <ul>
        {genres.map(g => <li key={g._id}>{g.name}</li>)}
      </ul>
    </>
  );
}

export default Customers;
