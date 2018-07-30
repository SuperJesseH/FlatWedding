import React, { Component } from 'react';


export default class WallPost extends Component{
  // constructor(props){
  //   super(props)
  // }



  loadFile = (e) => {
    e.preventDefault()
    e.persist()
    console.log(this.props);
    let reader = new FileReader();
    let file = document.getElementById("imgInput").files[0]
    reader.onloadend = () =>{
      this.props.handlePostClick(e, reader.result)
    }

    reader.readAsArrayBuffer(file)
  }

  render(){
    return(
      <React.Fragment>
        <form class="ui form">
            <input type="text" name="message" placeholder="message" />
            Image upload
            <input type="file" name="image" placeholder="message" id="imgInput" />
          <button class="ui button" type="submit" onClick={this.loadFile} >Submit</button>
        </form>
      </React.Fragment>
    )
  }
}
