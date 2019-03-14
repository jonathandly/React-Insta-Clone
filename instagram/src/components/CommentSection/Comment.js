import React from 'react';

const Comment = props => {
    return (
        <div>
        Comment Component
        {props.dummyData.map(comment => (
            <div>
                <p>{comment.username}</p>
                <p>{comment.text}</p>
            </div>
        ))}
        </div>
    );
}

export default Comment;