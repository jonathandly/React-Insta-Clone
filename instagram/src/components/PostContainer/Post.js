import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader'; 
import './PostContainer.css';

import { Heart, MessageCircle } from 'react-feather';

const Post = props => {
    return ( 
        <div>
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img 
                    src={props.post.imageUrl}
                    className="post-image"
                    alt="user post img"
                />
            </div>
            <div className="icons-div">
                <Heart className="heart-icon" />
                <MessageCircle className="message-icon" />
                {/* <MoreHorizontal /> */}
            </div>
            <div className="likes-div">{props.post.likes} likes</div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default Post;