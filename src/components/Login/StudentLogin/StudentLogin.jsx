import React, { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeUserType, changeAuth } from '../../../store/ui';

import Styles from '../../../pages/Authentication/Login.module.scss';
import Axios from '../../../config/axios';

import ForgetPassModel from '../../utils/modal'

import Gif from '../../../assets/spinner5.gif'

const StudentLogin = ({ setmethod }) => {
  const [values, setValues] = useState({
    studentid: '777',
    password: '222333444',
  });

  const [openModal, setOpenModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const [idError, setidError] = useState(false)
  const [passError, setpassError] = useState(false)
  const [backendError, setbackendError] = useState(false)



  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

        // // frontEnd Error Handaling 
        // let idError = values.studentid ? false : true 
        // let passError = values.password ? false : true 
        // setError({ ...error , id : idError , password : passError })

    setShowLoader(true)
    Axios.post('student/login', {
      id_number: values.studentid,
      password: values.password,
    }).then((res) => { 
      setShowLoader(false)
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('profile_id', res.data.user.profile_id);
      localStorage.setItem('profile_type', res.data.user.profile_type);
      localStorage.setItem('id_number', res.data.user.id_number);
      // history.push('/dashboard');
      dispatch(changeUserType({ userType: 'student' , id_number : res.data.user.id_number })); 
      dispatch(
        changeAuth({
          isAuthenticated: true,
          authToken: res.data,
          id_number : res.data.user.id_number
        }),
      );
    }).catch((err) => {
      setShowLoader(false)
      setbackendError(true)
    })
  };


  useEffect(() => {
    values.studentid === '' ?  setidError(true) : setidError(false)
    values.password === '' ?  setpassError(true ) :  setpassError(false )
  }, [values])

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
            { idError && <p style={{color:'crimson',marginBottom:20,textAlign:'center'}}> *** Please Enter The Student ID </p> }
      <label className={Styles.label}>
        <input
          type="password"
          placeholder="Password"
          className={Styles.input}
          onChange={handleChange('password')}
          value={values.password}
        />
      </label>
            { passError && <p style={{color:'crimson',marginBottom:20,textAlign:'center'}}> *** Please Enter The Password </p> }
      
      <button
        className={`${Styles.red} ${Styles.button}`}
        style={{width:'90%'}}
        type="button"
        onClick={handleSubmit}
        disabled={idError || passError}
      >
        <i className={`${Styles.icon}`}></i> 
          { showLoader ? <img alt='Loading' style={{width:25}} src={Gif}></img> : 'Log in'}
      </button>

      { backendError && <p style={{color:'crimson',marginTop:20,textAlign:'center'}}> *** Incorrect Student ID / Password </p> }

      {/* <p style={{ textAlign: 'right', marginTop: 28 }}>
        <a href="http://localhost:3000/">Forgot Password?</a>
      </p> */}

      <div className={Styles.segment}>
        <button className={`${Styles.unit} ${Styles.button}`} 
          type="button"
          onClick={(e) => setmethod(true)}
          >

          <span> GO Back </span>
        </button>
        <button
          className={`${Styles.unit} ${Styles.button}`}
          type="button"
          onClick={(e) => setOpenModal(prevState => !prevState)}
        >
          <span> Forgot Password </span>
        </button>
        { openModal && <ForgetPassModel openModal={openModal} setOpenModal={setOpenModal}/> }
      </div>
    </form>
  );
};

export default StudentLogin;
