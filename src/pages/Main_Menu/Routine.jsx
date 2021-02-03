import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import blackboard from "../../assets/blackboard.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
    fontFamily: "'Nunito', sans-serif"
  },
  board: {
    display: "grid",
    width: "100%",
    padding: '2rem',
    backgroundImage: `url(${blackboard})`,
    color: '#e4e4e4',
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
    border: '15px solid #f5a743',
    borderRadius: 5,
    // placeSelf: 'center',
    '& > *': {
      border: '1px solid white',
      padding: '1.5rem 1rem',
      // textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  coursecode: {
    fontSize: '1.6rem',
    fontWeight: 400,
  },
  teacherID: {
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: 1
  }
}));

// If there is any lab class, Then we will skip the second period...
const data = {
  '08.00 AM - 09.30AM': {
    sunday: {},
    monday: {
      code: 'CSE-485',
      teacherID: 'KFA',
      classroom: 'STR 1609'
    },
    tuesday: {},
    wednesday: {},
    thursday: {}
  },
  '09.40 AM - 11.10AM':{
    sunday: {
      code: 'CSE-485',
      teacherID: 'KFA',
      classroom: 'STR 1609'
    },
    monday: {},
    tuesday: {},
    wednesday: {
      lab: true,
      code: 'CSE-404',
      teacherID: 'SBT',
      classroom: 'STR 902'
    },
    thursday: {}
  },
  '11.20AM - 12.50PM': {
    sunday: {
      code: 'CSE 431',
      teacherID: 'MH',
      classroom: 'STR 1609'
    },
    monday: {
      code: 'CSE 403',
      teacherID: 'SBT',
      classroom: 'STR 906'
    },
    tuesday: {
      code: 'CSE 403',
      teacherID: 'SBT',
      classroom: 'STR 906'
    },
    thursday: {}
  },
  '01.00PM - 02.30PM': {
    sunday: {},
    monday: {
      lab: true,
      code: 'CSE 432',
      teacherID: 'MH',
      classroom: 'STR 1613'
    },
    tuesday: {},
    wednesday: {
      code: 'CSE 431',
      teacherID: 'MH',
      classroom: 'STR 703'
    },
    thursday: {}
  },
  '02.40AM - 04.40PM': {
    sunday: {},
    tuesday: {},
    wednesday: {},
    thursday: {}
  }  
}

const Routine = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.board}>
        <div>TIME</div>
        <div>SUNDAY</div>
        <div>MONDAY</div>
        <div>TUESDAY</div>
        <div>WEDNESDAY</div>
        <div>THURSDAY</div>

        {
          Object.keys(data).map((time, row) => {
            const courses = Object.keys(data[time]).map((day, column) => {
              const course = data[time][day]
              // Gridrow: Spanning two row + gridColumn: Positioning the column
              const styles = {gridRow : `${row+2}/${row+4}`, gridColumn: `${column+2}/${column+3}`}
              return (
                <div style={course.lab && styles}>
                  <h5 className={classes.coursecode}>{course.code}</h5>
                  <h5 className={classes.teacherID}>{course.teacherID}</h5>
                  <h5 className={classes.classroom}>{course.classroom}</h5>
                </div>
              )
            })
            return (
              <>
                <div>{time}</div>
                {courses}
              </>
            )
          })
        }
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
  );
};

export default Routine;
