import React from 'react'
import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';
import classes from './Inbox.module.scss';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return ( 
    <form className={classes.messageForm} onSubmit={handleSubmit}>
      <input
        className={classes.messageInput}
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="uploadButton">
        <span className={classes.imageButton}>
          <PictureOutlined className={classes.pictureIcon} />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="uploadButton"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className={classes.sendButton}>
        <SendOutlined className={classes.sendIcon} />
      </button>
    </form>
  );
};

export default MessageForm;
