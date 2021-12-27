import React from 'react'
import { ChatEngine } from 'react-chat-engine';
import { useSelector, useDispatch } from 'react-redux';

import ChatFeed from './ChatFeed';


const projectID = 'bad48f24-55e6-488f-aa75-9075b8aec45b';

const InboxElem = () => {
  const userType = useSelector(({ ui }) => ui.userType);
  const user = useSelector(({ ui }) => ui.profile.name);
  const userName = userType === 'student' ? 'Ratul' :'username2'
  const userSecret = userType === 'student' ? 'Ratul' :'password'

  return (
    <ChatEngine
      height="85vh"
      projectID={projectID}
    //   userName={localStorage.getItem('username')}
    //   userSecret={localStorage.getItem('password')}

      // userName = {userType === 'student' ? 'Akbar' :'Rakib'}
      // userSecret = {userType === 'student' ? 'Akbar' :'Rakib'}
      userName = {user}
      userSecret = {user}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default InboxElem;