import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../images/img.png'

class SignIn extends Component {
state = {
    email: '',
    password: ''
  }

handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  
render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <>
      <HeadText> 
          <h3>Welcome to Talk2Hear</h3>
           <p>Sign In and share your first report!</p>    
      </HeadText>
      <Container>
        <Wrapper>
          
          <Form onSubmit={this.handleSubmit} className="white">
            <H5> Sign In</H5>
            <div className="input-field">
              <label htmlFor="email"> Email </label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-index-0">Login</button>
              <div className="center red-text">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
            <div className="signup">
              <p>Don't have an Account? <Link to="/signup">Create New Account</Link></p>
            </div>
            
          </Form>
          <ImageBox>
            <Img src={img} alt="" />
          </ImageBox>
        </Wrapper>
      </Container>
      </>
    );
  }
}

// styles

const HeadText = styled.div`
margin-top: 100px; 
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  p{
    font-weight: bold;
  }
  h3{
    font-weight: bold;
  }
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70vh;
`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 60% auto;
width: 75%;
height: 60vh;
border-radius: 20px;
box-shadow: 0 2px 5px rgba(0,0,0,0.3);
overflow: hidden;

        @media (max-width: 950px) {
  grid-template-columns: 1fr;
  width: 85%;
  height: auto;
        }

`;


const H5 = styled.h5`
color: #2d5bda;
margin-bottom: 30px;
`;
const Form = styled.form`
padding: 5%;
`;
const ImageBox = styled.div`
width: 100%;
height: 100%;

@media (max-width: 950px) {
          display: none;
        }
`;
const Img = styled.img`
width: 100%;
height: 100%;
`;



const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
