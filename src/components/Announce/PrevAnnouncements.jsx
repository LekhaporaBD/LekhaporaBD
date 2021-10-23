import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import styles from './PrevAnnouncements.module.scss';
import teacher3 from '../../assets/teachers/teacher-3.webp';

const PrevAnnouncements = ({ announces }) => {
  const userName = useSelector(({ ui }) => ui.profile.name);

  return announces.map((post) => (
    <div className={styles.postWrapper}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Avatar alt={'facultyName'} src={teacher3} />
          <div className={styles.commentContent}>
            <div className={styles.timestamp}>
              <h5>{userName}</h5>
              <h6> {post.date} </h6>
            </div>
            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PrevAnnouncements;
