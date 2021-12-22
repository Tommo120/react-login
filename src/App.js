import React, { useState } from 'react';
import './App.css';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { ChangePassword } from './components/ChangePassword';
import { DeleteAccount } from './components/DeleteAccount';

const App = () => {
  const [user, setUser] = useState();

  const logOut = () => {
    console.log('Logging out');
    setUser(null);
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please register or sign in"}</h1>
      {!user ?
      <div>
        <Register setUser={setUser}/>
        <Login setUser={setUser}/>
      </div>
      :
      <div>
        <ChangePassword userData={user}/>
        <DeleteAccount userData={user} setUser={setUser}/>
        <button onClick={logOut}>Log Out</button>
      </div>
      }
    </div>
  );
}

export default App;