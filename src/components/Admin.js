import { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

import { useProductsListener } from '../config/firebase';
import { useSelector } from "react-redux";

const Admin = () => {
    
    useProductsListener();
    const [isAdmin, setIsAdmin] = useState("kubraselcuk-25@hotmail.com");
    const [user, setUser] = useState([]);
    // const products = useProductsListener();
    const products = useSelector((state) => state.products.product);
    useEffect(() => {
        onAuthStateChanged(auth, (users) => {
            console.log(users)
            setUser(users);
        });
    }, [])
    return (
        <>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            {
                (user.email === isAdmin) ?
                    (
                        <>
                            
                            {products.map((product)=>(
                                <Card sx={{ maxWidth: 345 }} className='card'>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={product.nameSurname}
                                />
                                <CardContent>   
                                    <Typography variant="body2" color="text.secondary">
                                        Email: {product.emailAddress}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Phone Number: {product.phoneNumber}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        University: {product.university}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Department: {product.department}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Degree: {product.degree}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Last Work: {product.lastWork}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Last Work Description: {product.lastWorkDescription}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                        <Link to={product.github} className='links'>Github</Link>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                        <Link to={product.linkedin} className='links'>Linkedin</Link>
                                    </IconButton>

                                </CardActions>

                            </Card>
                            ))}
                            

                        </>
                    )

                    : <div>Cv'leri yalnızca admin görüntüleyebilir</div>
            }
        </>
    )
}
export default Admin;