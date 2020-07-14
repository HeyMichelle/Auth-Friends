import React from 'react';
import NavMenu from './components/NavMenu/NavMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <h2>Log in, view your friends, and add new friends!</h2>
      <p>HINT</p>
      <p>login = admin</p>
      <p>password = password</p>
    </div>
  );
}

export default App;
