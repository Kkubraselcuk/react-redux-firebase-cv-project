import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import { TextField, Button, Typography, Container,Alert } from '@mui/material';
import {
  changeProductNameSurname,
  changeProductEmailAddress,
  changeProductPhoneNumber,
  changeProductUniversity,
  changeProductDepartment,
  changeProductDegree,
  changeProductLastWork,
  changeProductLastWorkDescription,
  changeProductGithub,
  changeProductLinkedin

} from "../redux/productSlice";

function Home() {
  const [alert,setAlert]= useState(false);
  const nameSurname = useSelector(state=>state.products.nameSurname);
  const emailAddress = useSelector(state=>state.products.emailAddress);
  const phoneNumber = useSelector(state=>state.products.phoneNumber);
  const university = useSelector(state=>state.products.university);
  const department = useSelector(state=>state.products.department);
  const degree = useSelector(state=>state.products.degree);
  const lastWork = useSelector(state=>state.products.lastWork);
  const lastWorkDescription = useSelector(state=>state.products.lastWorkDescription);
  const github = useSelector(state=>state.products.github);
  const linkedin = useSelector(state=>state.products.linkedin);
  
  const dispatch = useDispatch();

  const handlechangeProductNameSurname = (e) => {
    dispatch(changeProductNameSurname(e.currentTarget.value));
  }
  const handleProductEmailAddress = (e) => {
    dispatch(changeProductEmailAddress(e.currentTarget.value));
  }
  const handleProductPhoneNumber = (e) => {
    dispatch(changeProductPhoneNumber(e.currentTarget.value));
  }
  const handlechangeProductUniversity = (e) => {
    dispatch(changeProductUniversity(e.currentTarget.value));
  }
  const handlechangeProductDepartment = (e) => {
    dispatch(changeProductDepartment(e.currentTarget.value));
  }
  const handlechangeProductDegree = (e) => {
    dispatch(changeProductDegree(e.currentTarget.value));
  }
  const handlechangeProductLastWork = (e) => {
    dispatch(changeProductLastWork(e.currentTarget.value));
  }
  const handlechangeProductLastWorkDescription = (e) => {
    dispatch(changeProductLastWorkDescription(e.currentTarget.value));
  }
  const handlechangeProductGithub = (e) => {
    dispatch(changeProductGithub(e.currentTarget.value));
  }
  const handlechangeProductLinkedin = (e) => {
    dispatch(changeProductLinkedin(e.currentTarget.value));
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    addProduct(nameSurname,emailAddress,phoneNumber,university,department,degree,lastWork,lastWorkDescription,github,linkedin);
    setAlert(true);
  }


  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 10 }}>
      {alert ? <Alert severity="success">Cv Kaydınız Oluşturulmuştur!</Alert> : <></> }
        <form className='form'onSubmit={handleSubmit}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>Sign Up</Typography>
          <TextField fullWidth
            sx={{ mt: 1 }}
            label="Name Surname"
            type="text"
            autoComplete="name"
            variant="standard"
            autoFocus
            required
            onChange={handlechangeProductNameSurname}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Email Address"
            type="email"
            autoComplete="email"
            variant="standard"
            required
            onChange={handleProductEmailAddress}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Phone Number"
            type="text"
            autoComplete="5*********"
            variant="standard"
            required
            onChange={handleProductPhoneNumber}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="University"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductUniversity}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Department"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductDepartment}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Degree"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductDegree}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Last Work"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductLastWork}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Last Work Description"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductLastWorkDescription}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Github Address"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductGithub}
          />
          <TextField fullWidth
            sx={{ mt: 2 }}
            label="Linkedin Address"
            type="text"
            variant="standard"
            required
            onChange={handlechangeProductLinkedin}
          />

          <Button fullWidth sx={{ mt: 3 }}
            type='submit'
            variant="contained"
            color="success"

          >Kaydet
          </Button>
        </form>

        
      </Container>


    </>
  )
}

export default Home