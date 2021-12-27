import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField, Button, Avatar } from '@material-ui/core';

import profilePhoto from '../../assets/teachers/teacher-3.webp';
import Styles from '../../pages/Authentication/Login.module.scss';
import styles from '../LectureTeacher/LecturePost.module.scss';
import axios from '../../config/axios';

const AssignmentPost = ({ lectures, setLectures }) => {
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  const [values, setValues] = useState({
    name: '',
    start_at: '',
    mark: '',
    content: '',
  });

  const [isAnnounceClicked, setAnnounceClicked] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  if (isAnnounceClicked) {
    return (
      <div className={styles.formWrapper}>
        <div
          style={{
            padding: 30,
            marginBottom: 23,
            borderRadius: 10,
            boxShadow: 'inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff',
          }}
        >
          <div style={{ display: 'flex', marginBottom: '2rem' }}>
            <label style={{ marginRight: 15 }}>
              <input
                type="text"
                onChange={handleChange('name')}
                placeholder="CT / Final"
                value={values.name}
                className={Styles.input}
              />
            </label>

            <label style={{ marginRight: 15 }}>
              <input
                type="text"
                onChange={handleChange('mark')}
                placeholder="Mark"
                value={values.mark}
                className={Styles.input}
              />
            </label>

            <label style={{ marginRight: 15 }}>
              <input
                type="text"
                onChange={handleChange('start_at')}
                placeholder="Date"
                value={values.start_at}
                className={Styles.input}
              />
            </label>
          </div>
          <TextField
            id="outlined-multiline-static"
            label="Make A Assignment for your Students"
            multiline
            rows={4}
            variant="filled"
            className={styles.textField}
            value={values.content}
            onChange={handleChange('content')}
          />
        </div>
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
                const assignment = {
                  name: values.content,
                  mark: values.mark,
                  term: values.term,
                  deadline: values.start_at,
                };
                axios.post(
                  `${userType}/course/${courseId}/assignments`,
                  assignment,
                );
                setValues({
                  name: '',
                  start_at: '',
                  mark: '',
                  content: '',
                });
                setLectures([...lectures, assignment]);
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
