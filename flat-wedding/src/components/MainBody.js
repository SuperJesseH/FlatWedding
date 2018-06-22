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


  componentDidMount(){
    if (!!localStorage.length){
      console.log("floatAway", !!localStorage.length);
      this.setState({floatAway:true})
    }
  }

  render(){

    return(
      <div>
        {this.state.heads ? <BouncingHeads removalFunc={this.removeHeads} floatAway={this.state.floatAway}/> : <div></div>}
        <PostContainer handleClick={this.props.handleClick} posts={this.props.posts}/>
      </div>
    )
  }
}
