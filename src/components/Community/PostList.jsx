import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';

import teacher3 from '../../assets/teachers/teacher-3.webp';
import styles from './PostList.module.scss';
import axios from '../../config/axios';

const PostList = ({ posts }) => {
  const [comments, setComments] = useState(posts.comments);
  const [comment, setComment] = useState('');
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  const postComment = (id) => {
    axios.post(`${userType}/post/${id}/comment`, {
      comment,
    });
    const newPosts = [
      ...comments,
      {
        body: comment,
      },
    ];
    setComments(newPosts);
    setComment('');
  };
  return posts.map((post) => {
    return (
      <div className={styles.postWrapper}>
        <div className={styles.post}>
          <div className={styles.postInfo}>
            <Avatar alt={'facultyName'} src={teacher3} />
            <div className={styles.slug}>
              <h5>Maria Afnan</h5>
              <h6>Oct 4, 2020</h6>
            </div>
          </div>
          <p className={styles.postContent}>{post.body}</p>
        </div>
        {comments && comments.length > 0 && (
          <div className={styles.comments}>
            {comments &&
              comments.map((comment) => (
                <div className={styles.comment}>
                  <Avatar alt={'facultyName'} src={teacher3} />
                  <div className={styles.commentContent}>
                    <div className={styles.timestamp}>
                      <h5>Maria Afnan</h5>
                      <h6>Oct 8, 2020</h6>
                    </div>
                    <p>{comment.body}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
        <div className={styles.postComment}>
          <Avatar alt={'facultyName'} src={teacher3} />
          <FormControl className={styles.commentBox} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => postComment(post.id)}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
            {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
          </FormControl>
        </div>
      </div>
    );
  });
};

export default PostList;
