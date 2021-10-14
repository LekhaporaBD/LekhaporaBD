import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeUserType, changeAuth } from '../../../store/ui';

import Styles from '../../../pages/Authentication/Login.module.scss';
import Axios from '../../../config/axios';

const TeacherLogin = ({ setshowSignUp }) => {
  const [values, setValues] = useState({
    studentid: '222',
    password: '222333444',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    Axios.post('teacher/login', {
      id_number: values.studentid,
      password: values.password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('profile_id', res.data.user.profile_id);
      localStorage.setItem('profile_type', res.data.user.profile_type);
      // history.push('/dashboard');
      dispatch(changeUserType({ userType: 'teacher' }));
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
    </form>
  );
};

export default TeacherLogin;
