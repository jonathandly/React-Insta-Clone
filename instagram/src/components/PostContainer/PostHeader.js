import React from 'react';

import { ThumbnailDiv, UsernameDiv, ThumbnailImage } from './postContainerStyles';

const PostHeader = props => {
    return (
        <div>
            <ThumbnailDiv>
                <ThumbnailImage src={props.thumbnailUrl} alt="post thumbnail">
                </ThumbnailImage>
                <UsernameDiv>{props.username}</UsernameDiv>
            </ThumbnailDiv>
        </div>
    );
}

export default PostHeader;