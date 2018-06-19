import React, { Component } from 'react';
import BouncingHeads from './BouncingHeads'
import MessageContainer from './MessageContainer'


export default class MainBody extends Component{

  render(){
    return(
      <div>
        <BouncingHeads />
        <MessageContainer />
      </div>
    )
  }
}
