import React from 'react';
import { Avatar } from '@material-ui/core';

import styles from './Header.module.scss';
import bg from '../../assets/background/bg3.jpg';
import teacher2 from '../../assets/teachers/teacher-2.png';

const Header = () => {
  const details = {
    courseCode: 'CSE - 421',
    title: 'Web Technology',
    facultyName: 'Kazi Farzana',
    facultyPhoto: teacher2,
  };
  const { courseCode, title, facultyName, facultyPhoto } = details;
  const [dept, code] = courseCode.split(' - ');
  return (
    <div className={styles.classroom} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <Avatar
            alt={facultyName}
            src={facultyPhoto}
            className={styles.profileAvatar}
          />
          <h5 className={styles.teacher}>{facultyName}</h5>
        </div>

        <h4 className={styles.course}>{title}</h4>
        <div className={styles.courseCode}>
          <span className={styles.dept}>{dept}</span>
          <span className={styles.code}>{code}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
