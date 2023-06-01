import React,{useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import Home from './components/Home';
import Admin from './components/Admin';
import SignIn from './components/SignInComp';
import SignUp from './components/SignUpComp';
import AuthLayout from './layout/AuthLayout';
import Layout from './layout/Layout';
import { Provider } from 'react-redux';
import {store} from './redux';
import './App.css';


function App() {
  useEffect(()=>{
  },[])
  return (
      <Provider store={store}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Route>
          <Route element={<AuthLayout/>}>
            <Route path="/signIn" element={<SignIn/>}></Route>
            <Route path="/signUp" element={<SignUp/>}></Route> 
          </Route>
        </Routes>
      </Provider>
  );
}

export default App;
