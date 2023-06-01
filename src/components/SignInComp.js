import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeEMail,changePassword, logIn} from '../redux/authSlice';
import {TextField, Button, Box,Link, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const SignIn = () =>{
    const dispatch = useDispatch();
    const email = useSelector(state=>state.auth.email);
    const password = useSelector(state=>state.auth.password);
    const isLoading = useSelector(state=>state.auth.loading);

    const handleEmailChange = (e) =>{
        dispatch(changeEMail(e.currentTarget.value));
    }
    const handlePasswordChange = (e) =>{
        dispatch(changePassword(e.currentTarget.value));
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(logIn({email,password}));
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <Typography variant="h5"sx={{textAlign:"center"}}>Sign In</Typography>
            <TextField
            fullWidth
            sx={{mt:1}} 
            label="Email Address"
            type="email"
            autoComplete="email"
            variant="standard"
            autoFocus
            required
            value={email}
            onChange={handleEmailChange}
            />
            <TextField
            fullWidth
            sx={{mt:2}} 
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            required
            value={password}
            onChange={handlePasswordChange}
            />
            <Button fullWidth sx={{mt:3}} 
            type='submit' 
            variant="contained" 
            color="success"
            disabled = {isLoading}
            >{isLoading ? "Loading..." : "Sign In"}
            </Button>
            <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
                <Link sx={{mt: 2}} component={RouterLink} to="../signUp">Don't have a account? Sign Up</Link>
            </Box>
        </form>
        </>
    );
};
export default SignIn;