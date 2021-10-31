import React, { Component } from 'react'
import Login from '../../components/sign-in/SignIn';

class AuthPage extends Component {

    render() {
        return (
            <div className='auth'>
                <Login handleUser={this.props.handleUser} />
            </div>
        )
    }
}

export default AuthPage;

