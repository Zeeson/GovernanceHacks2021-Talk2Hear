import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'
// image
// import thumb from '../images/thumbnail.png'

const ProjectDetails = (props) => {
const { project, auth } = props;
if (!auth.uid) return <Redirect to='/signin' />
if(project){
  return (
      <Container>
          <Proj className="card z-index-0">
            <div className="card-content">
              <Title> {project.title} </Title>
                <PostedBy>
                    <Author>  Posted by { project.authorFirstName } { project.authorLastName } </Author>
                  <Date> {moment(project.createdAt.toDate()).calendar()} </Date>
                </PostedBy>
              <ContainerImg>
                  <Img src={project.imageUrl ? project.imageUrl : null } alt="" />
              </ContainerImg>
              <p> { project.content } </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              
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
const ContainerImg =styled.div`
  width: 100%;
  height: 50%;
  overflow: hidden;
  border-radius: 6px;
  margin: 5vh 0;
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;
const Proj = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 75%;
  @media (max-width: 950px) {
  width: 95%;
        }
`;

const Title = styled.h3`
  font-size: 20pt;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 3vh;
  @media (max-width: 900px) {
    font-size: 16pt;
  }
`;
const PostedBy =styled.div`
display: flex;
align-items: center;
font-size: 8pt;
font-weight: 200;
margin-bottom: 3vh;
`;

const Date =styled.div`
font-size: 8pt;
color: var(--Color-14);
margin: 20px;
`;
const Author =styled.div`
font-size: 8pt;
color: var(--Color-14);
margin-right: 20px;
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