import React from 'react';

import './PostContainer.css';

const PostHeader = props => {
    return (
        <div>
            <div className="thumbnail-username">
                <img 
                    className="post-thumbnail"
                    src={props.thumbnailUrl}
                    alt="post thumbnail"
                />
                <div className="username">{props.username}</div>
            </div>
        </div>
    );
}

export default PostHeader;