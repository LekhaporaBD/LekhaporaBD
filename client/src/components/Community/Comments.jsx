import React, { useState } from 'react';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';

import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';
import { Avatar } from '@material-ui/core';

import defaultAvatar from '../../assets/defaultAvatar.png';

import axios from '../../config/axios';
import styles from './PostList.module.scss';


const Comments = ({ serial, post, posts, setPosts }) => {
  const [comments, setComments] = useState({});
  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);
  const { name, profile_picture } = useSelector(({ ui }) => ui.profile);
  const picSrc = localStorage.getItem('profile_pic')

  const postComment = (id) => {
    const commentData = {
      title: Math.random(),
      body: comments[`comment-${id}`],
      created_at: new Date(),
    };

    // if (comments[`comment-${id}`] !== '')
    //   axios.post(`${userType}/post/${id}/comment`, commentData);


    const newPosts = [...posts];

    newPosts[serial] = {
      ...newPosts[serial],
      comments: newPosts[serial].comments.concat({
        ...commentData,
        user: {
          profile: {
            profile_picture: profile_picture,
          },
        },
      }),
    };

    setPosts(newPosts.reverse());
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
              comment.body &&
              <div className={styles.comment} key={idx}>
                <Avatar
                  alt={'facultyName'}
                  src={profile_picture || picSrc}
                  // src={comment?.user?.profile?.profile_picture || defaultAvatar}
                />
                <div className={styles.commentContent}>
                  <div className={styles.timestamp}>
                    <h5>{comment?.name || name}</h5>
                    <h6>
                      {comment.created_at === '' ? '' : format(new Date(comment.created_at), 'do MMMM, yyyy')}
                    </h6>
                  </div>
                  <p>{comment.body}</p>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className={styles.postComment}>
        <Avatar alt={'facultyName'} src={profile_picture || picSrc} />
        <FormControl className={styles.commentBox} variant="outlined">
          <OutlinedInput
            className={styles.commentInput}
            name={`comment-${post.postId}`}
            value={comments[`comment-${post.postId}`]}
            onChange={(e) => setComments({ [e.target.name]: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    postComment(post.postId);
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
