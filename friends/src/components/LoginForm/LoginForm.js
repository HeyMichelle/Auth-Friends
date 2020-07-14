import React from 'react';
import axios from 'axios';

import NavMenu from '../NavMenu/NavMenu';

import { FormHeader, FormContainerDiv, StyledForm } from './LoginFormStyles';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials: {
        username: 'admin',
        password: 'password'
      },
      isLoading: false
    }
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name] : event.target.value
      }
    })
  }

  login = event => {
    event.preventDefault()
    this.setState({ isLoading: true })

    // make a POST request, send credentials object to the api, log out response
    axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(response => {
        window.localStorage.setItem('token', response.data.payload)
        setTimeout(() => {
          this.setState({ isLoading: false })
          this.props.history.push('/friendlist')
        }, 500)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavMenu />
        <FormHeader>Login Form</FormHeader>
        {
          this.state.isLoading ? 
          <p>Loading...</p> : 
          <FormContainerDiv>
            <StyledForm onSubmit={this.login}>
              <input 
                type='text'
                name='username'
                onChange={this.handleChange}
                value={this.state.credentials.username}
                placeholder='Username'
              />
              <input 
                type='password'
                name='password'
                onChange={this.handleChange}
                value={this.state.credentials.password}
                placeholder='Password'
              />
              <button type='submit'>Submit</button>
            </StyledForm>
          </FormContainerDiv>
        }
      </div>
    )
  }
}

export default LoginForm