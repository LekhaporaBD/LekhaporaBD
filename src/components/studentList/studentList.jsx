import React, { useEffect, useState } from 'react';
// import Styles from './StudentList.module.scss'
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from './table';
import { useSelector } from 'react-redux';
import axios from '../../config/axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    // flexBasis: '33.33%',
    flexShrink: 0,
    flexBasis: '55.33%',
    color: '#0d236d',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
}));

const StudentList = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  const [courses, setCourses] = useState([]);
  const userType = useSelector(({ ui }) => ui.userType);

  useEffect(() => {
    axios
      .get(
        `${userType}/allCourses`,
      )
      .then((res) => { 
        const courses = res.data.students
        setCourses(courses);
      }).catch(err => console.log(err.msg))
  }, [userType]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  return (
    <div className={classes.root}>
        <Accordion
          style={{
            background: '#ebecf0',
            boxShadow: '-5px -5px 20px #fff, 5px 5px 20px #babecc',
            marginBottom: 10,
          }}
          expanded={expanded === `panel${ 1}`}
          onChange={handleChange(`panel${ 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${  1}bh-content`}
            id={`panel${  1}bh-header`}
          >
            <span className={classes.heading}>Enrolled Students</span>
            {/* <span className={classes.secondaryHeading}>Batch</span> */}

          </AccordionSummary>

          <AccordionDetails>
            <Table students={courses} />
          </AccordionDetails>
        </Accordion>


      {/* <Accordion
          style={{background: '#ebecf0', boxShadow:'-5px -5px 20px #fff, 5px 5px 20px #babecc'}}
          expanded={expanded === `panel${1}`}
          onChange={handleChange(`panel${1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${1}bh-content`}
            id={`panel${1}bh-header`}
          >
            <span className={classes.heading}>{course.title}</span>
            <span className={classes.secondaryHeading}>
              {course.courseCode}
            </span>
          </AccordionSummary>

          <AccordionDetails>
            <Table />
          </AccordionDetails>
        </Accordion> */}
    </div>
  );
};

export default StudentList;
