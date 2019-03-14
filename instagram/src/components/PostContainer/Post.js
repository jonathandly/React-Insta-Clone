import React from 'react';


const Post = props => {
    return ( 
        <div>
        {props.dummyData.map(image => (
            <div key={image.likes}>
                <img 
                    src={image.thumbnailUrl} 
                    alt={image.username}
                />
                <img 
                    src={image.imageUrl} 
                    alt={image.username}
                />
                {image.likes}
            </div>
        ))}
        </div>
    );
}

export default Post;