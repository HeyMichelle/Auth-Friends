import React from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

import { FormHeader, FormContainerDiv } from './FriendStyles';

class AddFriend extends React.Component {
  state = {
    friend: {
      name: '',
      age: 25,
      email: ''
    }
  }

  handleChange = event => {
    this.setState({
      friend: { 
        ...this.state.friend,
        [event.target.name] : event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.post('http://localhost:5000/api/friends', this.state.friend)
      .then(response => {
        this.setState({
          friend: {
            name: '',
            age: 0,
            email: ''
          }
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavMenu />
        <FormHeader>Add Friend</FormHeader>

        <FormContainerDiv>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.friend.name}
              placeholder='name'
            />
            <input 
              type='email'
              name='email'
              onChange={this.handleChange}
              value={this.state.friend.email}
              placeholder='email'
            />
            <input 
              type='number'
              name='age'
              onChange={this.handleChange}
              value={this.state.friend.age}
              placeholder='age'
            />
            <button type='submit'>Add Friend</button>
          </form>
        </FormContainerDiv>

      </div>
    )
  }
}

export default AddFriend