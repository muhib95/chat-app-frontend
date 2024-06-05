import React from 'react';
import "./login.css"
import { Button, TextField } from '@mui/material';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='image-container'>
                <img className='login-image' src='/assets/377687.png' alt='login'></img>

            </div>
            <div className='sign-container'>
                <p>Log in to your account</p>
            <TextField id="standard-basic" label="Enter user name" variant="outlined" />
            <TextField id="outed-pass" label="Password" type='password' autoComplete='current-password' variant="outlined"/>
            <Button variant="outlined">Login</Button>
            </div>
        </div>
    );
};

export default Login;