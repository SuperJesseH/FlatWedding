import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import Form from './components/Form'


class App extends Component {
  constructor(){
    super()

    this.state = {currentForm:"Auth"}
  }

  setCurrentForm = (formName) =>{
    this.setState({
      currentForm:`${formName}`
    })
  }

  componentDidMount(){
    console.log('hi');
    fetch('http://localhost:3000/api/v1/users').then(json=>json.json()).then(resp=>console.log(resp))
  }

  render() {
    const buttons = ["WallPost", "Events", "RSVP", "Auth"]
    console.log(this.state);
    return (
      <div className="App">
        <NavBar className="NavBar" setCurrentForm={this.setCurrentForm} buttons={buttons}></NavBar>
        <Form className="Form" formOptions={buttons} currentForm={this.state.currentForm}></Form>
        <MainBody className="MainBody"></MainBody>
      </div>
    );
  }
}

export default App;
