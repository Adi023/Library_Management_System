import React, { Component } from 'react'


// import Updatebook from './Updatebook';
import pic from "./logo1.png";
import side from "./sidlybrary.jpg"
import './style.css'

export default class AdminHome extends Component {
  render() {
    return (
        <>  
          <nav>
          <div id='h' >
          <ul>
           <img id='img' src={pic} alt={"Not FOund"}/>
           <li><a href='AdminHome'>Home</a></li> 
           <li><a href='Addbook'>Add Book</a></li> 
            <li><a href="Deletebook">Delete Book</a> </li>
           <li> <a href="Viewbook">Update Book</a></li>
            <li><a href="Searchbook">Search Book</a></li>
            <li><a href="Viewonly">View All Books</a></li>
            <li><a href='/'>logout</a></li>
            <h2>Admin Home</h2>
            <h2 id='a'>Library Management System </h2>
          </ul>  
          </div>
          </nav>

        <div style={{display:"flex",backgroundColor:"#e48b33",height:"auto",width:"250px",marginTop:"70px"}}>
        
         <img src={side} alt={"Welcome Admin"}></img>

        </div>

      </>
    )
  }
}
