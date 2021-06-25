import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Navbar component
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  const [toggle, setToggle] = useState(false)



  return(
    <Nav className="nav-wrapper grey darken-3">

        <Link to="/" className="logo">Talk2Hear</Link>

        <Toggle className={toggle ? 'active' : ''} onClick={() => setToggle(!toggle)}>
                <Bar id='bar-1'></Bar>
                <Bar id='bar-2'></Bar>
                <Bar id='bar-3'></Bar>
        </Toggle>

        <Menu className={toggle ? 'menu-active' : ''}>
          { links }
        </Menu>

    </Nav>
  )
}


const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding:  0 7%;
    position:  fixed;
    top: 0;
    width: 100%;
    z-index: 999;

    .logo {
      font-size: 20pt;
      color: #fff;
    }
`;



const Toggle = styled.div`
        width: 40px;
        height: 35px;
        position: relative;
        display: none;

        @media (max-width: 680px) {
          display: block;
        }


        &.active #bar-1 {
            transform: translateY(15px) rotate(225deg);
            width: 100%;
        }

        &.active #bar-2 {
            transform: translateY(15px);
            opacity: 0;
        }
        &.active #bar-3 {
            transform: translateY(15px) rotate(-225deg);
            width: 100%;
            right: 0;
        }
`;

const Bar = styled.div`
        width: 100%;
        height: 5px;
        background: #fff;
        border-radius: 20%;
        position: absolute;
        transition: all .5s;

        &#bar-1 {
            width: 50%;
        }
        &#bar-2 {
            transform: translateY(15px);
        }
        &#bar-3 {
            transform: translateY(30px);
            width: 50%;
            right: 0;
        }


`;

const Menu = styled.div`



  ul li {
    display: inline-block;
    margin-left: 20px;
    a {
      color: #fff;
    }

  }

  @media (max-width: 680px) {
          position: absolute;
          top: 10vh;
          right: -300px;
          background: #464546;
          padding: 20px;
          transition: all .5s;

          &.menu-active {
            right: 0;
          }

          ul li {
    display: block;
    margin: 20px 0;
    a {
      color: #fff;
      font-size: 17pt;
    }

  }
        }
`;


const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
