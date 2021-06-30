import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component
{
     render()
     {
          return (<div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand" >Exercise Tracker</Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
                  
      <li className="nav-item active">
        <Link to="/" className="nav-link" >Exercises </Link>
      </li>
                  
      <li className="nav-item active">
        <Link to="/create" className="nav-link" >Create Exercises </Link>
      </li>
                  
      <li className="nav-item active">
        <Link to="/user" className="nav-link" >Create User </Link>
      </li>
              
    </ul>
  </div>
</nav>
          </div>)
     }
}
export default Navbar