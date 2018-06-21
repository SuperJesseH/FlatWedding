import React, { Component } from 'react';
import Post from './Post.js'

class PostContainer extends Component{
  constructor(props) {
    super(props);
  }

  generatePosts = () => {return this.props.posts.map(post => <Post post={post} /> )}

  render(){
    console.log(this.props);
    const posts = this.generatePosts();
    return(
      <div>
        {posts}
      </div>
    )
  }

}

export default PostContainer;
