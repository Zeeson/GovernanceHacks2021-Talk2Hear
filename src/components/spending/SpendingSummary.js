import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const SpendingSummary = ({spending}) => {
  return (
    <Card>
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
  border-radius: 10px;
  box-shadow: 0 2px 3px #00000024;
  margin-bottom: 5vh;
  padding: 30px 25px;
`;

const CardContent =styled.div`

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
const Reward =styled.p`
font-size: 8pt;
`;
// const CardContent =styled.div`

// `;


export default SpendingSummary
