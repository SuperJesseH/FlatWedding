import React, {Component} from 'react'

const BigHead = (props) =>{

  let imgStyle = {
    position: 'absolute',
    left: `${props.position}px`,
    width: window.innerWidth/3
  }

  return(
    <img src={props.src} style={imgStyle}></img>
  )
}


export default BigHead
