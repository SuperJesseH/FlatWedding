import React from 'react';


const NavBar = (props)=>{


  const handleButton = (e) =>{
    props.setCurrentForm(e.currentTarget.innerHTML)
  }


    return(
      <div className="NavBar">
        <div className='NavText'>
          <p>melanie + jesse</p>
        </div>

        <div className='NavButtonRow'>
            {props.buttons.map((aButton)=>
              <button key={aButton} onClick={(aButton)=>handleButton(aButton)}>{aButton}</button>)}
        </div>
      </div>
    )
}

export default NavBar
