import React, { Component } from 'react';
import Post from './Post.js'

class PostContainer extends Component{

  generatePosts = () => {return this.props.posts.map(post => <Post post={post} /> )}

  render(){
    console.log(this.props);
    const posts = this.generatePosts();
    return(
      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="lovely message"/>
        <input type="submit" onClick={(e) => this.props.handleClick(e)} />
        {posts}
      </div>
    )
  }

}

export default PostContainer;
