import React from 'react'
import Login from '../../components/login/Login';

const AuthPage = (props) => {
    return (
        <div className='auth'>
            <Login handleUser={props.handleUser} />
        </div>
    )
}

export default AuthPage;

