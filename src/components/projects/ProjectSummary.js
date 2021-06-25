import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { RiCoinsLine, RiCoinsFill } from 'react-icons/ri'
import { GiCoins } from 'react-icons/gi'
// image
import thumb from '../images/thumbnail.png'

const ProjectSummary = ({project}) => {
  return (
    <Card>
      <CardImg>
          <Img src={ project.imageUrl ? project.imageUrl : thumb } alt="" />
      </CardImg>
      <CardContent className="card-content grey-text text-darken-3">
        <Title>
          <span>{project.title}</span>
        </Title>
        <Body>Posted by {project.authorFirstName} {project.authorLastName}</Body>
        <Date>{moment(project.createdAt.toDate()).calendar()}</Date>
        <Reward> 3 <RiCoinsFill/></Reward>
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
  padding: 15px 15px;
  position: relative;
`;

const CardImg =styled.div`
  margin-right: 2vw;
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 6px;
`;
const CardContent =styled.div`

`;
const Img =styled.img`
width: 100%;
height: 100%;

`;
const Title =styled.div`
span{
  text-transform: capitalize;
font-size: 11pt;
margin-bottom: 30px;
color: var(--Color-12);
}
overflow: hidden;
height: 20px;
/* overflow: hidden; */
`;
const Body =styled.p`
font-size: 10pt;
margin-top: 10px;
color: var(--Color-14);

@media (max-width: 950px) {
  font-size: 8pt;
  margin-bottom: 5px;
}

`;
const Date =styled.p`
font-size: 8pt;
color: var(--Color-14);
`;
const Reward =styled.p`
font-size: 10pt;
color: var(--Color-11);
position: absolute;
bottom: 10%;
right: 5%;
@media (max-width: 950px) {
  bottom: 8%;
}
`;
// const CardContent =styled.div`

// `;


export default ProjectSummary
