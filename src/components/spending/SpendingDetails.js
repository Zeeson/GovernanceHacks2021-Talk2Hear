import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'

const SpendingDetails = (props) => {
const { spending, auth } = props;
if (!auth.uid) return <Redirect to='/signin' />
if(spending){
  return (
      <Container>
          <Proj className="card z-index-0">
            <div className="card-content">
              <Title className="card-title"> {spending.title} </Title>
              <p> { spending.content } </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>  Posted by { spending.ananymous } </div>
              <div> {moment(spending.createdAt.toDate()).calendar()} </div>
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
