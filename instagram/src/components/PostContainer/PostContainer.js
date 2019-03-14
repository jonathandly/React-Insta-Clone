import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            <Post 
                dummyData={props.dummyData}
                // key={props.likes}
            />
            <CommentSection 
                dummyData={props.dummyData}
            />
        </div>
    );
}

export default PostContainer;