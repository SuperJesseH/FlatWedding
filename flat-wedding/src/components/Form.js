import React, { Component } from 'react';
import WallPost from './WallPost'
import Events from './Events'
import RSVP from './RSVP'
import Auth from './Auth'


export default class Form extends Component{

  render(){
    const aForm = () =>{
      switch (this.props.currentForm){

        case "WallPost":
          return <WallPost />
          break
        case "Events":
          return <Events />
          break
        case "RSVP":
          return <RSVP />
          break
        default:
          return <Auth />
      }
    }
    return(
      <div>{aForm()}</div>
    )
  }
}
