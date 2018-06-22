import React, { Component } from 'react';
import BigHead from './BigHead.js'
import Hearts from './Hearts.js'
import jesse from '../imgs/jesseface2.png'
import melanie from '../imgs/melanieface2.png'
import heartimg from '../imgs/heart.png'


export default class BouncingHeads extends Component{
  constructor(props){
    super(props)

    this.state ={
      xLoc:1,
      xVec:1
    }
  }

  interval = setInterval(()=>{
      if (this.state.xLoc >= window.innerWidth/6){
        this.setState({
        xVec:this.state.xVec * -1,
        })
      }else if (this.state.xLoc <=0 && this.props.floatAway === false){
        this.setState({
        xVec:this.state.xVec * -1,
        })
      }
      this.setState({
        xLoc:this.state.xLoc + this.state.xVec
        })
    },20)


  componentDidMount(){
    this.interval
  }

  componentWillUnmount(){
    console.log('TRIGGERD');
    clearInterval(this.interval)
  }

  render(){
    this.props.removalFunc(this.state.xLoc)
    return(
    <div>
      <BigHead src={jesse} position={Math.abs( window.innerWidth - (this.state.xLoc + window.innerWidth/3 ))}/>
      <BigHead src={melanie} position={this.state.xLoc}/>
      <Hearts src={heartimg}/>
    </div>
  )
  }
}
