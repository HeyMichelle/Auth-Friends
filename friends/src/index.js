import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import LoginForm from './components/LoginForm/LoginForm';
import FriendList from './components/Friends/FriendList';
import AddFriend from './components/Friends/AddFriend';
import './index.css';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest} 
      render={props => 
        localStorage.getItem('token') ? 
        ( <FriendList {...props} /> ) :
        ( <Redirect to='/login' /> )
    } 
    />
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={LoginForm} />
      <Route path='/addfriend' component={AddFriend} />
      <PrivateRoute path='/friendlist' component={FriendList} />
      <Route exact path='/' component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);