import React from 'react'
import { Grid , Paper , Avatar , Chip } from '@material-ui/core';
import styles from './Progress.module.scss'
import Progress_svg from '../../assets/progrss_svg.png'
 
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Underline from '../utils/Underline';
import Attendance from './Attendence'
import PieChart from './PieChart'
import PieChartExtra from './PieChartExtra'
import TimeLine from './Timeline'

const courses = { 
                    Data_Structure:{progress: '85%'} , Computer_Netwokrs:{progress: '95%'} ,
                     Electronic_Circuits:{progress: '73%'} , Software_Design:{progress:'75%'} ,
                     Compiler_Design:{progress:'78%'} ,
                } 

const data = [
    {classState:'Passed Classes',value:23},
    {classState: 'All Classes', value: 48}];
    
const colors = ['#bdecff', '#42a9d6'];

const nameShorter = name => {
    let ar = name.split('_')
    return `${ar[0][0]}${ar[1][0]}`
}

const getDate = () => {
    let d = new Date();
    let monthNames = [ 
                            "January", "February", "March", "April",
                            "May", "June", "July", "August", "September", "October",
                            "November", "December" 
                        ];
    
    return monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
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

            <Grid item xs={6}>
                <Paper elevation={1} className={styles.attendance}>
                    <h2>
                        Attendance
                    </h2>
                    <Underline/>
                    <Attendance />
                </Paper>
            </Grid>
        
            <Grid item xs={3}>
                <Paper elevation={1} className={styles.pie}>
                    <h2> Assignment</h2> 
                    <Underline/>
                    <div className={styles.chip} >
                        <Chip style={{fontSize:'1.2rem'}} label="All Classes" variant="outlined" avatar={<Avatar style={{background:'#bdecff'}}> </Avatar>}/>
                        <Chip style={{fontSize:'1.2rem'}} label="Class Done" variant="outlined"  avatar={<Avatar style={{background:'#42a9d6'}}> </Avatar>}/>
                    </div>
                    <div>
                        <PieChart data={data} colors={colors}/>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={3}>
                <Paper elevation={1} className={styles.pie}>
                    <h2> Class Test </h2> 
                    <Underline/>
                    <div className={styles.chip} >
                        <Chip style={{fontSize:'1.2rem'}} label="All Classes" variant="outlined" avatar={<Avatar style={{background:'#bdecff'}}> </Avatar>}/>
                        <Chip style={{fontSize:'1.2rem'}} label="Class Done" variant="outlined"  avatar={<Avatar style={{background:'#42a9d6'}}> </Avatar>}/>
                    </div>
                    <div>
                        <PieChartExtra data={data} colors={colors}/>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={8}>
                <Paper elevation={1} className={styles.timeline}>
                    {/* <h2> Course TimeLine </h2> */}
                    {/* <Underline/> */}

                    <TimeLine/>
                </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper elevation={1} className={styles.timeline}>
                    <h2> Date </h2>
                    <Underline/>
                    <div className={styles.date}>
                       {getDate()}
                    </div>
                </Paper>
            </Grid>

        </Grid>

        </div>
    )
}

export default Progress
