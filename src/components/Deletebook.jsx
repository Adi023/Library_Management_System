import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import './style.css'
import AdminHome from './AdminHome'

export default function Deletebook() {
  const{register,handleSubmit}=useForm()

  const [data, setData] = useState("")

  const sendData=(a)=>{
    setData(JSON.stringify(a))
    axios.post("http://localhost:8001/delete",{a})
    console.log(JSON.stringify(a))
    alert("Book Information Deleted succesfully")
  }

  return (
    <> <AdminHome></AdminHome>
    <div id='d'>
     
      <form onSubmit={handleSubmit(sendData)}>
       <h1>Deletebook</h1> 
        <label >Enter ISBN Number :</label> 
        <input type="text"  {...register('ISBN')} placeholder="Enter ISBN for Delete Book"/><br/>
        <label></label><button type="submit">Submit</button><button type="reset">Reset</button><br/><br/>
        </form>
        <h1> The Book Information Of {data} is Deleted</h1>
    </div>
    </>
  )
}
