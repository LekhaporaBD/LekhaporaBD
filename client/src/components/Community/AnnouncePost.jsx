import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Avatar, Input } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import profilePhoto from '../../assets/defaultAvatar.png';
import styles from './AnnouncePost.module.scss';
import axios from '../../config/axios';

const AnnouncePost = ({ posts, setPosts }) => {
  const [isAnnounceClicked, setAnnounceClicked] = useState(false);
  const [body, setBody] = useState('');

  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);
  const profile = useSelector(({ ui }) => ui.profile);
  const profilePic = localStorage.getItem('profile_pic')


  
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
          onChange={(e) => setBody(e.target.value)}
        />
        <div className={styles.buttonWrapper}>
          
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              multiple
              type="file"
            />
              <Button
                variant="outlined"
                color="primary"
                className={styles.buttonAdd}
                onClick={(e) => console.log(e.target)}
                startIcon={<CloudUploadIcon />}
              >
                Add
              </Button>
            </label>
          
          <div>
            <Button
              variant="contained"
              size="large"
              className={styles.buttonCancel}
              onClick={() => {
                setAnnounceClicked(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="large"
              className={styles.buttonPost}
              color="primary"
              onClick={() => {
                setAnnounceClicked(false);
                // axios.post(`${userType}/course/${courseId}/post`, { body,});
                const newPosts = [
                  {
                    postId : Math.floor(2 + Math.random()*(50 - 2 + 1)) , 
                    userId: profile?.id,
                    userName: profile?.name,
                    profilePicture: profile?.profile_picture,
                    createdAt: new Date(),
                    body: body,
                    comments: [],
                  },
                  ...posts,
                ];
                setPosts(newPosts.reverse());
                setBody('');
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
          src={
            profilePic || profilePhoto
          }
          className={styles.profileAvatar}
        />
        <h4 className={styles.title}>Share something with your class...</h4>
      </div>
    );
  }
};

export default AnnouncePost;
