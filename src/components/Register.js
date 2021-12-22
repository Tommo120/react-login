import { useState } from 'react';
import { registerUserRequest } from '../utils';

export const Register = ({setUser}) => {
    const [registerUsername, setRegisterUsername] = useState();
    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();

    const registerHandler = async (e) => {
        e.preventDefault();
        // Fetch request to backend that creates a user
        registerUserRequest({
          username: registerUsername,
          email: registerEmail,
          password: registerPassword},
          setUser);
      };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={registerHandler}>
                <input onChange={(e) => setRegisterUsername(e.target.value)} placeholder="Username"/>
                <input onChange={(e) => setRegisterEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange={(e) => setRegisterPassword(e.target.value)} placeholder="Password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}