import React, { Component } from 'react';
import BouncingHeads from './BouncingHeads'
import MessageContainer from './MessageContainer'


export default class MainBody extends Component{

  constructor(props){
    super(props)

    this.state = {
      heads:false
    }
  }

  render(){
    console.log(this.state);
    return(
      <div>
        {/* <BouncingHeads floatAway={this.state.heads}/> */}
        <MessageContainer />
      </div>
    )
  }
}
