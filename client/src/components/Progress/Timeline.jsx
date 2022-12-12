import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';

import LiveTvIcon from '@material-ui/icons/LiveTv';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DvrIcon from '@material-ui/icons/Dvr';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import LineStyleIcon from '@material-ui/icons/LineStyle';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient(90deg, rgba(66,169,214,1) 0%, rgba(189,236,255,1) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient(90deg, rgba(66,169,214,1) 0%, rgba(189,236,255,1) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      'linear-gradient(90deg, rgba(66,169,214,1) 0%, rgba(63,200,255,1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient(90deg, rgba(66,169,214,1) 0%, rgba(63,200,255,1) 100%)',
  },
});

const ColorlibStepIcon = (props) => {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <FingerprintIcon style={{ fontSize: 30 }} />,
    2: <LiveTvIcon style={{ fontSize: 30 }} />,
    3: <DeveloperBoardIcon style={{ fontSize: 30 }} />,
    4: <LineStyleIcon style={{ fontSize: 30 }} />,
    5: <DvrIcon style={{ fontSize: 30 }} />,
    6: <EqualizerIcon style={{ fontSize: 30 }} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

const getSteps = () => {
  return [
    'Course Advising',
    'Start Class',
    'Mid Exam',
    'Final Exam Routine Publish',
    'Final Exam',
    'Result',
  ];
};

const Timeline = () => {
  const steps = getSteps();

  return (
    <div style={{ width: '100%' }}>
      <Stepper
        alternativeLabel
        activeStep={3}
        connector={<ColorlibConnector />}
        style={{
          boxShadow: 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF',
          background: '#ebecf0',
          borderRadius: 14,
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Timeline;
