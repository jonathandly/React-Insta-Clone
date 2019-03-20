import React from 'react';

import dummyData from  '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {

    constructor() {
        super();
        this.state = {
          posts: []
        }
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <PostContainer posts={this.state.posts} />
            </div>
        );
    }
}

export default PostsPage;