import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@material-ui/core';
import { format } from 'date-fns';

import { useSelector } from 'react-redux';

import axios from '../../config/axios';
import profilePhoto from '../../assets/teachers/teacher-3.webp';
import styles from './AnnouncePost.module.scss';

const AnnouncePost = ({ announces, setAnnounces }) => {
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId); 
  const profilePic = localStorage.getItem('profile_pic')


  const [isAnnounceClicked, setAnnounceClicked] = useState(false);
  const [content, setContent] = useState('');
  if (isAnnounceClicked) {
    return (
      <div className={styles.formWrapper}>
        <TextField
          id="outlined-multiline-static"
          label="Announce something to your Class"
          multiline
          rows={4}
          variant="filled"
          className={styles.textField}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className={styles.buttonWrapper}>
          <div>
            <Button
              variant="contained"
              className={`${styles.buttonCancel} ${styles.button}`}
              size="large"
              onClick={() => {
                setAnnounceClicked(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              className={`${styles.buttonPost} ${styles.button}`}
              size="large"
              color="primary"
              onClick={(e) => {
                const notification = {
                  id :  Math.floor(2 + Math.random()*(50 - 2 + 1)) , 
                  body: content,
                  date: format(new Date(), 'do MMMM, yyyy'),
                };

                // axios.post(
                //   `${userType}/course/${courseId}/notification`,
                //   notification,
                // );

                setAnnounces([...announces, notification]);
                setContent('');
                setAnnounceClicked(false);
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={styles.wrapper}
        onClick={() => {
          setAnnounceClicked(true);
        }}
      >
        <Avatar
          alt={'facultyName'}
          src={profilePic}
          className={styles.profileAvatar}
        />
        <h4 className={styles.title}>Share something with your class...</h4>
      </div>
    );
  }
};

export default AnnouncePost;
