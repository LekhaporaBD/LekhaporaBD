import React, { useState } from 'react';
import { TextField, Button, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Menu from '../../components/utils/Menu';
import useHideOnClickOutside from '../../hooks/useHideOnClickOutside';
import Modal from 'react-modal';

import styles from './PrevAnnouncements.module.scss';
import teacher3 from '../../assets/teachers/teacher-3.webp';
import axios from '../../config/axios';

import {format} from 'date-fns'

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

const PrevAnnouncements = ({ announces, setAnnounces }) => {
  const [showId, setShowId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const profilePic = localStorage.getItem('profile_pic')


  const userType = useSelector(({ ui }) => ui.userType);
  const userName = useSelector(({ ui }) => ui.profile.name); 

  const onEdit = (lecture) => {
    setIsOpen(true);
    setContent(lecture.body);
  };

  function closeModal() {
    setIsOpen(false);
    setShowId('');
  }

  const onDelete = (lecture) => {
    // axios.delete(
    //   `https://as.mutualempressa.com/lekapora/public/api/${userType}/notification/${lecture.id}`,
    // );
    setShowId('');
    const newLectures = announces.filter((item) => item.id !== lecture.id);
    setAnnounces(newLectures);
  };

  const menuBtnRef = useHideOnClickOutside(() => {
    if (showId !== '') {
      setShowId('');
    }
  });

  return announces.map((post) => (
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
                onClick={(e) => {

                  const newAnnounces = [...announces];
                  const newAnnounce = newAnnounces.find(
                    (item) => post.id === item.id,
                  );
      


                  newAnnounce.body = content
                  // newAnnounce.date = format(new Date(), 'do MMMM, yyyy')
                  // let announce = {
                  //   body: content,
                  //   date: format(new Date(), 'do MMMM, yyyy'),
                  // };
                  // axios.post(
                  //   `${userType}/course/${courseId}/notification`,
                  //   notification,
                  // );

                  setAnnounces(newAnnounces);
                  setContent('');
                  setIsOpen(false);
                  // setAnnounceClicked(false);
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
              <h6> {post.date} </h6>
            </div>
            <p>{post.body}</p>
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

export default PrevAnnouncements;
