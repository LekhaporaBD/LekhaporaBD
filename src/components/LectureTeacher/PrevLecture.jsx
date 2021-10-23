import React from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import styles from './PrevLecture.module.scss';
import teacher3 from '../../assets/teachers/teacher-3.webp';

const PrevLecture = ({ lectures }) => {
  const userName = useSelector(({ ui }) => ui.profile.name);

  return lectures.map((post) => (
    <div className={styles.postWrapper}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Avatar alt={'facultyName'} src={teacher3} />
          <div className={styles.commentContent}>
            <div className={styles.timestamp}>
              <h5>{userName}</h5>
              <h6> {post.term} </h6>
            </div>
            <p>{post.fileName}</p>
            <iframe
              style={{ marginTop: 15, overflow: 'hidden' }}
              title={post.fileName}
              src={post.link}
              frameborder="0"
              height="150"
              width="150"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PrevLecture;
