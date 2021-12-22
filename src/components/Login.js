import { useState } from 'react';
import { loginUserRequest } from '../utils';

export const Login = ({setUser}) => {

    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();
  
    const loginHandler = async (e) => {
      e.preventDefault();
      // Check the username and password is correct
      // Return user if everything matches
      loginUserRequest({
        username: loginUsername,
        password: loginPassword},
        setUser);
    };

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={loginHandler}>
                <input onChange={(e) => setLoginUsername(e.target.value)} placeholder="Username"/>
                <input type={"password"} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Password"/>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}