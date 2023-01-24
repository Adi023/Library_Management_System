import React, { useEffect } from 'react'
import { useState } from 'react'
import AdminHome from './AdminHome';
import './style.css'

export default function Viewbook() {

  const [searchTerm, setSearchTerm] = useState("")
  
  const [data, setData] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:8001/search")
      .then(response => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
  }, [])

  return (
    <>  <AdminHome></AdminHome>


    <div id='d'>
    
      <h1>Searchbook</h1>
      <div >

        <input type="text" placeholder='Enter Book Name or ISBN or Auther Name' onChange={event => { setSearchTerm(event.target.value) }} />

      </div> <br />
      <table border={3} align="center">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {(data.filter((d) => {
            if (searchTerm === "") {
              return d
            }
            else if (d.ISBN.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return d
            }
            else if (d.bname.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return d
            }
            else if (d.aname.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return d
            }
            else if (d.price.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return d
            }

          }).map((d) => (
            <tr key={d.ISBN}>
              <td>{d.ISBN}</td>
              <td>{d.bname}</td>
              <td>{d.aname}</td>
              <td>{d.price}</td>
              <td>{d.qty}</td>
            </tr>
            )
            ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
