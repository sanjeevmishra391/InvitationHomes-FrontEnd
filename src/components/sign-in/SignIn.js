import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './sign-in-style.css'
import { TextField, Button } from '@mui/material';

const loginUser = (credentials) => {
    return fetch('https://arcane-taiga-18190.herokuapp.com/api/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then((res) => res.json())
    .catch(err => err);
}

const Login = (props) => {
    const [email, UpdateEmail] = useState('');
    const [password, UpdatePassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();
        const data = await loginUser({email: email, password: password});
        console.log(data);
        props.handleUser(data);
    }

    return (
        <div className='container'>
            <div className='welcome'>
                <h2>Hi, Welcome Back</h2>
                <p>Login in to your account</p>
            </div>
            <div className='auth-form-container'>
                <form className='auth-form' onSubmit={handleSubmit}>
                    <div className='input-wrapper'>
                        <TextField id="outlined-basic" variant="outlined" key={3}
                            fullWidth
                            name='email' 
                            type='text' 
                            value={email} 
                            onChange={(event) => {
                                UpdateEmail(event.target.value)}}
                            label="Email"
                            required
                        />
                    </div>
                    <div className='input-wrapper'>
                        <TextField id="outlined-basic" variant="outlined" key={6}
                            fullWidth
                            name='password' 
                            type='password' 
                            value={password} 
                            onChange={(event) => {
                                UpdatePassword(event.target.value);
                            }}
                            label='Password'
                            required
                        />
                    </div>
                    <div className='btn-wrapper'>
                        <Button variant="contained" 
                            sx={{backgroundColor: '#277ab6'}}
                            fullWidth
                            size='large'
                            type='submit'
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
            <div className='link-to-auth'>
                <Link to='/auth/signup'>
                    <p>Don't have an account?</p>
                </Link>
            </div>
        </div>
    )
}

export default Login;

