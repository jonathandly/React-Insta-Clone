import React from 'react';

import { Instagram, Compass, Heart, User } from 'react-feather';
import withAuthenticate from '../Authentication/withAuthenticate';
import PostsPage from '../PostContainer/PostsPage';
import Login from '../Login/Login';
import { SearchDiv, Pipe, HeaderPara, Search, InstagramLogo, IgLogoText, Icons } from './searchBarStyles';
// import styled from 'styled-components';
// const SearchBar = _ => {
//     return (
//         <div className="search-div">
//             <div className="ig-logo-text">
//                 <Instagram className="instagram-logo" />
//                 <span className="pipe">|</span>
//                 <p className="ig-header-text">Instagram</p>
//             </div>
//             <input className="search" placeholder="Search"></input>
//             <div className="compass-heart-user">
//                 <Compass className="compass" />
//                 <Heart className="heart" />
//                 <User className="user" />
//             </div>
//         </div>
//     );
// }

// const SearchDiv = styled.div`
//     display: flex;
//     justify-content: space-around;
//     margin-top: 15px;
// `;

// const Pipe = styled.span`
//     font-size: 20px;
//     padding-left: 25px;
//     // margin-right: -15px;
// `;

// const HeaderPara = styled.p`
//     font-family: cursive;
//     font-size: 24px;
//     font-weight: 800;
//     margin-top: -8px;
//     margin-left: 25px;
// `;

// const Search = styled.input`
//     width: 150px;
//     height: 24px;
//     text-align: center;
//     border-radius: 6px;
//     border-color: black;

//     &::placeholder {
//         font-size: 16px;
//         opacity: .65;
//         color: gray;
//         padding-right: 50px;
//     }
// `;

// const InstagramLogo = styled.div`
//     padding-left: 20px; 
// `;

// const IgLogoText = styled.div`
//     display: flex;
//     justify-content: flex-start;
// `;

// const Icons = styled.div`
//     padding-right: 24px;
// `;

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: localStorage.getItem('username'),
            loggedIn: true
        }
    }
    logout = () => {
        localStorage.removeItem('username');
        let state = {...this.state}
        localStorage.clear(state);
        this.setState({ username: '', loggedIn: false });
    }
    render() {
        {if(!this.state.loggedIn) {
            return (
                <div className="App">
                    <ComponentFromWithAuthenticate />
                    {/* <Login /> */}
                </div>
            );
            } else {
                return (
                    // <div className="search-div">
                        <SearchDiv>
                        {/* <div className="ig-logo-text"> */}
                        <IgLogoText>
                            {/* <Instagram className="instagram-logo" /> */}
                            <InstagramLogo>
                                <Instagram />
                            </InstagramLogo>
                            {/* <span className="pipe">|</span> */}
                            <Pipe>|</Pipe>
                            {/* <p className="ig-header-text">Instagram</p> */}
                            <HeaderPara>Instagram</HeaderPara>
                        </IgLogoText>
                        {/* </div> */}
                        {/* <input className="search" placeholder="Search"></input> */}
                        <Search placeholder="Search"></Search>
                        {/* <div className="compass-heart-user"> */}
                        <Icons>
                            <Compass style={{paddingRight: '20px'}} />
                            <Heart style={{paddingRight: '20px'}} />
                            <User 
                                onClick={this.logout}    
                            />
                        </Icons>
                        {/* </div> */}
                        </SearchDiv>
                    // </div>
                );
            } 
        }
    }
}

export default SearchBar;