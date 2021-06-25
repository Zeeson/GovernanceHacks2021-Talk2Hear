import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import SpendingList from '../spending/SpendingList'
import { connect } from 'react-redux'
import styled from 'styled-components'

// connect this component to d getFirestore
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Dashboard = (props) => {
  // console.log(props);
  const { projects, spendings, auth, notifications  } = props
  if (!auth.uid) return <Redirect to='/signin' />
  return(
    <Dash className="dashboard container">
      <div className="row">
        <div className="col s4 m4">
          <h5> Spending Reports</h5>
          <SpendingList spendings={spendings} />
        </div>
        <div className="col s4 m4">
        <h5> Daily Reports</h5>
          <ProjectList projects={projects} />
        </div>
        <div className="col s4 m3 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </Dash>
  )
}

const Dash = styled.div`
margin-top: 15vh;
`;


const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    spendings: state.firestore.ordered.spendings,
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
      { collection: 'spendings', orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 5, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
