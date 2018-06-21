import React, { Component } from 'react';
import BouncingHeads from './BouncingHeads'
import PostContainer from './PostContainer'


export default class MainBody extends Component{

  constructor(props){
    super(props)

    this.state = {
      heads:false
    }
  }

  render(){
    return(
      <div>
        <BouncingHeads />
        <PostContainer handleClick={this.props.handleClick} posts={this.props.posts}/>
      </div>
    )
  }
}
