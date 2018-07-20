import React, { Component } from 'react';

class Event extends Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    const time = new Date(this.props.event.start_time)
    return(

      <div>
      <b><p>{this.props.event.name}</p></b>
      <p>{time.toDateString()}</p>
      <p>{time.toLocaleTimeString()}</p>
            <br />
      </div>
    )
  }
}

export default Event;
