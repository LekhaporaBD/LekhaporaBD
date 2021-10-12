import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeUserType, changeAuth } from '../../../store/ui';

import Styles from '../../../pages/Authentication/Login.module.scss';
import Axios from '../../../config/axios';

const StudentLogin = ({ setshowSignUp }) => {
  const [values, setValues] = useState({
    studentid: '777',
    password: '222333444',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    Axios.post('student/login', {
      id_number: values.studentid,
      password: values.password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('profile_id', res.data.user.profile_id);
      localStorage.setItem('profile_type', res.data.user.profile_type);
      // history.push('/dashboard');
      dispatch(changeUserType({ userType: 'student' }));
      dispatch(
        changeAuth({
          isAuthenticated: true,
          authToken: res.data,
        }),
      );
    });
  };

  return (
    <form className={Styles.form}>
      <label className={Styles.label}>
        <input
          type="text"
          placeholder="Student ID"
          className={Styles.input}
          onChange={handleChange('studentid')}
          value={values.studentid}
        />
      </label>
      <label className={Styles.label}>
        <input
          type="password"
          placeholder="Password"
          className={Styles.input}
          onChange={handleChange('password')}
          value={values.password}
        />
      </label>
      <button
        className={`${Styles.red} ${Styles.button}`}
        type="button"
        onClick={handleSubmit}
      >
        <i className={`${Styles.icon}`}></i>
        Log in
      </button>

      <p style={{ textAlign: 'right', marginTop: 28 }}>
        <a href="http://localhost:3000/">Forgot Password?</a>
      </p>

      <div className={Styles.segment}>
        <button className={`${Styles.unit} ${Styles.button}`} type="button">
          <span> Login With Google </span>
        </button>
        <button
          className={`${Styles.unit} ${Styles.button}`}
          type="button"
          onClick={(e) => setshowSignUp(true)}
        >
          <span> Sign Up Here. </span>
        </button>
      </div>
    </form>
  );
};

export default StudentLogin;
