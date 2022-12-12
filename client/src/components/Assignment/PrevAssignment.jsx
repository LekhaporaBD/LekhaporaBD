import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import Menu from '../../components/utils/Menu';
import useHideOnClickOutside from '../../hooks/useHideOnClickOutside';
import Modal from 'react-modal';
import { TextField, Button } from '@material-ui/core';
import Styles from '../../pages/Authentication/Login.module.scss';
import styles from '../LectureTeacher/LecturePost.module.scss';
import axios from '../../config/axios';
import ForgetPassModel from '../utils/modal'


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

const PrevLecture = ({ classes, lectures, setAssignments }) => {
  const [showId, setShowId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const profilePic = localStorage.getItem('profile_pic')


  const [values, setValues] = useState({
    name: '',
    start_at: '',
    mark: '',
    content: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const userType = useSelector(({ ui }) => ui.userType);

  function closeModal() {
    setIsOpen(false);
    setShowId('');
  }
  const onEdit = (assignment) => {
    setIsOpen(true);
    setValues({
      name: assignment.term,
      start_at: assignment.deadline,
      mark: assignment.mark,
      content: assignment.name,
    });
  };

  const onDelete = (assignment) => {
    // axios.delete(
    //   `https://as.mutualempressa.com/lekapora/public/api/${userType}/assignment/${assignment.Id}`,
    // );
    setShowId('');
    const newAssignments = lectures.filter((item) => item.Id !== assignment.Id);
    setAssignments(newAssignments);
  };

  const menuBtnRef = useHideOnClickOutside(() => {
    if (showId !== '') {
      setShowId('');
    }
  });

  return (
    <Grid
      container
      spacing={3}
      className={classes.container}
      style={{ padding: '2rem 0rem' }}
    > 
      {lectures.map((lecture) => (
        <div style={{ marginBottom: '2rem' }}>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edit Post"
          >
            <div
              style={{
                padding: 30,
                marginBottom: 23,
                borderRadius: 10,
                boxShadow:
                  'inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff',
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
                    const assignment = {
                      name: values.content,
                      mark: values.mark,
                      term: values.term,
                      deadline: values.start_at,
                    };
                    // axios.put( 
                    //   `https://as.mutualempressa.com/lekapora/public/api/${userType}/assignment/${lecture.Id}`,
                    //   assignment,
                    // );
                    setValues({
                      name: '',
                      start_at: '',
                      mark: '',
                      content: '',
                    });
                    const newAssignments = [...lectures];
                    const newAssignment = newAssignments.find(
                      (item) => lecture.Id === item.Id,
                    );
                    newAssignment.mark = values.mark;
                    newAssignment.deadline = values.start_at;
                    newAssignment.name = values.content;
                    newAssignment.term = values.name;
                    
                    setAssignments(newAssignments);
                    setIsOpen(false);
                  }}
                >
                  Post
                </Button>
              </div>
            </div>
          </Modal>
          <Grid item xs={12}>
            <Paper className={classes.cardHolder}>
              <Menu
                ref={menuBtnRef}
                showDropdown={lecture.Id === showId}
                onClick={() => {
                  setShowId(lecture.Id);
                }}
                onEdit={() => onEdit(lecture)}
                onDelete={() => onDelete(lecture)}
              />
              <p
                className={classes.text}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                Assignment On :
                <span className={classes.textValue}>{lecture.name}</span>
              </p>
              <p
                className={classes.text}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                Mark :<span className={classes.textValue}>{lecture.mark}</span>
              </p>
              <p
                className={classes.text}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                Submission Date :
                <span className={classes.textValue}>{lecture.deadline}</span>
              </p>
              {userType !== 'teacher' && (
                <button 
                  className={classes.btn} 
                  onClick={(e) => setOpenModal(prevState => !prevState)}
                  > Submit </button>
                )}
                
                { openModal && <ForgetPassModel openModal={openModal} setOpenModal={setOpenModal}/> }

            </Paper>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default PrevLecture;
