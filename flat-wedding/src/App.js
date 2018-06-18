import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import CurrentForm from './components/CurrentForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="NavBar"></NavBar>
        <CurrentForm className="CurrentForm"></CurrentForm>
        <MainBody className="MainBody"></MainBody>
      </div>
    );
  }
}

export default App;
