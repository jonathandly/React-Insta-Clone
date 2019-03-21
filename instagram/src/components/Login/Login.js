import React from 'react';

import './Login.css';

class Login extends React.Component {

    login() {
        let user = document.querySelector('.username-login');
        localStorage.setItem('username', user.value);
    }

    render() {
        return (
            <div className="form-div">
                <form>
                    <input 
                        className="username-login"
                        placeholder="username"
                        type="text"
                        name="username"
                    />
                    <input 
                        className="password-login"
                        placeholder="password"
                        type="password"
                        minLength="6"
                        maxLength="12"
                        name="pwd"
                    />
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;