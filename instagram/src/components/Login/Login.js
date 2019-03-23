import React from 'react';

import { FormDiv, Form, UsernameLogin, PasswordLogin, Button } from './loginStyles';

class Login extends React.Component {

    login() {
        let user = document.getElementById('username-login');
        localStorage.setItem('username', user.value);
    }

    render() {
        return (
            <FormDiv>
                <Form>
                    <UsernameLogin 
                        placeholder="username"
                        type="text"
                        name="username"
                        id="username-login"
                    />
                    <PasswordLogin
                        placeholder="password"
                        type="password"
                        minLength="6"
                        maxLength="12"
                        name="pwd"
                    />
                    <Button onClick={this.login}>Login</Button>
                </Form>
            </FormDiv>
        );
    }
}

export default Login;