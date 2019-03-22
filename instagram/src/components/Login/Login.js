import React from 'react';

// import './Login.css';
// import styled from 'styled-components';
import { FormDiv, Form, UsernameLogin, PasswordLogin, Button } from './loginStyles';
// import img from './instagram24x24.png';

// const FormDiv = styled.div`
//     margin: 5% auto;
//     width: 50vw;
//     height: 120vh;

//     cursor: url(${img}) 12 12, pointer;
// `;

// const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

// const UsernameLogin = styled.input`
//     margin: 15px 0;
//     height: 20px;
//     font-size: 16px;
//     border-radius: 4px;
//     border: 1px solid palevioletred;
//     padding: 5px;

//     &:hover {
//         color: lightsteelblue;
//         font-size: 16px;
//     }
// `;

// const PasswordLogin = styled.input`
//     margin: 15px 0;
//     height: 20px;
//     font-size: 16px;
//     border-radius: 4px;
//     border: 1px solid palevioletred;
//     padding: 5px;

//     &:hover {
//         color: lightsteelblue;
//         font-size: 16px;
//     }
// `;

// const Button = styled.button`
//     width: 135px;
//     height: 30px;
//     border-radius: 15px;
//     background: lightblue;
//     color: firebrick;
//     margin-top: 2%;
//     font-size: 18px;

//     &:hover {
//         cursor: pointer;
//     }
// `;

class Login extends React.Component {

    login() {
        let user = document.getElementById('username-login');
        localStorage.setItem('username', user.value);
    }

    render() {
        return (
            // <div className="form-div">
            <FormDiv>
                {/* <form> */}
                <Form>
                    {/* <input 
                        className="username-login"
                        placeholder="username"
                        type="text"
                        name="username"
                    /> */}
                    <UsernameLogin 
                        placeholder="username"
                        type="text"
                        name="username"
                        id="username-login"
                    />
                    
                    {/* <input 
                        className="password-login"
                        placeholder="password"
                        type="password"
                        minLength="6"
                        maxLength="12"
                        name="pwd"
                    /> */}
                    <PasswordLogin
                        placeholder="password"
                        type="password"
                        minLength="6"
                        maxLength="12"
                        name="pwd"
                    />
                    {/* <button onClick={this.login}>Login</button> */}
                    <Button onClick={this.login}>Login</Button>
                </Form>
                {/* </form> */}
            </FormDiv>
        );
    }
}

export default Login;