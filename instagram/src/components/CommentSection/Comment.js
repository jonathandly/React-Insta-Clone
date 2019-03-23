import React from 'react';

import { CommentDiv, CommentUsername, CommentText } from './commentSectionStyles';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
            <CommentDiv>
                <CommentUsername>{props.comment.username}</CommentUsername>
                <CommentText>{props.comment.text}</CommentText>
            </CommentDiv>
    );
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;