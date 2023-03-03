import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",border:"1px solid black"}}>
      <div  style={{border:"0px solid red"}}>
      <h1>Book Management</h1>

      </div>
      <div style={{border:"0px solid red",width:"20%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <input placeholder='Search your books' type="text" style={{border:"2px solid black",width:"100%",height:"30%"}}/>
      </div>
      <div  style={{display:"flex",padding:"4px",justifyContent:"space-evenly",width:"20%",alignItems:"center"}}>
        
      <Link to="/">
        <button style={{backgroundColor:"tomato",padding:"4px"}}>Home</button>
      </Link>
      <Link to="/login">
        <button style={{backgroundColor:"tomato",padding:"4px"}}>Log In</button>
      </Link>
      </div>



    </div>
  )
}

export default Navbar