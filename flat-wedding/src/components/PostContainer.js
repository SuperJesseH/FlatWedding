import React, { Component } from 'react';
import Post from './Post.js'
import UUID from 'uuid'

class PostContainer extends Component{
  constructor(props) {
    super(props);
  }

  generatePosts = () => {return this.props.posts.map(post => <Post key={UUID()} post={post} /> )}

  render(){
    const posts = this.generatePosts();
    return(
      <div>
        {posts}
      </div>
    )
  }

}

export default PostContainer;
