import React from 'react';

import { Heart, MessageCircle } from 'react-feather';

const HeartMessageIcons = props => {
    return (
        <div>
            <div className="icons-div">
                <Heart 
                    className="heart-icon" 
                    likes={props.likes} 
                    color={props.color} 
                    onClick={props.increaseLikes} 
                />
                <MessageCircle 
                    className="message-icon" 
                />
                {/* <MoreHorizontal /> */}
            </div>
            <div className="likes-div">{props.likes} likes</div>
        </div>
    );
}

export default HeartMessageIcons;