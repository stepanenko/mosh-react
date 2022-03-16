
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { fetchGenres } from '../services/genreService';
// import { fetchMovies } from '../services/movieService';
import { getGenres as fetchGenres } from '../services/fakeGenreService';
import { getMovies as fetchMovies } from '../services/fakeMovieService';

const Customers = ({ match }) => {
  let [genres, setGenres] = useState([]);
  let [movies, setMovies] = useState([]);

  const customers = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' }
  ];

  useEffect(() => {
    fetchGenres()
      .then(data => setGenres(data))
      .catch(console.log('Couldn`t fetch data'));

    fetchMovies()
      .then(data => setMovies(data))
      .catch(console.log('Couldn`t fetch data'));
  }, []);

  // OR:
  // useEffect(() => {
  //   async function fetchData() {
  //     const genres = await fetchGenres();
  //     setGenres(genres);

  //     const movies = await fetchMovies();
  //     setMovies(movies);
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <h1>All Customers</h1>
      {/* <p>Year: {match.params.year}, Month: {match.params.month}</p> */}
      {customers.map(c =>
        <Link to={'/customers/' + c.title} key={c.id}>
          <h2>{c.title}</h2>
        </Link>)}
      <h2>Genres:</h2>
      <ul>
        {genres.map(g => <li key={g._id}>{g.name}</li>)}
      </ul>
      <h2>Movies:</h2>
      <ul>
        {movies.map(m => <li key={m._id}>{m.title}</li>)}
      </ul>
    </>
  );
}

export default Customers;
