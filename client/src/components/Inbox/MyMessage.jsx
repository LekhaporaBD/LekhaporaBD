import React from 'react'
import classes from './Inbox.module.scss';

const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className={classes.messageImage}
        style={{ float: 'right' }}
      />
    );
  }

  return (
    <div className={classes.message} 
      style={{ float: 'right', marginRight: '18px', color: 'white', 
               backgroundColor: '#3B2A50' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
