import React, { Component } from 'react';

class Event extends Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    return(
      <div>
      <p>{this.props.event.name}</p>
      <p>{this.props.event.date}</p>
      <p>{this.props.event.starttime}</p>
      <p>{this.props.event.endtime}</p>
      </div>
    )
  }
}

export default Event;
