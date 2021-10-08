import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../redux/actions/authActions'
import { Link } from "react-router-dom";
import CreateProject from '../projects/CreateProject';









// Navbar component
const SignedInLinks = (props) => {

useEffect(() => {
  $('.modal').modal({
    dismissible: true, 
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { 
      alert("Ready");
      console.log(modal, trigger);
    },
    complete: function() { alert('Closed'); } 
  });
}, [])

  
  return(
    <ul className="right">
      <CreateProject />
      <li><a className="waves-effect waves-light modal-trigger" href="#modal1">New Report</a></li>
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
