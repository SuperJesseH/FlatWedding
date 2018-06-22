import React, { Component } from 'react';
import Event from './Event.js'

class EventContainer extends Component{
  // constructor(props) {
  //   super(props);
  // }

  generateEvents = () => {return this.props.events.map(event => <Event event={event} /> )}

  render(){
    const events = this.generateEvents();
    return(
      <div>
        {events}
      </div>
    )
  }

}

export default EventContainer;
