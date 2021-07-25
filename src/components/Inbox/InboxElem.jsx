import React from 'react'
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';


const projectID = 'bad48f24-55e6-488f-aa75-9075b8aec45b';

const InboxElem = () => {

  return (
    <ChatEngine
      height="85vh"
      projectID={projectID}
    //   userName={localStorage.getItem('username')}
    //   userSecret={localStorage.getItem('password')}

      userName='username2'
      userSecret='password'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};


export default InboxElem;