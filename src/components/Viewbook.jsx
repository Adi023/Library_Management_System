import React,{ useEffect } from 'react'
import { useState } from 'react'
import AdminHome from './AdminHome';


import './style.css'

export default function Viewbook(props) {
  const[data,setData]=useState([]);
   

 useEffect(()=>
   {
       fetch("http://localhost:8001/view")
       .then(response=>response.json())
       .then((result)=>
       {
         console.log(result)
          setData(result)
       })
   },[])
  
  return (
    <><AdminHome></AdminHome>
    
    
    <div id='d'>
        <h1>Viewbook</h1>
        <table border={3} align="center">
                <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Upadate Book</th>
                        </tr>
                </thead>
                <tbody>
                        {data.map((d)=>
                        (
                          <tr key={d.ISBN}>

                            <td>{d.ISBN}</td>
                            <td>{d.bname}</td>
                            <td>{d.aname}</td>
                            <td>{d.price}</td>
                            <td>{d.qty}</td>
                            <td><a href={'Updatebook/'+d.ISBN}>Edit</a></td>  
                          </tr>
                        )
                        )}
                </tbody>
            </table>   
    </div>
    </>
  )
}
