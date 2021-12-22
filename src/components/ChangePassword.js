import { useState } from 'react';
import { updatePasswordRequest } from '../utils';

export const ChangePassword = ({currentUser}) => {
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [response, setResponse] = useState();
    const [responseText, setResponseText] = useState();

    const changePasswordHandler = async (e) => {
        e.preventDefault();
        // Fetch request to backend that creates a user
        //setResponse(null);
        await updatePasswordRequest({
            username: currentUser,
            password: currentPassword,
            newPassword: newPassword},
            setResponse);
        updateResponseText();
      };

    const updateResponseText = () => {
        console.log(response);
        if(response) {
            setResponseText('Password changed successfully');
            console.log("Password changed! :D");
        } else if (!response)
            setResponseText('Incorrect password, please try again');
    }

    return (
        <div>
            <h2>Change Password</h2>
            <form onSubmit={changePasswordHandler}>
                <input type="password" onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password"/>
                <input type="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password"/>
                <button type="submit">Change Password</button>
            </form>
            <h3>{responseText}</h3>
        </div>
    );
}