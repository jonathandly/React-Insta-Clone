import React, { Component } from 'react';
import styled from 'styled-components';

import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/Authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

const AppDiv = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  render() {
    return (
      <AppDiv>
        <ComponentFromWithAuthenticate />
      </AppDiv>
    );
  }
}

export default App;

