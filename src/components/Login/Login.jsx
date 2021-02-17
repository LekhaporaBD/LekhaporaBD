import React from 'react'
import Styles from './Login.module.scss'
import logo from '../../assets/logo.png' 

const Login = () => {
    return (
        <div className={Styles.container}> 
        <div className={Styles.mainDiv}>

            <div style={{marginBottom : 20 , textAlign:'center'}}>
                <img src={logo} alt="" srcset=""/>
            </div>

            <form className={Styles.form}>

                <label className={Styles.label}>
                    <input  type="text" placeholder="Student / Teacher Id" className={Styles.input}/>
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
                    <button className={`${Styles.unit} ${Styles.button}`} type="button">
                        <span> Sign Up Here. </span>
                    </button>
                </div>
    
            </form>

        </div>
        </div>
    )
}

export default Login
