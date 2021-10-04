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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0,
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
    courseCode: 'EEE - 305',
    title: 'Computer Graphics',
  },
  {
    courseCode: 'Mat - 218',
    title: 'Differential Equations',
  },
  {
    courseCode: 'Basic - 102',
    title: 'Basic English',
  },
];

const StudentList = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {courses.map((course, index) => (
        <Accordion
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
    </div>
  );
};

export default StudentList;
