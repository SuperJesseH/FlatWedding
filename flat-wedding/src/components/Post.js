import React from 'react';

const Post = (props) => {

    return(
      <div>
        <p>{props.user.username}</p>
        <p>{props.post.body}</p>
      </div>
    )
  }


export default Post;
