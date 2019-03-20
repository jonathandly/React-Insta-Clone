import React, { Component } from 'react';

import './App.css';
import PostsPage from './components/PostContainer/PostsPage';

// import dummyData from  './dummy-data';
// import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }


  render() {
    return (
      <div className="App">
        {/* <PostsPage />
        <SearchBar />
        <PostContainer posts={this.state.posts} /> */}
        <ComponentFromWithAuthenticate />

      </div>
    );
  }
}

export default App;

