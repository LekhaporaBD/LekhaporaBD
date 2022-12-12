import React, { useState } from 'react';
import Styles from './Login.module.scss';
import logo from '../../assets/logo.png';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import TeacherLogin from '../../components/Login/TeacherLogin/TeacherLogin';
import StudentLogin from '../../components/Login/StudentLogin/StudentLogin';
import StudentRegistration from '../../components/Login/StudentRegistration/StudentRegistration';

const Login = () => {
  const [method, setmethod] = useState('initial');
  const [showSignUp, setshowSignUp] = useState(false);

  return (
    <div className={Styles.container}>
      <div
        className={Styles.mainDiv}
        style={{
          padding: method === 'initial' ? '9rem 5rem 2.5rem' : '5rem 3rem 5rem',
        }}
      >
        {/* {method !== 'initial' ? (
          <KeyboardBackspaceIcon className={Styles.backIcon} />
        ) : null} */}
        <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
          <img src={logo} alt="" srcset="" />
        </div>
        {method === 'student' ? (
          showSignUp ? (
            <StudentRegistration />
          ) : (
            <StudentLogin setmethod={setmethod} />
          )
        ) : method === 'teacher' ? (
          <TeacherLogin setmethod={setmethod} />
        ) : (
          <div>
            <button
              className={`${Styles.red} ${Styles.button}`}
              type="button"
              onClick={(e) => setmethod('student')}
            >
              <i className={`${Styles.icon}`}></i>
              Login As A Student
            </button>

            <br />
            <button
              className={`${Styles.red} ${Styles.button}`}
              type="button"
              onClick={(e) => setmethod('teacher')}
            >
              <i className={`${Styles.icon}`}></i>
              Login As A Teacher
            </button>

            {/* <TeacherLogin /> */}
            <br />
          </div>
        )}

        <p className={Styles.emergency}> For Emergency : 01521333799 </p>

      </div>
    </div>
  );
};

export default Login;
