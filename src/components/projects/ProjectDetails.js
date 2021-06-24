import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'


const ProjectDetails = (props) => {
const { project, auth } = props;
if (!auth.uid) return <Redirect to='/signin' />
if(project){
  return (
      <Container>
          <Proj className="card z-index-0">
            <div className="card-content">
              <Title className="card-title"> {project.title} </Title>
              <p> { project.content } </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>  Posted by { project.authorFirstName } { project.authorLastName } </div>
              <div> {moment(project.createdAt.toDate()).calendar()} </div>
            </div>
          </Proj>
      </Container>
  )
} else {
  return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
}

}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
margin-top: 15vh;
`;
const Proj = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 75%;
  @media (max-width: 950px) {

  width: 95%;
        }
`;

const Title =styled.span`
text-transform: capitalize;
font-size: 20pt;
margin-bottom: 3vh;
`;

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
