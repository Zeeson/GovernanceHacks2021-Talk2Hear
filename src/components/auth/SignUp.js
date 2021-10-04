import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../redux/actions/authActions'
import styled from 'styled-components'
import img from '../images/img.png'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <Container>
        <Wrapper>
          <ImageBox>
            <Img src={img} alt="" />
          </ImageBox>
          <Form className="white" onSubmit={this.handleSubmit}>
            <H5>Sign Up</H5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
              <div className="center red-text">
                {authError ? <p>{authError}</p> : null}
              </div>
            </div>
            <div className="signup">
              <p>
              Already  have an Account?{" "}
                <Link to="/signin">Login</Link>
              </p>
            </div>
          </Form>
        </Wrapper>
      </Container>
    );
  }
}


// styles

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;

`;

const Wrapper = styled.div`
display: grid;
grid-template-columns: auto 60%;
width: 75%;
height: 75vh;
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
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SignUp)
