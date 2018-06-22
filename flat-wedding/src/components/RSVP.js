import React, { Component } from 'react';
//import UUID from 'uuid'

export default class RSVP extends Component{

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
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    notes: "",
  }
}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(this.props.fetchURL + "users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(resp=>resp.json()).then(json=> { localStorage.setItem('token', json.token)
    localStorage.setItem('id', json.id);
  })
  this.props.setCurrentForm('WallPost')
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit} class="ui form" >
          {Object.keys(this.state).map(key =>(
            <div>
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
      <input type="submit" class="ui button" value="Submit"  />
        </form>
      </div>
    )
  }
}
