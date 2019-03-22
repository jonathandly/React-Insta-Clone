import React from 'react';

// import './PostContainer.css';
// import styled from 'styled-components';
import { ThumbnailDiv, UsernameDiv, ThumbnailImage } from './styles';

// const ThumbnailDiv = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     margin-left: 85px;
//     margin-bottom: 5%;
// `;

// const UsernameDiv = styled.div`
//     padding: 15px;
//     font-weight: 600;
//     font-size: 18px;
//     font-family: Roboto;
// `;

// const ThumbnailImage = styled.img`
//     border-radius: 80px;
//     height: 50px;
// `;

const PostHeader = props => {
    return (
        <div>
            {/* <div className="thumbnail-username"> */}
            <ThumbnailDiv>
                <ThumbnailImage src={props.thumbnailUrl} alt="post thumbnail">
                    {/* <img 
                        // className="post-thumbnail"
                        src={props.thumbnailUrl}
                        alt="post thumbnail"
                    /> */}
                </ThumbnailImage>
                {/* <div className="username">{props.username}</div> */}
                <UsernameDiv>{props.username}</UsernameDiv>
            {/* </div> */}
            </ThumbnailDiv>
        </div>
    );
}

export default PostHeader;