
import React, { Component } from "react";

import http from './services/httpService';
import config from './config.json';
import "./App.css";


class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const promise = http.get(config.apiEndpoint);

    const { data } = await promise;
    console.log(data);
    this.setState({ posts: data });

    //  OR:
    // .promise.then(response => this.setState({ posts: response.data }))
    // .catch(err => console.log('ERROR:', err));
  }

  handleAdd = async () => {
    const newPost = {
      title: 'new post',
      body: 'something cool'
    };

    const promise = http.post(config.apiEndpoint, newPost);
    const { data: post } = await promise;

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = 'Updated!';

    // await http.put(config.apiEndpoint + '/' + post.id, post);  // to update an entire object
    await http.patch(config.apiEndpoint + '/' + post.id, { title: post.title });

    const posts = [...this.state.posts];
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(({ id }) => id !== post.id);
    this.setState({ posts });

    // the following is not working as its shown by Mosh
    try {
      await http.delete(config.apiEndpoint + '/' + post.id);
      // throw new Error('err'); // simulate an error
    } catch (ex) {
      if (ex.response && ex.response.status === '404')
        alert('That post has already been deleted');
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
