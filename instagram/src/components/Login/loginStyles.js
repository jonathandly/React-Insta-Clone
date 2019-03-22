import React from 'react';
import styled from 'styled-components';
import img from './instagram24x24.png';

export const FormDiv = styled.div`
    margin: 5% auto;
    width: 50vw;
    height: 120vh;

    cursor: url(${img}) 12 12, pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UsernameLogin = styled.input`
    margin: 15px 0;
    height: 20px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid palevioletred;
    padding: 5px;

    &:hover {
        color: lightsteelblue;
        font-size: 16px;
    }
`;

export const PasswordLogin = styled.input`
    margin: 15px 0;
    height: 20px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid palevioletred;
    padding: 5px;

    &:hover {
        color: lightsteelblue;
        font-size: 16px;
    }
`;

export const Button = styled.button`
    width: 180px;
    height: 30px;
    border-radius: 5px;
    border-color: palevioletred;
    background: white;
    color: palevioletred;
    margin-top: 2%;
    font-size: 18px;
    text-align: center;
    
    &:hover {
        cursor: pointer;
    }
`;