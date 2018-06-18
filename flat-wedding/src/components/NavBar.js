import React, { Component } from 'react';


const NavBar = (props)=>{


  const handleButton = (e) =>{
    props.setCurrentForm(e.currentTarget.innerHTML)
  }


    return(
      <div>
        <div className='NavText'>
          <h1>melanie + jesse</h1>
          <h2>13 april 2019</h2>
          <h2>madison, wi</h2>
        </div>

        <div className='NavButtonRow'>
            {props.buttons.map((aButton)=>
              <button key={aButton} onClick={(aButton)=>handleButton(aButton)}>{aButton}</button>)}
        </div>
      </div>
    )
}

export default NavBar
