import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'
import thumb from '../images/thumbnail.png'

const SpendingDetails = (props) => {
const { spending, auth } = props;
if (!auth.uid) return <Redirect to='/signin' />
if(spending){
  return (
      <Container>
          <Proj className="card z-index-0">
            <div className="card-content">
              <Title className="card-title"> {spending.title} </Title>
              <PostedBy>
                    <Author>  Posted by { spending.ananymous }  </Author>
                  <Date> {moment(spending.createdAt.toDate()).calendar()}</Date>
                </PostedBy>
              <CardImg>
                  <Img src={ spending.photoUrl ? spending.photoUrl : thumb } alt="" />
              </CardImg>
              <p> { spending.content } </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              
            </div>
          </Proj>
      </Container>
  )
} else {
  return (
      <div className="container center">
        <p>Loading ...</p>
      </div>
    )
}

}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
`;


const CardImg =styled.div`
  margin-right: 2vw;
  width: 160px;
  height: 160px;
  overflow: hidden;
  border-radius: 6px;
`;

const Img =styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Proj = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 75%;
`;

const Title =styled.span`
text-transform: capitalize;
font-size: 20pt;
margin-bottom: 3vh;
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
  const spendings = state.firestore.data.spendings;
  const spending = spendings ? spendings[id] : null
  return {
    spending: spending,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'spendings'
  }])
)(SpendingDetails)
