import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { changeMenuType, setClassroom } from '../../store/ui';

import styles from './Classrooms.module.scss';

const Classrooms = ({ classrooms }) => {
  return (
    <Grid container wrap={'wrap'} className={styles.classrooms}>
      {classrooms.map((classroom, id) => (
        <Classroom key={id} details={classroom} />
      ))}
    </Grid>
  );
};

const Classroom = (props) => { 
  const { courseCode, title, facultyName, facultyPhoto } = props.details;
  const [dept, code] = courseCode.split(' - ');

  const history = useHistory();
  const dispatch = useDispatch();
  const handleNavigation = () => {
    dispatch(changeMenuType({ menuType: 'sub' }));
    dispatch(setClassroom({ classroom: { ...props.details } }));
    history.push(`/class/${title.toLowerCase().replace(' ', '-')}/community`);
  };
  return (
    <Grid
      container
      item
      xs={4}
      className={styles.classroomWrapper}
      justifyContent="center"
    >
      <div className={styles.classroom}>
        <div className={styles.hero}>
          <h4 className={styles.course}>{title}</h4>
          <div className={styles.courseCode}>
            <span className={styles.dept}>{dept}</span>
            <span className={styles.code}>{code}</span>
          </div>
        </div>
        <div className={styles.content}>
          <Avatar
            alt={facultyName}
            src={facultyPhoto}
            className={styles.profileAvatar}
          />
          <h5 className={styles.teacher}>{facultyName}</h5>
        </div>
        <button onClick={handleNavigation} className={styles.button}>
          Join Class
        </button>
      </div>
    </Grid>
  );
};

export default Classrooms;
