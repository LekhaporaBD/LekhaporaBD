import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import axios from '../../config/axios';
import { setProfile, setProfilePicture } from '../../store/ui';
import styles from './Profile.module.scss';
import Title from '../utils/Title';
import { useDispatch, useSelector } from 'react-redux';


const ProfilePic = () => {
    const dispatch = useDispatch();
    const studentDetails = useSelector(({ ui }) => ui.profile);
    const picSrc = useSelector(({ profilePicReducer }) => profilePicReducer.img);
    const userType = useSelector(({ ui }) => ui.userType);
    const [open, setOpen] = useState(false);
    const [havePhoto, setPhoto] = useState(false);


    return (
        <div>
 
            <Title title="Profile Picture" />

            <div className={`${styles.upload} ${styles.center}`}>
                <div className={styles.profilePicHolder}>
                <Avatar
                    alt="Student ProfilePic"
                    src={studentDetails.profile_picture || picSrc}
                    className={styles.profileAvatar}
                />
                </div>
                <div className={styles.imgSetting}>
                {havePhoto ? (
                    <>
                    <button
                        className={styles.btn}
                        style={{marginRight:15 , padding:'0.125rem 3.5rem'}}
                        onClick={(e) => {
                        dispatch({ type: 'DEFAULT_IMG' });
                        setPhoto(false);
                        }}
                    >
                        
                        Remove photo
                    </button>
                    <button className={styles.btn} style={{padding:'0.125rem 3.5rem'}} onClick={() => setOpen(true)}>
                        Change photo
                    </button>
                    </>
                ) : (
                    <button className={styles.btn} onClick={() => setOpen(true)}>
                    Upload photo
                    </button>
                )}
                <DropzoneDialog
                    acceptedFiles={['image/*']}
                    cancelButtonText={'cancel'}
                    submitButtonText={'UpLoad Your Photo'}
                    maxFileSize={5000000}
                    filesLimit={1}
                    open={open}
                    onClose={() => setOpen(false)}
                    onSave={(files) => {
                    const reader = new FileReader();
                    reader.onload = async () => {
                        if (reader.readyState === 2) {
                        dispatch({ type: 'CHANGE_IMG', payload: reader.result });
                        localStorage.setItem('profile_pic', reader.result);
                        setPhoto(true);
                        // const formData = new FormData();
                        // formData.append('image', files[0], files[0].name);
                        // axios
                        //     .post('https://api.bigly24.com/api/buyer/fileUpload', formData, {
                        //     headers: {
                        //         'Content-Type': 'multipart/form-data',
                        //     },
                        //     })
                        //     .then((res) => {
                        //     dispatch(setProfilePicture(res.data.image_url));
                        //     });
                        }
                    };

                    reader.readAsDataURL(files[0]);
                    setOpen(false);
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={true}
                />
                {/*  */}
                </div>
            </div>
        </div>
    )
}

export default ProfilePic
