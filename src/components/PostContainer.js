import React, { Component } from 'react';
import Post from './Post.js'
import UUID from 'uuid'

class PostContainer extends Component{
  // constructor(props) {
  //   super(props);
  // }

  generatePosts = () =>
   (
     !!this.props.posts.length ?
    this.props.posts.map(post => <div><br/><Post key={UUID()} post={post} user={this.props.users.find(user=>user.id === post.user_id)}/></div>)
     :
    "Please login"
   )

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
