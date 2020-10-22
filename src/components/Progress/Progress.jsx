import React from 'react'
import { Paper , Avatar } from '@material-ui/core';
import styles from './Progress.module.scss'

const courses = { Data_Structure:{progress: '85%'} , Computer_Netwokrs:{progress: '95%'} , Electronic_Circuits:{progress: '73%'} }

const Progress = () => {
    return (
        <div className={styles.root}>
            <Paper elevation={1} className={styles.allClassess}>
                <p className={styles.allClassess_heading}>
                    My Classess
                </p>

                <ul className={styles.course_holder}>
                {
                    Object.keys(courses).map( course => (

                        <li className={`${styles.course} ${styles.flex}`}>
                            <div className={styles.flex}>
                                <Avatar> EX </Avatar>
                                <span> {course} </span>
                            </div>
                            <p> {courses[course].progress} </p>
                        </li>

                    ))
                }
            </ul>
            </Paper>
        </div>
    )
}

export default Progress
