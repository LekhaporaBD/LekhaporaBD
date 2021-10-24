import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, IconButton, Collapse } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Title from '../../components/utils/Title';
import Header from '../../components/utils/header';
import { Alert, AlertTitle } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import axios from '../../config/axios';
import { useSelector } from 'react-redux';
import AssignmentPost from '../../components/Assignment/AssignmentPost';
import PrevAssignment from '../../components/Assignment/PrevAssignment';

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
      padding: '3.5rem 1rem',
    },
  },
  container: {
    flexDirection: 'column',
    padding: '2rem 5rem',
    [theme.breakpoints.down('600')]: {
      padding: '1.5rem ',
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
    [theme.breakpoints.down('600')]: {
      margin: '10px 50px',
    },
  },
}));

const Assignment = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:1200px)');

  const [open, setOpen] = useState(true);
  const [Assignments, setAssignments] = useState([]);

  const userType = useSelector(({ ui }) => ui.userType);
  const courseId = useSelector(({ ui }) => ui.classroom.courseId);

  useEffect(() => {
    axios.get(`student/course/${courseId}/assignments`).then((res) => {
      const assignments = res.data.map((assignment) => ({
        AssignmentOn: assignment.name,
        GivenOn: assignment.mark,
        SubmissionDate: assignment.deadline,
      }));
      setAssignments(assignments);
    });
  }, [courseId]);
  console.log(Assignments);
  return (
    <>
      <Header data="Assignments" />
      {userType === 'student' ? (
        <>
          <Collapse in={open}>
            <Alert
              severity="info"
              style={{
                fontSize: 18,
                marginTop: 30,
                background: '#ebecf0',
                boxShadow:
                  ' inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF',
                borderRadius: 8,
              }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="medium"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="medium" />
                </IconButton>
              }
            >
              <AlertTitle style={{ fontSize: 28 }}>Info</AlertTitle>
              You have a deadline today. <strong>check it out!</strong>
            </Alert>
          </Collapse>
          <Grid container spacing={3} className={classes.container}>
            {Object.keys(Assignments).map((asnmt, idx) => (
              <div>
                <Title title={`Assignment - ${idx + 1}`} />

                <Grid item xs={12}>
                  <Paper className={classes.cardHolder}>
                    <p className={classes.text}>
                      Assignment On :
                      <span className={classes.textValue}>
                        {Assignments[asnmt].AssignmentOn}
                      </span>
                    </p>
                    <p className={classes.text}>
                      Mark :
                      <span className={classes.textValue}>
                        {Assignments[asnmt].GivenOn}
                      </span>
                    </p>
                    <p className={classes.text}>
                      Submission Date :
                      <span className={classes.textValue}>
                        {Assignments[asnmt].SubmissionDate}
                      </span>
                    </p>
                    <button className={classes.btn}> Submit </button>
                  </Paper>
                </Grid>
              </div>
            ))}
          </Grid>
        </>
      ) : (
        <div
          style={{
            width: matches ? '95%' : '70%',
            margin: '0 auto',
            marginTop: 50,
          }}
        >
          <AssignmentPost lectures={Assignments} setLectures={setAssignments} />
          <p
            style={{ fontSize: 22, color: '#0d236d', margin: '40px 20px 20px' }}
          >
            Your Previous Assignments ...
          </p>
          <PrevAssignment classes={classes} lectures={Assignments} />
        </div>
      )}
    </>
  );
};

export default Assignment;
