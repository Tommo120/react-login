import { deleteAccountRequest } from '../utils';

export const DeleteAccount = ({currentUser, setUser}) => {

    const deleteAccountHandler = async () => {
        // Fetch request to backend that creates a user
        //setResponse(null);
        console.log(setUser);
        await deleteAccountRequest({
            username: currentUser},
            setUser);
      };

    return (
        <div>
            <button onClick={deleteAccountHandler}>Delete Account</button>
        </div>
    );
}