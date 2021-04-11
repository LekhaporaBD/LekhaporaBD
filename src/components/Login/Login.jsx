import React,{useState} from 'react'
import Styles from './Login.module.scss'
import logo from '../../assets/logo.png' 
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Login = () => {

    const [method, setmethod] = useState('initial')
    const [showSignUp, setshowSignUp] = useState(false)
    // const [showback, setshowback] = useState(false)

    let comp 
    
    if( method === 'initial'){
        comp =  <div>
                <button  className={`${Styles.red} ${Styles.button}`} type="button" onClick={ e => setmethod('student')}>
                        <i className={`${Styles.icon}`}></i>
                            Login As A Student
                </button> <br/>

                <button  className={`${Styles.red} ${Styles.button}`} type="button" onClick={ e => setmethod('teacher')}>
                        <i className={`${Styles.icon}`}></i>
                            Login As A Teacher
                </button> <br/>
            </div>
    }

    else if(showSignUp){
        comp = <form className={Styles.form}>

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
                Sign in
        </button>

        </form> 
    }

    else if(method === 'student'){
        comp =  <form className={Styles.form}>

        <label className={Styles.label}>
            <input  type="text" placeholder="Student " className={Styles.input}/>
        </label>
        <label className={Styles.label}>
            <input type="password" placeholder="Password" className={Styles.input}/>
        </label>
        <button  className={`${Styles.red} ${Styles.button}`} type="button">
            <i className={`${Styles.icon}`}></i>
                Log in
        </button>

        <p style={{textAlign:'right', marginTop:28}}>
            <a href='http://localhost:3000/'>Forgot Password?</a>
        </p>

        <div className={Styles.segment}>
            <button  className={`${Styles.unit} ${Styles.button}`} type="button">
                <span> Login With Google </span>
            </button>
            <button className={`${Styles.unit} ${Styles.button}`} type="button" onClick={ e => setshowSignUp(true) }>
                <span> Sign Up Here. </span>
            </button>
        </div>

        </form> 
    }

    else if(method === 'teacher'){
        comp = <form className={Styles.form}>

            <label className={Styles.label}>
                <input  type="text" placeholder=" Teacher Id" className={Styles.input}/>
            </label>
            <label className={Styles.label}>
                <input type="password" placeholder="Password" className={Styles.input}/>
            </label>
            <button  className={`${Styles.red} ${Styles.button}`} type="button">
                <i className={`${Styles.icon}`}></i>
                    Log in
            </button> <br/>

    </form>
    }


    return (
        <div className={Styles.container}> 
        <div className={Styles.mainDiv}>

            {
               method  !== 'initial' ? <KeyboardBackspaceIcon  className={Styles.backIcon} /> : null
            }

            <div style={{marginBottom : 20 , textAlign:'center'}}>
                <img src={logo} alt="" srcset=""/>
            </div>

            { comp }

        </div>
        </div>
    )
}

export default Login
