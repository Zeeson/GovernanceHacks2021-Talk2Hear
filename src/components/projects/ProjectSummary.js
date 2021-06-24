import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
// image 
import thumb from '../images/thumbnail.png'

const ProjectSummary = ({project}) => {
  return (
    <Card>
      <CardImg>
          <Img src={thumb} alt="" />
      </CardImg>
      <CardContent className="card-content grey-text text-darken-3">
        <Title>{project.title}</Title>
        <Body>Posted by {project.authorFirstName} {project.authorLastName}</Body>
        <Date className="grey-text">{moment(project.createdAt.toDate()).calendar()}</Date>
      </CardContent>
    </Card>
  )
}

const Card =styled.div`
display: flex;
align-items: center;
  border-radius: 10px;
  box-shadow: 0 2px 3px #00000024;
  margin-bottom: 5vh;
  padding: 30px 25px;
`;

const CardImg =styled.div`
  margin-right: 2vw;
  width: 100px;
  height: 100px;
  overflow; hidden;
`;
const CardContent =styled.div`

`;
const Img =styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Title =styled.span`
text-transform: capitalize;
font-size: 17pt;
margin-bottom: 3vh;
`;
const Body =styled.p`
font-size: 12pt;

`;
const Date =styled.p`
font-size: 10pt;
`;
// const CardContent =styled.div`

// `;


export default ProjectSummary
