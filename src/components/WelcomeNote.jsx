import React from 'react'
import styled from 'styled-components'

const WelcomeNote = () => {
  return (
    <Card>
         Welcome to Talk2Hear, Sign In and share your first post!
    </Card>
  )
}

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  box-shadow: 0 2px 3px #00000024;
  margin-bottom: 5vh;
  max-width: 450px;
  padding: 15px 15px;
  position: relative;
  background: #fff;
  font-family: "Josefin Sans", sans-serif;
`;

export default WelcomeNote