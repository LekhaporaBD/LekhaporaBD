import React from 'react';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeAuth, resetState } from '../../store/ui';
import axios from '../../config/axios';

const LogOut = () => {
  const dispatch = useDispatch();
  (function () {
    localStorage.removeItem('token');
    localStorage.removeItem('profile_id');
    localStorage.removeItem('profile_type');
    localStorage.removeItem('profile_pic');

    dispatch(
      changeAuth({
        isAuthenticated: false,
        authToken: '',
      }),
    );
    dispatch(resetState());
    // axios.defaults.headers.common['Authorization'] = null;
  })();
  return <Redirect to="/login" />;
};

export default LogOut;
