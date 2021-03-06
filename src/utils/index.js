export const registerUserRequest = async (userData, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: userData.username,
                email: userData.email,
                password: userData.password
            })
        });
        const data = await response.json();
        setter(data.newUser.username);
    } catch (error) {
        console.log(error);
    }
}

export const loginUserRequest = async (userData, setter) => {
    try {
        console.log(userData);
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password
            })
        });
        const data = await response.json();
        if(response.status === 200) {
            if(data.state) {
                setter(userData.username);
                console.log(data.message);
            } else {
                console.log(data.message);
            }
        } else
            console.log(data.message);
    } catch (error) {
        console.log(error);
    }
}

export const updatePasswordRequest = async (userData, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}updatePassword`, {
            method: "PUT",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: userData.username,
                password: userData.password,
                newPassword: userData.newPassword
            })
        });
        const data = await response.json();
        if(response.status === 200 && data.state) {
            setter(true);
        } else if(!data.state) {
            setter(false);
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteAccountRequest = async (userData, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "DELETE",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: userData.username
            })
        });
        // const data = await response.json();
        console.log(setter);
        if(response.status === 200) {
            console.log("Account successfully deleted");
            setter(undefined);
        } else
            console.log("An error occurred");
    } catch (error) {
        console.log(error);
    }
}