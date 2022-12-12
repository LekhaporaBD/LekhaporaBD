import React from 'react'
import Styles from '../../../pages/Authentication/Login.module.scss';

const StudentRegistration = () => {
  return (
    <form className={Styles.form}>
      <label className={Styles.label}>
          <input  type="text" placeholder="Student" className={Styles.input}/>
      </label>
      <label className={Styles.label}>
          <input  type="text" placeholder="Phone Number" className={Styles.input}/>
      </label>
      <label className={Styles.label}>
          <input type="password" placeholder="Password" className={Styles.input}/>
      </label>
      <label className={Styles.label}>
          <input type="password" placeholder="Confirm Password" className={Styles.input}/>
      </label>
      <button  className={`${Styles.red} ${Styles.button}`} type="button">
        <i className={`${Styles.icon}`}></i>
        Sign Up
      </button>
    </form>  
  )
}

export default StudentRegistration
