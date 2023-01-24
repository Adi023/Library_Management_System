import React, { Component, useEffect } from 'react'
import axios from 'axios';
import {useState} from 'react'
import {useForm } from 'react-hook-form' 
import { BrowserRouter as Router,Routes, Route, useNavigate} from 'react-router-dom';
import { useParams } from "react-router-dom";
import AdminHome from './AdminHome';


export default function Updatebook(props) {
  const navigate = useNavigate() 
  const param = useParams()

  const {register,handleSubmit,reset, formState:{errors}} =useForm({mode:'onBlur'});
  const [data,setData]=useState([])

  const onSubmit = d =>
   { 
      axios.post('http://localhost:8001/update/',{d})
     .then((response) => {  console.log("aaaa"+ d )})
     .catch(err=>alert(err.response.data) )
  };    
  
  useEffect(()=>
    {
    //  console.log(data[0].ISBN)
      fetch('http://localhost:8001/edit/'+param.ISBN)
      .then((response) => response.json())
			.then((result) =>     { setData(result[0])   }) 
      // reset({data})
    },[])

  return (
    <>
     <AdminHome></AdminHome>
    <div id='d'>
     
      <h1>Updatebook</h1>

<form onSubmit={handleSubmit(onSubmit)}>
       <label>ISBN :</label>
       <input type="text"  {...register('ISBN',{required:"this is required"})} defaultValue={data.ISBN} placeholder={data.ISBN}></input><br/>
       {errors.ISBN && <p>      {errors.ISBN.message}   </p>  }
       <label>Book Name :</label>
       <input type="text"  {...register('bname',{required:true})} placeholder={data.bname}></input><br/>
       <label>Auther Name :</label>
       <input type="text" {...register('aname',{required:true})} placeholder={data.aname}></input><br/>
       <label>Price :</label>
       <input type="text" {...register('price',{required:true})} placeholder={data.price}></input><br/>
       <label>Quntity :</label>
       <input type="text"  {...register('qty',{required:true})} placeholder={data.qty}></input><br/>
       
       <label></label><button type="submit">Submit</button><br/>
       <label></label>
       <button onClick={()=>navigate(-1)}>Go back</button>
</form>

    </div>
</>
  )
}



