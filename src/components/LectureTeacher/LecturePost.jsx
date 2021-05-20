import React, { useState } from 'react';
import { TextField, Button, Avatar } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


import profilePhoto from "../../assets/teachers/teacher-3.webp";
import styles from './LecturePost.module.scss'

const LecturePost = () => {
    const [ isAnnounceClicked, setAnnounceClicked ] = useState(false);
    if(isAnnounceClicked){
      return (
        <div className={styles.formWrapper}>
          <TextField
            id="outlined-multiline-static"
            label="Make A lecture for your Students"
            multiline
            rows={4}
            variant="filled"
            className={styles.textField}
          />
          <div className={styles.buttonWrapper}>
            <div>
              <input
                accept="image/*"
                style={{display: 'none'}}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button 
                  variant="outlined"
                  color="primary"
                  className={`${styles.buttonAdd} ${styles.button}`}
                  startIcon={<CloudUploadIcon />}
                >
                  Add
                </Button>
              </label>
            </div>
            <div>
              <Button variant="contained" className={`${styles.buttonCancel} ${styles.button}`} size="large" onClick={() => {setAnnounceClicked(false)}}>
                Cancel
              </Button>
              <Button variant="contained" className={`${styles.buttonPost} ${styles.button}`} size="large" color="primary">
                Post
              </Button>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <div className={styles.wrapper} onClick={() => {setAnnounceClicked(true)}}>
          <Avatar
            alt={'facultyName'}
            src={profilePhoto}
            className={styles.profileAvatar}
          />
          <h4 className={styles.title}>Share something with your class...</h4>
        </div>
      )
    }
}

export default LecturePost
