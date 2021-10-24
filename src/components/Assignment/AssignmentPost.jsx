import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField, Button, Avatar } from '@material-ui/core';
import axios from '../../config/axios';

import profilePhoto from '../../assets/teachers/teacher-3.webp';
import styles from '../LectureTeacher/LecturePost.module.scss';

const AssignmentPost = ({ lectures, setLectures }) => {
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  const [isAnnounceClicked, setAnnounceClicked] = useState(false);
  const [content, setContent] = useState('');

  if (isAnnounceClicked) {
    return (
      <div className={styles.formWrapper}>
        <TextField
          id="outlined-multiline-static"
          label="Make A lecture for your Students"
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
                const term =
                  Math.ceil(Math.random() * 100) % 2 === 0
                    ? 'Mid Term'
                    : 'Final Term';
                const mark = Math.floor(Math.random() * 8) * 5;

                const lecture = {
                  name: content,
                  mark,
                  term,
                  deadline: '14th Nov 2021',
                };

                axios.post(
                  `${userType}/course/${courseId}/assignments`,
                  lecture,
                );

                setLectures([
                  ...lectures,
                  {
                    AssignmentOn: content,
                    GivenOn: mark,
                    SubmissionDate: '14th Nov 2021',
                  },
                ]);
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
          src={profilePhoto}
          className={styles.profileAvatar}
        />
        <h4 className={styles.title}>Share something with your class...</h4>
      </div>
    );
  }
};

export default AssignmentPost;
