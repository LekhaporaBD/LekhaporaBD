import React from 'react';
import { Avatar } from '@material-ui/core';
import styles from './PrevAnnouncements.module.scss';
import teacher3 from '../../assets/teachers/teacher-3.webp';

const PrevAnnouces = [
  {
    date: 'June 8, 2020',
    post: 'on 23 june , You have a class test.',
  },

  {
    date: 'June 15, 2020',
    post:
      'I have to pospond todays class. We will arrange a makeup on next week',
  },

  {
    date: 'March 22, 2022',
    post: 'Tomorrow is the last date of Project submission.',
  },
];

const PrevAnnouncements = () => {
  return PrevAnnouces.map((post) => (
    <div className={styles.postWrapper}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Avatar alt={'facultyName'} src={teacher3} />
          <div className={styles.commentContent}>
            <div className={styles.timestamp}>
              <h5>Maria Afnan</h5>
              <h6> {post.date} </h6>
            </div>
            <p>{post.post}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PrevAnnouncements;
