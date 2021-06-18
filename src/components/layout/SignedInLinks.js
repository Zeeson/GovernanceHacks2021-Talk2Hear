import React from 'react'
import { NavLink } from 'react-router-dom'

// Navbar component
const SignedInLinks = () => {
  return(
    <ul className="right">
      <li> <NavLink to="/create">New Post</NavLink></li>
      <li> <NavLink to="/">Log Out</NavLink></li>
      <li> <NavLink to="/" className="btn btn-floating pink lighten-1">Init</NavLink></li>
    </ul>

  )
}

export default SignedInLinks;
