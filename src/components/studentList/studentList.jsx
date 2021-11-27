import React, { useState } from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    // flexBasis: '33.33%',
    flexShrink: 0,
    flexBasis:'55.33%',
    color:'#0d236d'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
}));

const courses = [
  {
    courseCode: 'CSE - 421',
    title: 'Web Technology',
  },
  {
    courseCode: 'CSE - 401',
    title: 'Computer Interfacing',
  },
  {
    courseCode: 'CSE - 325',
    title: 'Compiler',
  },
];

const StudentList = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true);
  const course = useSelector(({ ui }) => ui.classroom);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : true);
  };

  return (
    <div className={classes.root}>
      {courses.map((course, index) => (
        <Accordion
        style={{background: '#ebecf0', boxShadow:'-5px -5px 20px #fff, 5px 5px 20px #babecc', marginBottom:10}}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
          >
            <span className={classes.heading}>{course.title}</span>
            <span className={classes.secondaryHeading}>
              {course.courseCode}
            </span>
          </AccordionSummary>

          <AccordionDetails>
            <Table />
          </AccordionDetails>
        </Accordion>
      ))}



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
