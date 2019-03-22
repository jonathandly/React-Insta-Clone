import React from 'react';

import { Instagram, Compass, Heart, User } from 'react-feather';
import withAuthenticate from '../Authentication/withAuthenticate';
import PostsPage from '../PostContainer/PostsPage';
import Login from '../Login/Login';
import { SearchDiv, Pipe, HeaderPara, Search, InstagramLogo, IgLogoText, Icons } from './searchBarStyles';

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
                </div>
            );
            } else {
                return (
                        <SearchDiv>
                            <IgLogoText>
                                <InstagramLogo>
                                    <Instagram />
                                </InstagramLogo>
                                <Pipe>|</Pipe>
                                <HeaderPara>Instagram</HeaderPara>
                            </IgLogoText>
                        <Search onKeyDown={this.props.searchPosts} placeholder="Search"></Search>
                            <Icons>
                                <Compass style={{paddingRight: '20px'}} />
                                <Heart style={{paddingRight: '20px'}} />
                                <User 
                                    onClick={this.logout}    
                                />
                            </Icons>
                        </SearchDiv>
                );
            } 
        }
    }
}

export default SearchBar;