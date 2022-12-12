import React from 'react';
import Header from '../../components/utils/header';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/studentList.svg';
import StudentList from '../../components/studentList/studentList';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  img: {
    width: '100%',
  },
}));

const Students = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1400px)');
  const u900 = useMediaQuery('(max-width:900px)');
  return (
    <div className={classes.container}>
      <Header data="Students" />
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{
          width: u900 ? '100%' : '90%',
          margin: '0 auto',
          height: matches ? '' : '94vh',
        }}
      >
        <Grid item xs={matches ? 12 : 6}>
          <img src={Img} alt="" className={classes.img} />
        </Grid>

        <Grid
          item
          xs={matches ? 12 : 6}
          style={{ margin: matches ? '5rem auto' : '0 auto' }}
        >
          <StudentList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Students;
