import React from 'react'
import moment from 'moment'
import styled from 'styled-components';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <Div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <Heading className="card-title">Happening now</Heading>
          <OnlineUsers className="online-users">
            {notifications &&
              notifications.map((item) => {
                return (
                  <List key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <Date className="note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </Date>
                  </List>
                );
              })}
          </OnlineUsers>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.div`
  background: transparent;

  @media (max-width: 900px) {
   display: none;
  }
`;
const Heading =styled.span`
  margin-bottom: 5vh;
  font-weight: 500 !important;
`;
const OnlineUsers =styled.ul`
  padding: 5%;
  box-shadow: 0 2px 3px #00000018;
  border-radius: 10px;

`;
const List =styled.li`
  padding: 5%;
`;
const Date =styled.div`
color:var(--Color-14);  
float: right;
font-size: 10pt;
`;


export default Notifications
