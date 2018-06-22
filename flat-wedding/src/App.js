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

    handlePostClick = (e) => {
      console.log("handlePostClick", e.target.parentNode.children[0].value);
      e.preventDefault()
      const message = e.target.parentNode.children[0].value
      fetch(URL+"posts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          body: message,
          // filler id
          user_id: 1
        })
      })
      .then(res => res.json())
      .then(post => this.setState({posts: [...this.state.posts, post]}))
      e.target.parentNode.children[0].value = ''
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

        <Form className="Form" formOptions={buttons} currentForm={this.state.currentForm} handlePostClick={this.handlePostClick} events={this.state.events} handleEventClick={this.handleEventClick} fetchURL={URL}></Form>
        <MainBody className="MainBody" handleClick={this.handleClick} posts={this.state.posts}></MainBody>

      </div>
    )
  }
}

export default App;
