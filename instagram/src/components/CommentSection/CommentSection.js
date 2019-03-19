import React from 'react';

import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    
    componentDidMount() {
        let id = this.props.postId;
        if(localStorage.getItem(id)) {
            this.setState({ comments: JSON.parse(localStorage.getItem(this.props.postId)) });
        } else {
            this.saveToLocalStorage();
        }
    }
    
    componentWillUnmount() {
        this.saveToLocalStorage();
    }

    saveToLocalStorage = _ => {
        localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
    }

    addNewComment = e => {
        e.preventDefault();
        let newComment = {text: this.state.comment, username: 'jonathan'};

        let comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({ comments, comment: '' });
        this.saveToLocalStorage();
    }

    handleCommentChange = e => {
        this.setState({ comment: e.target.value });
    }

    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                <CommentInput
                    comment={this.state.comment}
                    changeComment={this.handleCommentChange}
                    addNewComment={this.addNewComment}
                    />
            </div>
        );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
}

export default CommentSection;