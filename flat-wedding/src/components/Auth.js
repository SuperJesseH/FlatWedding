import React, { Component } from 'react';


export default class Auth extends Component{
  constructor(props){
    super(props)

  // t.string "first_name"
  // t.string "last_name"
  // t.string "street"
  // t.string "city"
  // t.string "state"
  // t.integer "zip_code"
  // t.boolean "rsvp"
  // t.string "notes"
  // t.string "status"
  // t.string "username"
  // t.string "password_digest"
  // t.datetime "created_at", null: false
  // t.datetime "updated_at", null: false

  this.state = {
    username: "",
    password: "",
  }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.fetchURL + "sessions");
    fetch(this.props.fetchURL + "sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(resp=>resp.json())
      .then(json=> {
        localStorage.setItem('token', json.token)
        this.props.setCurrentForm('WallPost')
      })
  }


  render(){



    // console.log(this.props.fetchURL);
    return(

      <div>
        <form class="ui form" onSubmit={this.handleSubmit}>
          {Object.keys(this.state).map(key =>(
            <div class="field">
          <label htmlFor={key}>{key}</label>
          <input
            type={key === "password" ? "password" : "text"}
            name={key}
            placeholder={key}
            onChange={this.handleChange}
            value={this.state.key}
          />
        </div>)
      )}
      <button class="ui button" type="submit">log in</button>
        </form>
      </div>
    )
  }
}
