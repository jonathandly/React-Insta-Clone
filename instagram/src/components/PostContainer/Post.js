import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader'; 
// import './PostContainer.css';
import HeartMessageIcons from './HeartMessageIcons';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes,

            color: 'black'
        };
    }

    increaseLikes = _ => {
        let likes = this.state.likes;

        if(this.state.color === 'black') {
            this.setState({ likes: likes + 1, color: 'red' });
        } else {
            this.setState({ likes: likes - 1, color: 'black' });
        }
    }

    render() {
        return ( 
            <div>
                <PostHeader 
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div>
                    <img 
                        src={this.props.post.imageUrl}
                        className="post-image"
                        alt="user post img"
                    />
                </div>
                <HeartMessageIcons 
                    increaseLikes={this.increaseLikes}
                    likes={this.state.likes}    
                    color={this.state.color}
                />
                <CommentSection 
                    comments={this.props.post.comments} 
                    postId={this.props.post.imageUrl} 
                />
            </div>
        );
    }
}

export default Post;