import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import Form from './components/Form'

class App extends Component {
  constructor(){
    super()

    this.state = {currentForm:"login"}
  }

  setCurrentForm = (formName) =>{
    this.setState({
      currentForm:`${formName}`
    })
  }

  render() {
    const buttons = ["fee", "fye", "foe", "fum"]
    console.log(this.state);
    return (
      <div className="App">
        <NavBar className="NavBar" setCurrentForm={this.setCurrentForm} buttons={buttons}></NavBar>
        <Form className="Form"></Form>
        <MainBody className="MainBody"></MainBody>
      </div>
    );
  }
}

export default App;
