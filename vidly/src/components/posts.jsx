
import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const Posts = ({ match, location }) => {
  const query = queryString.parse(location.search);
  console.log(query);

  const posts = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' }
  ];

  return (
    <>
      <h1>All Posts</h1>
      <p>Year: {match.params.year}, Month: {match.params.month}</p>
      {posts.map(p => <Link to={'/posts/' + p.title} key={p.id}><h2>{p.title}</h2></Link>)}
    </>
  );
}

export default Posts;
