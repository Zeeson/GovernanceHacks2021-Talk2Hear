import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'
import { Link } from "react-router-dom";









// Navbar component
const SignedInLinks = (props) => {



  
  return(
    <ul className="right">
      <li> <NavLink to="/create">New Report</NavLink></li>
      <li> <NavLink to="/spending/form">Spending Report</NavLink></li>
      <li><Link onClick={props.signOut}>Log Out</Link></li>
      <li> <NavLink to="/" className="btn btn-floating pink lighten-1">{ props.profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
