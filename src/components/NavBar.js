import React from 'react';


const NavBar = (props)=>{


  const handleButton = (e) =>{
    props.setCurrentForm(e.currentTarget.innerHTML)
  }


    return(
      <div className="NavBar">

        <div className='NavButtonRow'>
          <div className="navButtons"><b>melanie + jesse</b></div>
            {props.buttons.map((aButton)=>
              <div key={aButton} className="navButtons" onClick={(aButton)=>handleButton(aButton)}>{aButton}</div>)}
        </div>
      </div>
    )
}

export default NavBar
