import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../auth-page/auth-page-style.css'
import { TextField, Button } from '@mui/material';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            phoneNumber: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('https://arcane-taiga-18190.herokuapp.com/api/user/signup', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='auth'>
                <div className='container'>
                    <div className='welcome'>
                        <h2>Sign up</h2>
                        <p>Create your account</p>
                    </div>
                    <div className='auth-form-container'>
                        <form onSubmit={this.handleSubmit} className='auth-form'>
                            <div className='input-wrapper'>
                                <TextField id="outlined-basic" variant="outlined" key={1}
                                    fullWidth
                                    name='name' 
                                    type='text' 
                                    value={this.state.name} 
                                    onChange={this.handleChange}
                                    label="Name"
                                    required
                                />
                            </div>
                            <div className='input-wrapper'>
                                <TextField id="outlined-basic" variant="outlined" key={3}
                                    fullWidth
                                    name='email' 
                                    type='text' 
                                    value={this.state.email} 
                                    onChange={this.handleChange}
                                    label="Email"
                                    required
                                />
                            </div>
                            <div className='input-wrapper'>
                                <TextField id="outlined-basic" variant="outlined" key={6}
                                    fullWidth
                                    name='password' 
                                    type='password' 
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                    label='Password'
                                    required
                                />
                            </div>
                            {/* <div className='input-wrapper'>
                                <TextField id="outlined-basic" variant="outlined" key={8}
                                    fullWidth
                                    name='confirmPassword' 
                                    type='password' 
                                    value={this.state.confirmPassword} 
                                    onChange={this.handleChange}
                                    label='Confirm Password'
                                    required
                                />
                            </div> */}
                            <div className='input-wrapper'>
                                <TextField id="outlined-basic" variant="outlined" key={1}
                                    fullWidth
                                    name='phoneNumber' 
                                    type='text' 
                                    value={this.state.phoneNumber} 
                                    onChange={this.handleChange}
                                    label="Phone Number"
                                    required
                                />
                            </div>
                            <div className='btn-wrapper'>
                                <Button variant="contained" onClick={this.handleSubmit} 
                                    sx={{backgroundColor: '#277ab6'}}
                                    fullWidth
                                    size='large'
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className='link-to-auth'>
                        <Link to='/auth/'>
                            <p>Already have an account?</p>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupPage;

