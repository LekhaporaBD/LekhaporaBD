import React from 'react';
import { Grid, Paper } from '@material-ui/core';

const PrevLecture = ({ classes, lectures }) => {
  return (
    <Grid
      container
      spacing={3}
      className={classes.container}
      style={{ padding: '2rem 0rem' }}
    >
      {lectures.map((lecture) => (
        <div style={{ marginBottom: '2rem' }}>
          <Grid item xs={12}>
            <Paper className={classes.cardHolder}>
              <p
                className={classes.text}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                Assignment On :
                <span className={classes.textValue}>
                  {lecture.AssignmentOn}
                </span>
              </p>
              <p
                className={classes.text}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                Mark :
                <span className={classes.textValue}>{lecture.GivenOn}</span>
              </p>
              <p
                className={classes.text}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                Submission Date :
                <span className={classes.textValue}>
                  {lecture.SubmissionDate}
                </span>
              </p>
              <button className={classes.btn}> Submit </button>
            </Paper>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

export default PrevLecture;
