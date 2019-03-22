import React from 'react';

import './SearchBar.css';
import { Instagram, Compass, Heart, User } from 'react-feather';
import withAuthenticate from '../Authentication/withAuthenticate';
import PostsPage from '../PostContainer/PostsPage';
import Login from '../Login/Login';
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
                    <div className="search-div">
                        <div className="ig-logo-text">
                            <Instagram className="instagram-logo" />
                            <span className="pipe">|</span>
                            <p className="ig-header-text">Instagram</p>
                        </div>
                        <input className="search" placeholder="Search"></input>
                        <div className="compass-heart-user">
                            <Compass className="compass" />
                            <Heart className="heart" />
                            <User 
                                className="user" 
                                onClick={this.logout}    
                            />
                        </div>
                    </div>
                );
            } 
        }
    }
}

export default SearchBar;