import React from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

// connect this component to d getFirestore
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const Dashboard = (props) => {
  // console.log(props);
  const { projects } = props
  return(
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return{
    // projects (object) is attached to the state (props) of the project (from rootReducer) and the initial states of the projectReducer
    projects: state.project.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Dashboard)
