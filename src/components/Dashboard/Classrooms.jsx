import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeMenuType } from "../../store/ui";

import teacher2 from "../../assets/teachers/teacher-2.png";
import teacher3 from "../../assets/teachers/teacher-3.webp";
import teacher5 from "../../assets/teachers/teacher-5.jpg";

import styles from "./Classrooms.module.scss";

const classrooms = [
  {
    courseCode: 'CSE - 421',
    title: "Web Technology",
    facultyName: "Kazi Farzana",
    facultyPhoto: teacher2,
  },
  {
    courseCode: 'EEE - 305',
    title: "Computer Graphics",
    facultyName: "Maria Afnan",
    facultyPhoto: teacher3,
  },
  {
    courseCode: 'Mat - 218',
    title: "Differential Equations",
    facultyName: "Dr Shahadat",
    facultyPhoto: teacher5,
  },
  // {
  //   code: 102,
  //   title: "Basic English",
  //   facultyName: "Marin Sophia",
  //   facultyPhoto: teacher4,
  // },
];

const Classrooms = () => {
  return (
    <Grid container className={styles.classrooms}>
      {classrooms.map((classroom) => (
        <Classroom details={classroom} />
      ))}
    </Grid>
  );
};

const Classroom = (props) => {
  const {courseCode, title, facultyName, facultyPhoto} = props.details
  const [ dept, code ] = courseCode.split(' - ');

  const history = useHistory()
  const dispatch = useDispatch();
  const handleNavigation = () => {
    dispatch(changeMenuType({menuType: 'sub'}))
    history.push(`/class/${title.toLowerCase().replace(' ', '-')}/community`);
  }
  return (
    <Grid container item xs={4} className={styles.classroomWrapper} justify="center">
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
        <button onClick={handleNavigation} className={styles.button}>Join Class</button>
      </div>
    </Grid>
  );
};

export default Classrooms;
