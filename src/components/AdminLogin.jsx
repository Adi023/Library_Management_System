
import React from 'react'
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';
// import AdminHome from './AdminHome';

import './style.css'

export default function AdminLogin() {
    let navigate=useNavigate();

    const{register,handleSubmit}=useForm();
    const sendData=(e)=>
    {
       
        navigate('/AdminHome');
    }

  return (
    <>
    <div id='head'>
      
       <h2 style={{border:'solid #e48b33',padding:"10px",borderRadius:"15px"}} >
         Library Management System</h2>
    </div>
    <div id='login'>
        <h1   >Admin Login</h1>
        <form  onSubmit={handleSubmit(sendData)}>
           <label  >Admin ID :</label> <input type='text' {...register('adminid')} placeholder={"Enter ID"}/><br/><br/>
           <label  >Password :</label> <input type='text' {...register('apass')} placeholder={"Enter Password"}/><br/><br/>
           <label></label> <button type='submit'>Login</button><br/><br/>
        </form>
    </div>
    </>
  )
}
