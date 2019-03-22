import React from 'react';

import dummyData from  '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {

    constructor() {
        super();
        this.state = {
          posts: [],
          filteredPosts: []
        }
    }

    componentDidMount() {
        this.setState({ posts: dummyData });
    }

    searchPosts = e => {
        const posts = this.state.posts.filter(post => {
          if(post.username.includes(e.target.value)) {
            return post;
          }
        });
        this.setState({ filteredPosts: posts });
    }

    render() {
        return (
            <div>
                <SearchBar 
                    searchName={this.state.searchName} 
                    searchPosts={this.searchPosts}
                />
                <PostContainer 
                    posts={this.state.filteredPosts.length > 0 
                            ? this.state.filteredPosts 
                            : this.state.posts
                    } 
                />
            </div>
        );
    }
}

export default PostsPage;