import React from 'react'
import { Button, Avatar } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SendIcon from '@material-ui/icons/Send';

import teacher3 from "../../assets/teachers/teacher-3.webp";
import styles from './PostList.module.scss'

const posts = [
  {
    postId: 1,
    classId: 1,
    userId: 1,
    timeStamp: 'Sep 26, 2020',
    postBody: {
      content: `Please check out the assignment.
                Instructions:
                1. Last date of submission: 9 October, 2020 (within 11.59 pm).
                2. Summarize the paper in 2 pages (Times new roman, font size 11) and prepare a presentation of 10-12 slides.
                3. Give at least 2 reference at the end of your summary.
                4. Name of your files should be your student id.
                5. Mail your files to mariaafnan6@gmail.com  (subject of your mail should be CSE 421_assignment_student id.)`,
      files: []
    },
    comments: [
      {
        commentId: 1,
        userId: 2,
        timeStamp: 'Sep 26, 2020',
        content: `Maam i don't have a laptop or webcam,Since i use desktop but i can use my mobiles  camera but it's barely visible on the camera.Just to let you know maam.`
      },
      {
        commentId: 2,
        userId: 3,
        timeStamp: 'Sep 21, 2020',
        content: `mam google meet e amar camera on hoy na...`
      },
    ]
  }
]

const PostList = () => {
  return (
    <div className={styles.postWrapper}>
      <div className={styles.post}>
        <div className={styles.postInfo}>
          <Avatar
            alt={'facultyName'}
            src={teacher3}
          />
          <div className={styles.slug}>
            <h5>Maria Afnan</h5>
            <h6>Oct 4, 2020</h6>
          </div>
        </div>
        <p className={styles.postContent}>
          Please check out the assignment.
            Instructions:
            1. Last date of submission: 9 October, 2020 (within 11.59 pm).
            2. Summarize the paper in 2 pages (Times new roman, font size 11) and prepare a presentation of 10-12 slides.
            3. Give at least 2 reference at the end of your summary.
            4. Name of your files should be your student id.
            5. Mail your files to mariaafnan6@gmail.com  (subject of your mail should be CSE 421_assignment_student id.)
        </p>
      </div>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <Avatar
            alt={'facultyName'}
            src={teacher3}
          />
          <div className={styles.commentContent}>
            <div className={styles.timestamp}>
              <h5>Maria Afnan</h5>
              <h6>Oct 8, 2020</h6>
            </div>
            <p>
              Maam i don't have a laptop or webcam,Since i use desktop but i can use my mobiles  camera but it's barely visible on the camera.Just to let you know maam.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.postComment}>
        <Avatar
          alt={'facultyName'}
          src={teacher3}
        />
        <FormControl 
        className={styles.commentBox}
        variant="outlined">
        <OutlinedInput
          id="outlined-adornment-weight"
          // value={values.weight}
          // onChange={handleChange('weight')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <SendIcon/>
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
  )
}

export default PostList
