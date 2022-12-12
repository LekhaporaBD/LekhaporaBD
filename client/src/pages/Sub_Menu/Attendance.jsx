import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Header from '../../components/utils/header';
import attendanceImg from '../../assets/Sub_menu/attendance.svg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Calender from '../../components/Calender/Calender';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  img: {
    width: '100%',
    paddingTop: 75,
  },

  CalenderHolder: {
    display: 'flex',
    alignItems: 'center',
    height: '85vh',
  },
}));

const Attendance = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1400px)');
  return (
    <div>
      <Header data={'Attendance'} />
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{ width: '100%', margin: '0 auto' }}
      >
        <Grid
          item
          xs={matches ? 12 : 5}
          style={{ display: matches ? 'none' : 'flex' }}
        >
          <img
            src={attendanceImg}
            alt="attendance Img"
            className={classes.img}
          />
        </Grid>

        <Grid
          item
          style={{ marginTop: matches ? '5rem' : '0' }}
          xs={matches ? 12 : 7}
          className={classes.CalenderHolder}
        >
          <Calender />
        </Grid>
      </Grid>
    </div>
  );
};

export default Attendance;
