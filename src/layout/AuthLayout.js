import {Outlet,Navigate} from 'react-router-dom';
import {useLoggedIn} from '../config/hooks';
import {useSelector} from 'react-redux';
import {Container,Avatar,Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const AuthLayout = () =>{
    const isLoggedIn = useLoggedIn();
    const error = useSelector(state=>state.auth.error);

    if(isLoggedIn === null) return <h3>Loading...</h3>;
    else if(isLoggedIn === true) return <Navigate replace to="/"/>
    
    return(
        <div className="Form">
        <Container maxWidth="xs" sx={{mt: 20}}>
        <Avatar sx={{mx: "auto", bgcolor:"secondary.main"}}>
            <LockOutlinedIcon/>
        </Avatar>
        {error && (<Typography sx={{textAlign:"center", color: "error.main"}}>{error}</Typography>)}
            
        <Outlet/>
        </Container>
        </div>
    ) 
}
export default AuthLayout;