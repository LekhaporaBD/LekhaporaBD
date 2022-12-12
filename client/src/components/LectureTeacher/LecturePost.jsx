import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { TextField, Button, Avatar } from '@material-ui/core';
import axios from '../../config/axios';

import profilePhoto from '../../assets/teachers/teacher-3.webp';
import styles from './LecturePost.module.scss';

const LecturePost = ({ lectures, setLectures }) => {
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);
  const profilePic = localStorage.getItem('profile_pic')


  const [isAnnounceClicked, setAnnounceClicked] = useState(false);
  const [content, setContent] = useState('');
  const [lectureFile, setLectureFile] = useState('');
  const [abc, setAbc] = useState('');

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
            <input
              accept="application/pdf"
              style={{ display: 'none' }}
              id="lectures"
              type="file"
              onChange={(e) => {
                const { files } = e.target;
                const formData = new FormData();
                formData.append('file', files[0], files[0].name);

                setAbc(files[0])

        // axios.post('teacher/uploadFile', formData, {
        //             headers: {
        //               'Content-Type': 'multipart/form-data',
        //             },
        //           })
        //           .then((res) => {
        //             setLectureFile(res.data.file_url);
        //           });
              }}
              
            />
            <label
              htmlFor="lectures"
              className={`${styles.buttonPost} ${styles.button}`}
            >
              Add Lecture
            </label>
          </div>
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

                const lecture = {
                  name: content,
                  mark: '14',
                  term,
                  link: lectureFile,
                  fileType: 'pdf',
                };

                // axios.post(`${userType}/course/${courseId}/lecture`, lecture);

                setLectures([
                  ...lectures,
                  {
                    id : Math.floor(2 + Math.random()*(50 - 2 + 1)) , 
                    fileName: content,
                    term,
                    fileType: 'pdf',
                    link: lectureFile,
                  },
                ]);
                setContent('');
                setLectureFile('');
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

export default LecturePost;
