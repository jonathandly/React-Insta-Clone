import React from 'react';

import Comment from './Comment';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div>
            Comment Section Component
            <Comment dummyData={props.dummyData} />
        </div>
    );
}

export default CommentSection;