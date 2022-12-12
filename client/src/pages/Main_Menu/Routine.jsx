import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import blackboard from '../../assets/blackboard.jpg';
import greenboard from '../../assets/greenboard.jpg';
import Header from '../../components/utils/header';
import MobileRoutine from '../../components/Routine/MobileRoutine';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: '3.5rem auto 0',
    fontFamily: "'Nunito', sans-serif",
    [theme.breakpoints.down(1700)]: {
      width: '100%',
    },
  },
  board: {
    display: 'grid',
    width: '100%',
    padding: '2rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: '#e4e4e4',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
    borderRadius: 5,
    borderWidth: '15px',
    borderStyle: 'solid',
    textAlign: 'center',
    [theme.breakpoints.down(1700)]: {
      padding: '1rem',
    },
    [theme.breakpoints.down(1100)]: {
      padding: '.5rem',
      borderWidth: '10px',
    },
    [theme.breakpoints.between(768, 850)]: {
      width: '60rem',
    },
    [theme.breakpoints.down(500)]: {
      width: '60rem',
    },
    '& > *': {
      border: '1px solid white',
      padding: '1.5rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down(1100)]: {
        padding: '1rem .5rem',
      },
      '& > span': {
        [theme.breakpoints.down(1000)]: {
          display: 'none',
        },
      },
    },
  },
  coursecode: {
    fontSize: '1.6rem',
    fontWeight: 400,
    [theme.breakpoints.down(1100)]: {
      fontSize: '1.4rem',
    },
  },
  teacherID: {
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: 1,
    [theme.breakpoints.down(1100)]: {
      fontSize: '1.3rem',
    },
  },
}));

// If there is any lab class, Then we will skip the second period...
const data = {
  '08.00 AM - 09.30AM': {
    sunday: {},
    monday: {
      code: 'CSE 485',
      teacherID: 'KFA',
      classroom: 'STR 1609',
    },
    tuesday: {},
    wednesday: {},
    thursday: {},
  },
  '09.40 AM - 11.10AM': {
    sunday: {
      code: 'CSE 485',
      teacherID: 'KFA',
      classroom: 'STR 1609',
    },
    monday: {},
    tuesday: {},
    wednesday: {
      lab: true,
      code: 'CSE 404',
      teacherID: 'SBT',
      classroom: 'STR 902',
    },
    thursday: {},
  },
  '11.20AM - 12.50PM': {
    sunday: {
      code: 'CSE 431',
      teacherID: 'MH',
      classroom: 'STR 1609',
    },
    monday: {
      code: 'CSE 403',
      teacherID: 'SBT',
      classroom: 'STR 906',
    },
    tuesday: {
      code: 'CSE 403',
      teacherID: 'SBT',
      classroom: 'STR 906',
    },
    thursday: {},
  },
  '01.00PM - 02.30PM': {
    sunday: {},
    monday: {
      lab: true,
      code: 'CSE 432',
      teacherID: 'MH',
      classroom: 'STR 1613',
    },
    tuesday: {},
    wednesday: {
      code: 'CSE 431',
      teacherID: 'MH',
      classroom: 'STR 703',
    },
    thursday: {},
  },
  '02.40AM - 04.40PM': {
    sunday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
  },
};

const Routine = () => {
  const userType = useSelector(({ ui }) => ui.userType);
  const classes = useStyles();
  const medium = useMediaQuery('(max-width:900px)');

  if (medium) {
    return (
      <>
        <Header data={userType === 'teacher' ? 'Schedule' : 'Routine'} />
        <MobileRoutine data={data} />
      </>
    );
  }

  return (
    <>
      <Header data={userType === 'teacher' ? 'Schedule' : 'Routine'} />
      <div className={classes.root}>
        <div
          className={classes.board}
          style={{
            backgroundImage:
              userType === 'teacher'
                ? `url(${greenboard})`
                : `url(${blackboard})`,
            borderColor: userType === 'teacher' ? '#56360c' : '#f5a743',
          }}
        >
          <div>TIME</div>
          <div>
            SUN<span>DAY</span>
          </div>
          <div>
            MON<span>DAY</span>
          </div>
          <div>
            TUE<span>SDAY</span>
          </div>
          <div>
            WED<span>NESDAY</span>
          </div>
          <div>
            THU<span>RSDAY</span>
          </div>

          {Object.keys(data).map((time, row) => {
            const courses = Object.keys(data[time]).map((day, column) => {
              const course = data[time][day];
              // Gridrow: Spanning two row + gridColumn: Positioning the column
              const styles = {
                gridRow: `${row + 2}/${row + 4}`,
                gridColumn: `${column + 2}/${column + 3}`,
              };
              return (
                <div style={course.lab && styles}>
                  <h5 className={classes.coursecode}>{course.code}</h5>
                  <h5 className={classes.teacherID}>{course.teacherID}</h5>
                  <h5 className={classes.classroom}>{course.classroom}</h5>
                </div>
              );
            });
            return (
              <>
                <div style={{ textAlign: 'center' }}>{time}</div>
                {courses}
              </>
            );
          })}
          {/* <div>08.00 AM - 09.30AM</div>
          <div></div>
          <div>CSE-485</div>
          <div></div>
          <div></div>
          <div></div>

          <div>09.40 AM - 11.10AM</div>
          <div>CSE-485</div>
          <div></div>
          <div></div>
          <div>CSE-404</div>
          <div></div>

          <div>11.20AM - 12.50PM</div>
          <div>CSE 431</div>
          <div>CSE-403</div>
          <div>CSE-403</div>
          <div></div>
          <div></div>

          <div>01.00PM - 02.30PM</div>
          <div>CSE-486</div>
          <div>CSE 432</div>
          <div></div>
          <div>CSE 431</div>
          <div></div>

          <div>02.40AM - 04.40PM</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> */}
        </div>
      </div>
    </>
  );
};

export default Routine;
