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

    handlePostClick = (field) => {
      const name = field[0].value
      const message = field[1].value
      fetch(URL+"posts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          name: name,
          body: message,
          // filler id
          user_id: 1
        })
      })
      .then(res => res.json())
      .then(post => this.setState({posts: [...this.state.posts, post]}))
      field[0].value = ''
      field[1].value = ''
    }

    handleEventClick = (e) => {
      console.log(e);
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



  setCurrentForm = (formName) =>{
    this.setState({
      currentForm:`${formName}`
    })
  }

  render() {
    const buttons = ["WallPost", "Events", "RSVP", "Auth"]
    return (
      <div className="App">
        <NavBar className="NavBar" setCurrentForm={this.setCurrentForm} buttons={buttons}></NavBar>

<<<<<<< HEAD
        <Form className="Form" formOptions={buttons} currentForm={this.state.currentForm} handlePostClick={this.handlePostClick} events={this.state.events} handleEventClick={this.handleEventClick}></Form>
=======
        <Form className="Form" formOptions={buttons} currentForm={this.state.currentForm} handleClick={this.handleClick} fetchURL={URL}></Form>

>>>>>>> 4246f5c47282d1922c649a710658547df559d500
        <MainBody className="MainBody" handleClick={this.handleClick} posts={this.state.posts}></MainBody>

      </div>
    )
  }
}

export default App;
