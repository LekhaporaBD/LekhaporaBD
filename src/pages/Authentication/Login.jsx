import React,{useState} from 'react'
import Styles from './Login.module.scss'
import logo from '../../assets/logo.png' 
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import TeacherLogin from '../../components/Login/TeacherLogin/TeacherLogin';
import StudentLogin from '../../components/Login/StudentLogin/StudentLogin';
import StudentRegistration from '../../components/Login/StudentRegistration/StudentRegistration';

const Login = () => {
    const [method, setmethod] = useState('initial');
    const [showSignUp, setshowSignUp] = useState(false);
    
    return (
        <div className={Styles.container}> 
            <div className={Styles.mainDiv}>
                { method  !== 'initial' ? <KeyboardBackspaceIcon  className={Styles.backIcon} /> : null }
                <div style={{marginBottom : '8rem' , textAlign:'center'}}>
                    <img src={logo} alt="" srcset=""/>
                </div>
                { method === 'student' ? 
                    showSignUp ? <StudentRegistration/> : <StudentLogin setshowSignUp={setshowSignUp}/> : 
                    (<div>
                        <button 
                            className={`${Styles.red} ${Styles.button}`} 
                            type="button" 
                            onClick={ e => setmethod('student')}
                        >
                            <i className={`${Styles.icon}`}></i>
                            Login As A Student
                        </button> 
                        <br/>
                        <TeacherLogin/>
                        <br/>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Login
