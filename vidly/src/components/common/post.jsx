
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ match, history }) => {

  const handleDelete = () => {
    console.log('Post successfully deleted');
    history.replace('/posts'); // will NOT be stored in the browser history
    // history.push('/posts'); // the route will be stored in the browser history
  }

  return (
    <>
      <h1>Post - {match.params.post}</h1>
      <Link to='/posts'><button>To all Posts</button></Link>
      <br />
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default Post;
