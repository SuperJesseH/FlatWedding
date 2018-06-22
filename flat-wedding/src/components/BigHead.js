import React from 'react'

const BigHead = (props) =>{

  let imgStyle = {
    position: 'absolute',
    left: `${props.position}px`,
    width: window.innerWidth/3
  }

  return(
    <img alt="head" src={props.src} style={imgStyle}></img>
  )
}


export default BigHead
