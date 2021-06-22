import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

// connect this component to d getFirestore
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
  // console.log(props);
  const { projects, auth, notifications  } = props
  if (!auth.uid) return <Redirect to='/signin' />
  return(
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

// const mapStateToProps = (state) => {
//   return{
//     // projects (object) is attached to the state (props) of the project (from rootReducer) and the initial states of the projectReducer
//     // Dummy data
//     // projects: state.project.projects
//       // from firestore
//     projects: state.firestore.ordered.projects,
//     auth: state.firebase.auth,
//     notifications: state.firestore.ordered.notifications
//   }
// }

// function mapStateToProps(state){
//   return{
//     // projects (object) is attached to the state (props) of the project (from rootReducer) and the initial states of the projectReducer
//     projects: state.project.projects
//   }
// }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      { collection: 'projects', orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
