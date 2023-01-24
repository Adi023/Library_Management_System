import React from 'react'
import './style.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import AdminHome from './AdminHome'

export default function Addbook() {

    const{register,handleSubmit}=useForm()
    const sendData=(e)=>
    {
        // console.log(e);
        axios.post("http://localhost:8001/add",{e})
        alert("Data Inserted Succesfully")
    }
  return (
    <>
     <AdminHome></AdminHome>
    
    <div id='d'>
     
        <h1>Addbook</h1>
    <form onSubmit={handleSubmit(sendData)} >
       <label>ISBN :</label>
       <input type="text"  {...register('ISBN')} placeholder={"ISBN"}></input><br/>

       <label>Book Name :</label>
       <input type="text"  {...register('bname')} placeholder={"Book Name"}></input><br/>

       <label>Auther Name :</label>
       <input type="text" {...register('aname')} placeholder={"Auther Name"}></input><br/>

       <label>Price :</label>
       <input type="text" {...register('price')} placeholder={"Price"}></input><br/>

       <label>Quntity :</label>
       <input type="text"  {...register('qty')} placeholder={"Quntity"}></input><br/>
       
       <label></label><button type="submit" >Submit</button><button type="reset">Reset</button><br/>
       <label></label>
    </form>
    </div>
    </>
  )
}
