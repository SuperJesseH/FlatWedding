import React, { Component } from 'react';

const Post = (props) => {

    console.log(props.post);
    return(
      <div>
        <p>{props.post.name}</p>
        <p>{props.post.body}</p>
      </div>
    )
  }


export default Post;
