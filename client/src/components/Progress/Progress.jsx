import React from 'react';
import { Grid, Paper, Avatar, Chip } from '@material-ui/core';
import styles from './Progress.module.scss';
import Progress_svg from '../../assets/progress1.svg';

import Underline from '../utils/Underline';
import Attendance from './Attendence';
import PieChart from './PieChart';
import PieChartExtra from './PieChartExtra';
import TimeLine from './Timeline';



const passed = Math.random() * 51 + 50;
const data = [
  { classState: 'Passed Classes', value: Math.ceil(100 - passed) },
  { classState: 'All Classes', value: Math.ceil(passed) },
];
const classTest = Math.random() * 51 + 50;

const test = [
  { classState: 'Passed Classes', value: Math.ceil(100 - classTest) },
  { classState: 'All Classes', value: Math.ceil(classTest) },
];

const colors = ['#bdecff', '#42a9d6'];

const nameShorter = (name) => {
  let ar = name.split(' ');
  return ar[1] ? `${ar[0][0]}${ar[1][0]}` : `${ar[0][0]}${ar[0][1]}` ;
};

const getDate = () => {
  let d = new Date();

  let monthNames = [
    'January','February','March','April',
    'May','June','July','August',
    'September','October','November','December',
  ];

  return monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
};

const Progress = ({classroom}) => { 
  return (
    <div className={styles.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            elevation={1}
            className={`${styles.allClassess} ${styles.paper}`} > 

            <h2> My Classess </h2> <Underline />
            <ul className={styles.course_holder}>

              {classroom && classroom.map((course) => ( 
                <li className={styles.flex}>
                  <div className={styles.flex}>
                    <Avatar className={styles.course_avatar}>
                      {nameShorter(course.name)}
                    </Avatar>
                    <span className={styles.course_name}> {course.name} </span>
                  </div>
                  <div className={styles.flex}>
                    <h5>{Math.floor(Math.random() * 51) + 50}</h5>
                    {/* <ArrowForwardIosIcon
                      style={{ fill: 'red', margin: '0 6px' }}
                    /> */}
                  </div>
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>

        <Grid item xs={9}>
          <Paper
            elevation={1}
            className={`${styles.flex} ${styles.details} ${styles.paper}`}
          >
            <p style={{fontSize:14 , marginRight:45 , textAlign:'justify'}}>
              Your child is able to add and subtract numbers up to 20 using
              various manipulatives. This was evident when he was working
              independently to solve a real-world problem by adding toys in the
              classroom toy bin. As a next step, they should continue to add to
              larger numbers to encourage his skills. You can support him by
              asking him to add his own toy piles at home.
            </p>
            <img
              src={Progress_svg}
              alt=""
              srcset=""
              style={{ height: 230 }}
              // className={styles.paper}
            />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            elevation={1}
            className={`${styles.attendance} ${styles.paper}`}
          >
            <h2>Attendance (weeks) </h2>
            <Underline />
            <Attendance />
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={1} className={`${styles.pie} ${styles.paper}`}>
            <h2> Assignment</h2>
            <Underline />
            <div className={styles.chip}>
              <Chip
                style={{ fontSize: '1rem' , marginRight:8 , marginBottom:8}}
                label="All Classes"
                variant="outlined"
                avatar={<Avatar style={{ background: '#bdecff' }}> </Avatar>}
              />
              <Chip
                style={{ fontSize: '1rem' }}
                label="Class Done"
                variant="outlined"
                avatar={<Avatar style={{ background: '#42a9d6' }}> </Avatar>}
              />
            </div>
            <div>
              <PieChart data={data} colors={colors} />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={1} className={`${styles.pie} ${styles.paper}`}>
            <h2> Class Test </h2>
            <Underline />
            <div className={styles.chip}>
              <Chip
                 style={{ fontSize: '1rem' , marginRight:8, marginBottom:8}}
                label="All Class Test"
                variant="outlined"
                avatar={<Avatar style={{ background: '#bdecff' }}> </Avatar>}
              />
              <Chip
                style={{ fontSize: '1rem' }}
                label="Attended"
                variant="outlined"
                avatar={<Avatar style={{ background: '#42a9d6' }}> </Avatar>}
              />
            </div>
            <div>
              <PieChartExtra data={test} colors={colors} />
            </div>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper elevation={1} className={`${styles.timeline} ${styles.paper}`}>
            {/* <h2> Course TimeLine </h2> */}
            {/* <Underline/> */}

            <TimeLine />
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={1} className={`${styles.timeline} ${styles.paper}`}>
            <h2> Date </h2>
            <Underline />
            <div className={styles.date}>{getDate()}</div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Progress;
