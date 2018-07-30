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

    handlePostClick = (e, file) => {
      e.preventDefault()
      console.log("handlePostClick", file)
      const message = e.target.parentNode.children[0].value

      fetch(URL+"posts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
          image: file,
          body: message,
          user_id: localStorage.id
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
        <br />
        <Form className="Form" formOptions={buttons} currentForm={this.state.currentForm} handlePostClick={this.handlePostClick} events={this.state.events} handleEventClick={this.handleEventClick}
        setCurrentForm={this.setCurrentForm}
        fetchURL={URL}></Form>

        <br />
        <MainBody className="MainBody" handleClick={this.handleClick} posts={this.state.posts}
        currentForm={this.state.currentForm}
        users={this.state.users}/>

      </div>
    )
  }
}

export default App;
