import React from 'react'
import Header from '../../components/utils/header'
import attendanceImg from '../../assets/Sub_menu/attendance.svg'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Calender from '../../components/Calender/Calender'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  img : {
    width : '100%',
    paddingTop : 75
  },

  CalenderHolder: {
    display: 'flex',
    alignItems : 'center',
    height: '85vh'
  }

}));


const Attendance = () => {
  const classes = useStyles();

  return (
    <div >
      <Header data={'Attendance'} />

      <Grid container spacing={3} alignItems="center" style={{width:'90%', margin:'0 auto'}}>
        <Grid item xs={5} > 
              <img src={attendanceImg} alt='attendance Img' className={classes.img}/>
        </Grid>


        <Grid item xs={7} className={classes.CalenderHolder} > 
          <Calender />
        </Grid>
      </Grid>
      
      
    </div>
  )
}

export default Attendance
