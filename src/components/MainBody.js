import React, { Component } from 'react';
import BouncingHeads from './BouncingHeads'
import PostContainer from './PostContainer'


export default class MainBody extends Component{

  constructor(props){
    super(props)

    this.state = {
      heads:true,
      floatAway:false
    }
  }

  removeHeads = (xLoc) => {
    if (xLoc < (window.innerWidth/3) * -1){
      this.setState({
        heads:false
      })
    }
  }


  componentWillReceiveProps = (nextProps) => {
    if (nextProps.posts.message === undefined && localStorage.length > 0){
      // console.log("floatAway", !!localStorage.length);
      this.setState({
        floatAway:true
      })
    }
  }

  render(){
    return(
      <div>

        <PostContainer users={this.props.users} handleClick={this.props.handleClick} posts={this.props.posts}/>

        <br />
        
        {this.state.heads ? <BouncingHeads removalFunc={this.removeHeads} floatAway={this.state.floatAway}
        currentForm={this.props.currentForm}
        /> : <div></div>}

      </div>
    )
  }
}
