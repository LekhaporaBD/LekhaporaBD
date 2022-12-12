import React from 'react'
import Classes from './forgotPass.module.scss'
import { useSelector } from "react-redux";

const ForgotPass = ({handleClose}) => {
    const userData = useSelector(({ui}) => (ui.profile.profile_type))

    return (
        <div>
            <div className={Classes.switch} >
                <div className={Classes.circle}></div>
                <div className={`${Classes.circle} ${Classes.circleT}`}></div> 
                <div className={Classes.container} >
                    <h2 className={`${Classes.title}`}> {userData ? "Document Submitted!" : 'Forgot Password !' } </h2>
                    <p className={`${Classes.description}`}> 
                            {userData ? "You succesfully submitted One document." :
                                    'Please Connect With Your Admin For This Help.' } 
                    </p>
                    <button className={`${Classes.button} ${Classes.color}`} onClick={() => handleClose()}> Close This Modal </button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass
