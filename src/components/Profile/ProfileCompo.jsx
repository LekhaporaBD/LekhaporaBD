import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../utils/Title';

const ProfileCompo = () => {
  // const picSrc = useSelector(({ profilePicReducer }) => profilePicReducer.img);
  const studentDetails = useSelector(({ ui }) => ui.profile);
  const userType = useSelector(({ ui }) => ui.userType);



  return (
    <div className={`${styles.container} ${styles.center}`}>


      <div className={styles.info}>
        <div>
          <Title title="Personal Info" />

          <div style={{ width: '80%', margin: '0 auto' }}>
            <div className={styles.infoBlock}>
              <div className={styles.infoHolder}>
                <h2> Name : </h2>
                <h3> {studentDetails?.name} </h3>
              </div>
              {userType === 'student' && (
                <div className={styles.infoHolder}>
                  <h2> ID : </h2>
                  <h3> {`${studentDetails.batch}-00${studentDetails.id}-042`} </h3>
                </div>
              )}
            </div>

            <div className={styles.infoHolder}>
              <h2> Email : </h2>
              <h3> {studentDetails.email} </h3>
            </div>

            <div className={styles.infoBlock}>
              {userType === 'student' && (
                <div className={styles.infoHolder}>
                  <h2> Batch: </h2>
                  <h3> {studentDetails.batch} </h3>
                </div>
              )}

              <div className={styles.infoHolder}>
                <h2> Phone : </h2>
                <h3> {studentDetails.contact_number} </h3>
              </div>
            </div>

            {userType === 'teacher' && (
              <div className={styles.infoBlock}>
                <div className={styles.infoHolder}>
                  <h2> Position: </h2>
                  <h3> {studentDetails.position} </h3>
                </div>
              </div>
            )}
            {userType === 'teacher' && (
              <div className={styles.infoBlock}>
                <div className={styles.infoHolder}>
                  <h2> No of Assigned Courses : </h2>
                  <h3> {studentDetails.no_of_classes} </h3>
                </div>
              </div>
            )}

            {userType === 'student' && (
              <div className={styles.infoBlock}>
                <div className={styles.infoHolder}>
                  <h2> SGPA : </h2>
                  <h3> {studentDetails.sgpa} </h3>
                </div>

                <div className={styles.infoHolder}>
                  <h2> Credit Earned : </h2>
                  <h3> {studentDetails.credit_earned} </h3>
                </div>
              </div>
            )}

            {userType === 'student' && (
              <>
              <div className={styles.infoBlock}>
                <div className={styles.infoHolder}>
                  <h2> CGPA : </h2>
                  <h3> {studentDetails.cgpa} </h3>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div className={styles.infoHolder}>
                  <h2> Course Completed : </h2>
                  <h3> {studentDetails.course_completed} </h3>
                </div>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompo;
