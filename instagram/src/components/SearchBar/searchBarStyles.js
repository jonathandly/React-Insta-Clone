import React from 'react';
import styled from 'styled-components';

export const SearchDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
`;

export const Pipe = styled.span`
    font-size: 20px;
    padding-left: 25px;
    // margin-right: -15px;
`;

export const HeaderPara = styled.p`
    font-family: cursive;
    font-size: 24px;
    font-weight: 800;
    margin-top: -8px;
    margin-left: 25px;
`;

export const Search = styled.input`
    width: 150px;
    height: 24px;
    text-align: center;
    border-radius: 6px;
    border-color: black;

    &::placeholder {
        font-size: 16px;
        opacity: .65;
        color: gray;
        padding-right: 50px;
    }
`;

export const InstagramLogo = styled.div`
    padding-left: 20px; 
`;

export const IgLogoText = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Icons = styled.div`
    padding-right: 24px;
`;