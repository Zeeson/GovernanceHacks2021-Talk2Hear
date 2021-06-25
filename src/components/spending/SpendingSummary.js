import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
// image
import thumb from '../images/thumbnail.png'

const SpendingSummary = ({spending}) => {
  return (
    <Card>
    <CardImg>
        <Img src={ spending.imageUrl ? spending.imageUrl : thumb } alt="" />
    </CardImg>
      <CardContent className="card-content grey-text text-darken-3">
        <Title>{spending.title}</Title>
        <Body>Posted by {spending.ananymous} </Body>
        <Date className="grey-text">{moment(spending.createdAt.toDate()).calendar()}</Date>
        <Reward> 3 points earned </Reward>
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

const Img =styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const CardContent =styled.div`

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
font-size: 10pt;
`;
const Reward =styled.p`
font-size: 8pt;
`;
// const CardContent =styled.div`

// `;


export default SpendingSummary
