import React from 'react';

const Post = (props) => {



    return(
      <div className="ui raised segment">
        <b><p>{props.user.username}</p></b>
        <p>{props.post.body}</p>
      </div>
    )
  }


export default Post;
