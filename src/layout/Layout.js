import { Outlet, Navigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    Avatar,
    Box,
    DialogActions,
    Button,
    DialogContentText
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useLoggedIn,useCurrentUser } from '../config/hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import {logOut} from '../redux/authSlice';

const Layout = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileDialogOpen, setProfileDialogOpen] = useState(false);
    const [confirmSignOutDialogOpen, setConfirmSignOutDialogOpen] = useState(false);

    const currentUser = useCurrentUser()
    const isLoggedIn = useLoggedIn();
    
    if (isLoggedIn === null) return <h3>Loading...</h3>;
    else if (isLoggedIn === false) return <Navigate replace to="/signIn" />
    
    


    return (
        <>
            <AppBar position='absolute'>
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>Home</Typography>
                    <IconButton size="large" color="inherit" onClick={(e) => {
                        setAnchorEl(e.currentTarget);
                    }}>
                        <AccountCircleIcon />
                    </IconButton>
                    <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => {
                        setAnchorEl(null);
                    }}>
                        <MenuItem onClick={() => {
                            setAnchorEl(null);
                            setProfileDialogOpen(true)
                        }}>Profile</MenuItem>
                        <MenuItem onClick={() => {
                            setConfirmSignOutDialogOpen(true);
                        }}>Sign Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Dialog open={profileDialogOpen} onClose={()=>{setProfileDialogOpen(false)}}>
                <DialogTitle>Profile</DialogTitle>
                <DialogContent dividers>
                    <Box display="flex" alignItems="center">
                        <Avatar />
                        <Box ml={3}>
                            <Typography>Email: {currentUser.email}</Typography>
                            <Typography>Hesap Açılış: {currentUser.metadata.creationTime}</Typography>
                            <Typography>Son başarılı giriş: {currentUser.metadata.lastSignInTime}</Typography>
                        </Box>
                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{setProfileDialogOpen(false)}}>Cancel</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={confirmSignOutDialogOpen} onClose={()=>{setConfirmSignOutDialogOpen(false)}}>
                <DialogContent>
                    <DialogContentText>Sign out from "{currentUser.email}"</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>{
                        setConfirmSignOutDialogOpen(false);
                        dispatch(logOut());
                    }}>Sign Out</Button>
                    <Button onClick={()=>{setConfirmSignOutDialogOpen(false)}}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Outlet />
        </>
    );
};
export default Layout;