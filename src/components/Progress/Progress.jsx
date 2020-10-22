import React from 'react'
import { Grid , Paper , Avatar } from '@material-ui/core';
import styles from './Progress.module.scss'
import Progress_svg from '../../assets/progrss_svg.png'
 
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Underline from '../utils/Underline';

const courses = { Data_Structure:{progress: '85%'} , Computer_Netwokrs:{progress: '95%'} ,
                     Electronic_Circuits:{progress: '73%'} , Software_Design:{progress:'75%'} ,
                     Compiler_Design:{progress:'78%'} ,} 

const nameShorter = name => {
    let ar = name.split('_')
    return `${ar[0][0]}${ar[1][0]}`
}

const Progress = () => {
    return (
        <div className={styles.root}>

        <Grid container spacing={2}>

            <Grid item xs={3}>
                <Paper elevation={1} className={styles.allClassess}>
                    <h2 > My Classess  </h2> <Underline/>

                    <ul className={styles.course_holder}>
                    {
                        Object.keys(courses).map( course => (

                            <li className= {styles.flex} >
                                <div className={styles.flex}>
                                    <Avatar className={styles.course_avatar}> {nameShorter(course)} </Avatar>
                                    <span> {course} </span>
                                </div>
                                <div className={styles.flex}>
                                    <h4> {courses[course].progress} </h4>
                                    <ArrowForwardIosIcon style={{fill:'red' , margin:'0 6px'}}/>
                                </div>
                            </li>

                            ))
                    }
                    </ul>
                </Paper>
            </Grid>

            <Grid item xs={9}>
                <Paper elevation={1} className={`${styles.flex} ${styles.details}`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat assumenda iste.
                        Dignissimos unde aut delectus perspiciatis sint laboriosam vitae, amet aperiam eum
                        earum dolorem nobis eos libero repellat nostrum quasi, quo commodi cupiditate dolorum 
                        iste. Laborum accusantium blanditiis quisquam eveniet tenetur repudiandae eius ab! 
                        Repudiandae, aliquid. Enim, numquam dolore!
                    </p>
                    <img src={ Progress_svg } alt="" srcset="" style={{height:300}}/>
                </Paper>
            </Grid>

        </Grid>

        </div>
    )
}

export default Progress
