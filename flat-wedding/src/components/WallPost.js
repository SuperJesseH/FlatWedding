import React, { Component } from 'react';


export default class WallPost extends Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <React.Fragment>
        <form class="ui form">
            <input type="text" name="message" placeholder="message" />
          <button class="ui button" type="submit" onClick={(e) => this.props.handlePostClick(e)} >Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
