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
      posts: [],
      bounceAway: false
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
      fetch(URL + "posts", {headers: {"Content-Type": "application/json",
      "Authorization": localStorage.getItem("token")}})
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
    this.getUsers()
    this.getEvents()
    this.getPosts()
  }

  render() {
    const buttons = ["WallPost", "Events", "RSVP", "Auth"]
    return (
      <div className="App">

        <NavBar className="NavBar" setCurrentForm={this.setCurrentForm} buttons={buttons}></NavBar>

        <Form className="Form" formOptions={buttons} currentForm={this.state.currentForm} handlePostClick={this.handlePostClick} events={this.state.events} handleEventClick={this.handleEventClick}
        setCurrentForm={this.setCurrentForm}
        fetchURL={URL}></Form>

        <MainBody className="MainBody" handleClick={this.handleClick} posts={this.state.posts}
        currentForm={this.state.currentForm} />

      </div>
    )
  }
}

export default App;
