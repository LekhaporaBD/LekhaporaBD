import React, { useState } from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core';

import teacher3 from '../../assets/teachers/teacher-3.webp';
import defaultAvatar from '../../assets/defaultAvatar.png';

import axios from '../../config/axios';
import styles from './PostList.module.scss';

const Comments = ({ serial, post, posts, setPosts }) => {
  const [comments, setComments] = useState({});
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);
  const profilePicture = useSelector(({ ui }) => ui.profile.profile_picture);
  console.log(post);

  const postComment = (id) => {
    const commentData = {
      title: Math.random(),
      body: comments[`comment-${id}`],
      created_at: new Date(),
    };

    if (comments[`comment-${id}`] !== '')
      axios.post(`${userType}/post/${id}/comment`, commentData);

    const newPosts = [...posts];
    newPosts[serial] = {
      ...newPosts[serial],
      comments: newPosts[serial].comments.concat(commentData),
    };

    setPosts(newPosts);
    setComments({
      ...comments,
      [`comment-${id}`]: '',
    });
  };

  return (
    <>
      {post.comments && post.comments.length > 0 && (
        <div className={styles.comments}>
          {post.comments &&
            post.comments.map((comment, idx) => (
              <div className={styles.comment} key={idx}>
                <Avatar
                  alt={'facultyName'}
                  src={comment?.user?.profile?.profile_picture || defaultAvatar}
                />
                <div className={styles.commentContent}>
                  <div className={styles.timestamp}>
                    <h5>{comment?.user?.profile?.name}</h5>
                    <h6>
                      {format(new Date(comment.created_at), 'do MMMM, yyyy')}
                    </h6>
                  </div>
                  <p>{comment.body}</p>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className={styles.postComment}>
        <Avatar alt={'facultyName'} src={profilePicture} />
        <FormControl className={styles.commentBox} variant="outlined">
          <OutlinedInput
            className={styles.commentInput}
            name={`comment-${post.id}`}
            value={comments[`comment-${post.id}`]}
            onChange={(e) => setComments({ [e.target.name]: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    postComment(post.id);
                  }}
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
        </FormControl>
      </div>
    </>
  );
};

export default Comments;
