import React, {Component} from 'react';

interface LoginProps {

}

interface LoginState {
    username: string;
    password: string;
}

// Should take in a username & password and then runs that against the DB
// should update the app with the trainer's info
class Login extends Component<LoginProps,LoginState> {
    onUsernameChange = (event: any) => {
        let newUsername: string = event.target.value;
        this.setState({
            username: newUsername
        })
    };

    onPasswordChange = (event: any) => {
        let newPassword: string = event.target.value;
        this.setState({
            username: newPassword
        })
    };

    attemptLogin() {
        alert("try again");
    }

    render() {
        return (
            <div>
                <label>Username:</label>
                <input type="text" onChange={this.onUsernameChange}/><br/>
                <label>Password:</label>
                <input type="text" onChange={this.onPasswordChange}/><br/>
                <button onClick={this.attemptLogin}>Login</button>
            </div>
        )
    }
}

export default Login;