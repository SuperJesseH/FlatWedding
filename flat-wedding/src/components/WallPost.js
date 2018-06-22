import React, { Component } from 'react';


export default class WallPost extends Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <React.Fragment>
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="message"></input>
        <button type="submit" onClick={(e) => this.props.handlePostClick(e.target.parentNode.children)} >submit</button>
      </React.Fragment>
    )
  }
}
