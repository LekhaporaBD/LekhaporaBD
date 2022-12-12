import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#ffecd0',
    color: '#333',
    fontSize: 16,
    [theme.breakpoints.down(400)]: {
      padding: '16px 4px',
    },
  },
  body: {
    fontSize: 14,
    [theme.breakpoints.down(400)]: {
      padding: '16px 4px',
    },
  },
  '& span': {
    display: 'none',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
    maxWidth: '100%',
  },
});

function MobileRoutine({ data }) {
  const classes = useStyles();
  const time = Object.keys(data);
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday'];
  const period = {};
  days.forEach((d) => {
    period[d] = {};
    time.forEach((t) => {
      const course = data[t][d];
      if (
        course &&
        Object.keys(course).length !== 0 &&
        course.constructor === Object
      )
        period[d][t] = course;
    });
  });
  return (
    <div>
      {days.map((day) => (
        <TableContainer component={Paper} style={{ marginBottom: 20 }}>
          <h3
            style={{
              fontSize: 18,
              width: '100%',
              textAlign: 'center',
              padding: '10px 0',
              backgroundColor: '#ffc280',
              color: '#6b4a17',
            }}
          >
            {day.toUpperCase()}
          </h3>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell align="right">Course</StyledTableCell>
                <StyledTableCell align="right">Teacher</StyledTableCell>
                <StyledTableCell align="right">Class</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(period[day]).map((time) => {
                const course = period[day][time];
                return (
                  <StyledTableRow key={day + time}>
                    <StyledTableCell component="th" scope="row">
                      {time}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {course.code}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {course.teacherID}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {course.classroom}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}

export default MobileRoutine;
