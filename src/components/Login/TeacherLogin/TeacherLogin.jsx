import React from 'react'
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
// import { Person } from '@stacks/profile';

import { useDispatch } from "react-redux";
import { changeUserType, changeAuth } from "../../../store/ui";

import Styles from '../../../pages/Authentication/Login.module.scss'

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const userSession = new UserSession({ appConfig });

const TeacherLogin = () => {
  const dispatch = useDispatch();
  const initAuthRequest = () => {
    showConnect({
      appDetails: {
        name: 'Lekhapora',
        icon: window.location.origin + '/favicon.png',
      },
      redirectTo: '/',
      finished: () => {
        dispatch(changeUserType({userType: 'teacher'}))
        dispatch(changeAuth({isAuthenticated: true, authToken: 'Teacher'}))
      },
      userSession: userSession,
    });
  }

  return (
    <button 
      className={`${Styles.red} ${Styles.button}`} 
      type="button" 
      onClick={initAuthRequest}
    >
        <i className={`${Styles.icon}`}></i>
        Login As A Teacher
    </button> 
  )
}

export default TeacherLogin
