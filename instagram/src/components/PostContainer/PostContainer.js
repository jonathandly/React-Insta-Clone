import React from 'react';

import Post from './Post';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.posts.map(e => <Post key={e.likes} post={e} />)}
        </div>
    );
}

export default PostContainer;