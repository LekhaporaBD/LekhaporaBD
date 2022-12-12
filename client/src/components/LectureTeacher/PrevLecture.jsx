import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@material-ui/core';

import { useSelector } from 'react-redux';
import Menu from '../../components/utils/Menu';
import useHideOnClickOutside from '../../hooks/useHideOnClickOutside';
import Modal from 'react-modal';

import axios from '../../config/axios';

import styles from './PrevLecture.module.scss';
import gif from '../../assets/spinner5.gif';

const customStyles = {
  content: {
    top: '50%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
  },
};

const PrevLecture = ({ lectures, setLectures }) => {
  const [showId, setShowId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [lectureFile, setLectureFile] = useState('');
  const profilePic = localStorage.getItem('profile_pic')


  const userType = useSelector(({ ui }) => ui.userType);

  const userName = useSelector(({ ui }) => ui.profile.name);

  const onEdit = (lecture) => {
    
    setIsOpen(true);
    setContent(lecture.fileName);
  };

  function closeModal() {
    setIsOpen(false);
    setShowId('');
  }

  const onDelete = (lecture) => {

    // axios.delete(`https://as.mutualempressa.com/lekapora/public/api/${userType}/lecture/${lecture.id}`,);

    setShowId('');
    const newLectures = lectures.filter((item) => item.id !== lecture.id);
    setLectures(newLectures);
  };


  const menuBtnRef = useHideOnClickOutside(() => {
    if (showId !== '') {
      setShowId('');
    }
  });
  return lectures.map((post) => (
    <div className={styles.postWrapper}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Post"
      >
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
                  // axios.post('teacher/uploadFile', formData, {
                  //     headers: {
                  //       'Content-Type': 'multipart/form-data',
                  //     },
                  //   })
                  //   .then((res) => {
                  //     setLectureFile(res.data.file_url);
                  //   });
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
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className={`${styles.buttonPost} ${styles.button}`}
                size="large"
                color="primary"
                onClick={() => {
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

                  // axios.put(`https://as.mutualempressa.com/lekapora/public/api/${userType}/lecture/${post.id}`,lecture,);

                  const newLectures = [...lectures];
                  const newLecture = newLectures.find(
                    (item) => post.id === item.id,
                  );
                  newLecture.fileName = content;
                  newLecture.link = lectureFile;
                  setLectures(newLectures);
                  // setLectures([
                  //   ...lectures,
                  //   {
                  //     fileName: content,
                  //     term,
                  //     fileType: 'pdf',
                  //     link: lectureFile,
                  //   },
                  // ]);
                  setContent('');
                  setLectureFile('');
                  setIsOpen(false);
                }}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Avatar alt={'facultyName'} src={profilePic} />
          <div className={styles.commentContent}>
            <div className={styles.timestamp}>
              <h5>{userName}</h5>
              <h6> {post.term} </h6>
            </div>
            <p>{post.fileName}</p>
            <iframe
              title={post.fileName}
              src={`https://docs.google.com/viewerng/viewer?url=${post.link}`}
              style={{
                background:`URL(${gif})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                marginTop: 15, overflow: 'hidden'
              }}
              frameborder="0"
              height="150"
              width="150"
              scrolling="no"
            />
          </div>
        </div>
        <Menu
          ref={menuBtnRef}
          show="left"
          showDropdown={post.id === showId}
          onClick={() => {
            setShowId(post.id);
          }}
          onEdit={() => onEdit(post)}
          onDelete={() => onDelete(post)}
        />
      </div>
    </div>
  ));
};

export default PrevLecture;
