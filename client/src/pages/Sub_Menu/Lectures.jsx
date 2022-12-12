import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Title from '../../components/utils/Title';
import Header from '../../components/utils/header';

import LecturePost from '../../components/LectureTeacher/LecturePost';
import PrevLecture from '../../components/LectureTeacher/PrevLecture';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from '../../config/axios';

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
    fontSize: 20,
  },
  textValue: {
    color: '#0d236d',
  },
  btn: {
    padding: '10px 30px',
    fontSize: 17,
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

const Lectures = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1200px)');

  const [lectures, setLectures] = useState([]);

  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  useEffect(() => {
    axios.get(`${userType}/course/${courseId}/lecture`).then((res) => { console.log(res.data)
      const lectures = res.data.lectures.map((lecture) => ({
        id: lecture.id,
        fileName: lecture.name,
        term: lecture.term,
        fileType: lecture.fileType,
        link: lecture.link,
      }));
      setLectures(lectures);
    });
  }, [courseId, userType]);

  return (
    <>
      <Header data="Lectures" />
      {userType === 'student' ? (
        <Grid container spacing={3} className={classes.container}>
          {Object.keys(lectures).map((lec, idx) => (
            <div>
              <Title title={`Lecture - ${idx + 1}`} />

              <Grid item xs={12}>
                <Paper className={classes.cardHolder}>
                  <p className={classes.text}>
                    FileName :
                    <span className={classes.textValue}>
                      {lectures[lec].fileName}
                    </span>
                  </p>
                  <p className={classes.text}>
                    Term :
                    <span className={classes.textValue}>
                      {lectures[lec].term}
                    </span>
                  </p>
                  <p className={classes.text}>
                    Type :
                    <span className={classes.textValue}>
                      {lectures[lec].fileType}
                    </span>
                  </p>
                  <a
                    href={lectures[lec].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.btn}
                  >
                    Download
                  </a>
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
          <LecturePost lectures={lectures} setLectures={setLectures} />
          <p
            style={{ fontSize: 22, color: '#0d236d', margin: '40px 20px 20px' }}
          >
            Your Previous Lectures ...
          </p>
          <PrevLecture lectures={lectures} setLectures={setLectures} />
        </div>
      )}
    </>
  );
};

export default Lectures;
