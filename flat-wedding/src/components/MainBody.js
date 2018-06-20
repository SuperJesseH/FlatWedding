import React, { Component } from 'react';
import BouncingHeads from './BouncingHeads'
import PostContainer from './PostContainer'


export default class MainBody extends Component{

  render(){
    return(
      <div>
        <BouncingHeads />
        <PostContainer handleClick={this.props.handleClick} posts={this.props.posts}/>
      </div>
    )
  }
}
