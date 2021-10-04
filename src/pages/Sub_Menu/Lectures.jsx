import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Title from '../../components/utils/Title';
import Header from '../../components/utils/header';
import { useSelector } from 'react-redux';

import LecturePost from '../../components/LectureTeacher/LecturePost';
import PrevLecture from '../../components/LectureTeacher/PrevLecture';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  cardHolder: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '35px 0',
    boxShadow:
      'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF !important',
    background: '#ebecf0',
    borderRadius: 8,
    [theme.breakpoints.down('1300')]: {
      flexDirection: 'column',
      padding: '3.5rem 3rem',
    },
  },
  container: {
    flexDirection: 'column',
    padding: '2rem 5rem',
    [theme.breakpoints.down('600')]: {
      padding: '2rem ',
    },
  },
  text: {
    fontSize: 25,
  },
  textValue: {
    color: '#0d236d',
  },
  btn: {
    padding: '10px 30px',
    fontSize: 20,
    borderRadius: 25,
    cursor: 'pointer',
    background: '#ebecf0',
    border: '1px solid',
    color: '#0d236d',
    boxShadow: '-5px -5px 20px #FFF, 5px 5px 20px #BABECC',
    transition: 'all 0.2s ease-in-out',

    '&:hover': { boxShadow: '-2px -2px 5px #FFF, 2px 2px 5px #BABECC' },
    '&:active': {
      boxShadow: 'inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF',
    },
  },
}));

const lectures = {
  '1st Class': {
    fileName: 'All About HTML',
    date: '21-12-2020',
    fileType: 'pdf',
  },
  '2nd Class': {
    fileName: 'Learn About CSS',
    date: '28-12-2020',
    fileType: 'mp4',
  },
  '3rd Class': {
    fileName: 'Make A Website',
    date: '5-01-2021',
    fileType: 'ppt',
  },
  '4th Class': { fileName: 'Learn Js', date: '8-01-2021', fileType: 'word' },
  '5th Class': { fileName: 'Javascript', date: '8-01-2021', fileType: 'pdf' },
};

const Lectures = () => {
  const userType = useSelector(({ ui }) => ui.userType);

  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1200px)');

  return (
    <>
      <Header data="Lectures" />

      {userType === 'student' ? (
        <Grid container spacing={3} className={classes.container}>
          {Object.keys(lectures).map((lec, num) => (
            <div>
              <Title title={Object.keys(lectures)[num]} />

              <Grid item xs={12}>
                <Paper className={classes.cardHolder}>
                  <p className={classes.text}>
                    FileName :
                    <span className={classes.textValue}>
                      {lectures[lec].fileName}
                    </span>
                  </p>
                  <p className={classes.text}>
                    Date :
                    <span className={classes.textValue}>
                      {lectures[lec].date}
                    </span>
                  </p>
                  <p className={classes.text}>
                    Type :
                    <span className={classes.textValue}>
                      {lectures[lec].fileType}
                    </span>
                  </p>
                  <button className={classes.btn}> Download </button>
                </Paper>
              </Grid>
            </div>
          ))}
        </Grid>
      ) : (
        <div
          style={{
            width: matches ? '95%' : '70%',
            margin: '0 auto',
            marginTop: 50,
          }}
        >
          <LecturePost />
          <p
            style={{ fontSize: 22, color: '#0d236d', margin: '40px 20px 20px' }}
          >
            Your Previous Announcements ...
          </p>
          <PrevLecture />
        </div>
      )}
    </>
  );
};

export default Lectures;
