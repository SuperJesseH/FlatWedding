import React, { Component } from 'react';
import WallPost from './WallPost'
import EventContainer from './EventContainer'
import RSVP from './RSVP'
import Auth from './Auth'




export default class Form extends Component{
  // constructor(props){
  //   super(props)
  // }

  render(){
    // console.log(this.props.fetchURL);
    const aForm = () =>{
      switch (this.props.currentForm){

        case "WallPost":
          return (
            <div>
              <WallPost handlePostClick={this.props.handlePostClick} />
            </div>
          )
          break
        case "Events":
          return <EventContainer handleEventClick={this.props.handleEventClick} events={this.props.events}/>
          break
        case "RSVP":
          return <RSVP fetchURL={this.props.fetchURL}
          setCurrentForm={this.props.setCurrentForm}/>
          break
        default:
          return <Auth fetchURL={this.props.fetchURL} setCurrentForm={this.props.setCurrentForm}/>
      }
    }
    return(
      <div>{aForm()}</div>
    )
  }
}
