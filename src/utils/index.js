export const registerUserRequest = async (userData, setter) => {
    try {
        const response = await fetch("https://tomfox-react-login.herokuapp.com/user", {
            method: "POST",
            mode: "cors",
            origin: "https://serene-mccarthy-223972.netlify.app/",
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
        const response = await fetch("https://tomfox-react-login.herokuapp.com/login", {
            method: "POST",
            mode: "cors",
            origin: "https://serene-mccarthy-223972.netlify.app/",
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
        const response = await fetch("https://tomfox-react-login.herokuapp.com/updatePassword", {
            method: "PUT",
            mode: "cors",
            origin: "https://serene-mccarthy-223972.netlify.app/",
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
        const response = await fetch("https://tomfox-react-login.herokuapp.com/user", {
            method: "DELETE",
            mode: "cors",
            origin: "https://serene-mccarthy-223972.netlify.app/",
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