import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeName,changeEMail,changePassword, register} from '../redux/authSlice';
import {TextField, Button, Box,Link, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

const SignUp = () =>{
    const dispatch = useDispatch();
    const name = useSelector(state=>state.auth.name);
    const email = useSelector(state=>state.auth.email);
    const password = useSelector(state=>state.auth.password);
    const isLoading = useSelector(state=>state.auth.loading);
    
    const handleNameChange = (e) =>{
        dispatch(changeName(e.currentTarget.value));
    }
    const handleEmailChange = (e) =>{
        dispatch(changeEMail(e.currentTarget.value));
    }
    const handlePasswordChange = (e) =>{
        dispatch(changePassword(e.currentTarget.value));
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(register({name,email,password}));
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{textAlign:"center"}}>Sign Up</Typography>
            <TextField
            fullWidth
            sx={{mt:1}} 
            label="Full Name"
            type="text"
            autoComplete="name"
            variant="standard"
            autoFocus
            required
            value={name}
            onChange={handleNameChange}
            />
            <TextField
            fullWidth
            sx={{mt:2}} 
            label="Email Address"
            type="email"
            autoComplete="email"
            variant="standard"
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
            >{isLoading ? "Loading..." : "Sign Up"}
            </Button>
            <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                <Link sx={{mt: 2}} component={RouterLink} to="../signIn">Already have an account? Sign In</Link>
            </Box>
            </form>
        </>
    );
};
export default SignUp;