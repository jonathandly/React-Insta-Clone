import React from 'react';

import { Heart, MessageCircle } from 'react-feather';
// import styled from 'styled-components';
import { Icons, Likes, MessageDiv } from './postContainerStyles';

// const Icons = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     margin-left: 85px;
//     margin-top: 10px;
// `;

// const Likes = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     margin-left: 85px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     font-weight: bold;
// `;

// const MessageDiv = styled.div`
//     padding-left: 10px;
// `;

const HeartMessageIcons = props => {
    return (
        <div>
            {/* <div className="icons-div"> */}
            <Icons>
                <Heart 
                    className="heart-icon" 
                    likes={props.likes} 
                    color={props.color} 
                    onClick={props.increaseLikes} 
                />
                <MessageDiv>
                <MessageCircle 
                    // className="message-icon" 
                />
                </MessageDiv>
                {/* <MoreHorizontal /> */}
            {/* </div> */}
            </Icons>
            {/* <div className="likes-div">{props.likes} likes</div> */}
            <Likes>{props.likes} likes</Likes>
        </div>
    );
}

export default HeartMessageIcons;