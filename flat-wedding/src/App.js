import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import Form from './components/Form'
const URL = "http://localhost:3000/api/v1/"




class App extends Component {
    state = {
      events: [],
      users: [],
      posts: []
    }

    getUsers() {
      fetch(URL + "users")
      .then(res => res.json())
      .then(users => this.setState({ users }))
    }

    getEvents() {
      fetch(URL + "events")
      .then(res => res.json())
      .then(events => this.setState({ events }))
    }

    getPosts() {
      fetch(URL + "posts")
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
    }

  componentDidMount() {
    this.getUsers()
    this.getEvents()
    this.getPosts()
  }

  handleClick = (e) => {
    const name = e.target.parentNode.children[0].value
    const body = e.target.parentNode.children[1].value
    fetch(URL + "posts" + "/1", {
      method: POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: {name},
        body: {body}
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }


  setCurrentForm = (formName) =>{
    this.setState({
      currentForm:`${formName}`
    })
  }

  render() {
    const buttons = ["Write on wall", "Events", "RSVP", "LOGIN/Logout"]
    console.log(this.state);
    return (
      <div className="App">
        <NavBar className="NavBar" setCurrentForm={this.setCurrentForm} buttons={buttons}></NavBar>
        <Form className="Form"></Form>
        <MainBody className="MainBody" handleClick={this.handleClick} posts={this.state.posts}></MainBody>
      </div>
    );
  }
}

export default App;
