import React from 'react'
import moment from 'moment'
import styled from 'styled-components';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <Heading className="card-title">Happening now</Heading>
          <OnlineUsers className="online-users">
            { notifications && notifications.map(item =>{
              return <List key={item.id}>
                <span className="pink-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </List>
            })}
          </OnlineUsers>
        </div>
      </div>
    </div>
  )
}

const Heading =styled.span`
  margin-bottom: 5vh;
`;
const OnlineUsers =styled.ul`
  padding: 5%;
  box-shadow: 0 2px 3px #00000018;
  border-radius: 10px;
`;
const List =styled.li`
  padding: 5%;
`;


export default Notifications
