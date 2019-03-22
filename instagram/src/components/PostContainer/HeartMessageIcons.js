import React from 'react';

import { Heart, MessageCircle } from 'react-feather';
import { Icons, Likes, MessageDiv } from './postContainerStyles';

const HeartMessageIcons = props => {
    return (
        <div>
            <Icons>
                <Heart 
                    className="heart-icon" 
                    likes={props.likes} 
                    color={props.color} 
                    onClick={props.increaseLikes} 
                />
                <MessageDiv>
                <MessageCircle  
                />
                </MessageDiv>
            </Icons>
            <Likes>{props.likes} likes</Likes>
        </div>
    );
}

export default HeartMessageIcons;