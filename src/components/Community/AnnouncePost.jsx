import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Avatar } from '@material-ui/core';
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
          <div>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="outlined"
                color="primary"
                className={styles.buttonAdd}
                startIcon={<CloudUploadIcon />}
              >
                Add
              </Button>
            </label>
          </div>
          <div>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setAnnounceClicked(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => {
                setAnnounceClicked(false);
                axios.post(`${userType}/course/${courseId}/post`, {
                  body,
                });
                const newPosts = [
                  {
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
            profile?.profile_picture ? profile?.profile_picture : profilePhoto
          }
          className={styles.profileAvatar}
        />
        <h4 className={styles.title}>Share something with your class...</h4>
      </div>
    );
  }
};

export default AnnouncePost;
