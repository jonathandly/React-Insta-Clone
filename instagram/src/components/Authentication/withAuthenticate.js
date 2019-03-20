import React from 'react';

const withAuthenticate = WrappedComponent1 => WrappedComponent2 => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if(localStorage.getItem('username')) {
                this.setState({ loggedIn: true });
            } 
        }

        render() {
            if(this.state.loggedIn === true) {
                return <WrappedComponent1 />
            } else {
                return <WrappedComponent2 />
            }
            // return (
            //     <div>
            //         <WrappedComponent1 /> 
            //         <WrappedComponent2 />
            //     </div>
            // );
        }
    }
}

export default withAuthenticate;