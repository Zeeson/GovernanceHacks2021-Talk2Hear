import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { RiCoinsFill } from 'react-icons/ri'
// image
import thumb from '../images/thumbnail.png'

const SpendingSummary = ({spending}) => {
  return (
    <Card>
    <CardImg>
        <Img src={ spending.photoUrl ? spending.photoUrl : thumb } alt="" />
    </CardImg>
      <CardContent className="card-content grey-text text-darken-3">
        <Title>
          <span>{spending.title}</span>
        </Title>
        <Body>Posted by {spending.ananymous} </Body>
        <Date className="grey-text">{moment(spending.createdAt.toDate()).calendar()}</Date>
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
  max-width: 450px;
  padding: 15px 15px;
  position: relative;
  background: #fff;
  font-family: "Josefin Sans", sans-serif;
`;

const CardImg = styled.div`
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

// const Title =styled.div`
// span{
//   text-transform: capitalize;
// font-size: 11pt;
// margin-bottom: 30px;
// color: var(--Color-12);
// }
// overflow: hidden;
// height: 20px;
// `

/* overflow: hidden; */
const Title = styled.div`
  span {
    text-transform: capitalize;
    font-size: 16pt;
    font-weight: 700;
    margin-bottom: 30px;
    color: var(--Color-12);

    @media (max-width: 900px) {
      font-size: 14pt;
      font-weight: 400;
    }
  }
  overflow: hidden;
  height: 30px;
  overflow: hidden;
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


export default SpendingSummary
