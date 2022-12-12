import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss';
import bg from '../../assets/background/bg3.jpg';

const Header = () => {
  const classroom = useSelector(({ ui }) => ui.classroom);

  const { courseCode, title, facultyName, facultyPhoto } = classroom;
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
