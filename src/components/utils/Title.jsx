import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tagline: {
    display: 'flex',
    alignItems: 'center',
    margin: '5rem 0 2rem',
    justifyContent: 'start',
    color: '#0d236d',
    width: '100%',
  },
  text: {
    fontSize: 28,
  },
  line: {
    background: '#d5d5d5',
    flexGrow: 1,
    height: 2,
    marginLeft: 20,
  },
}));

const Title = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.tagline}>
      <p className={classes.text}> {`${title}.`} </p>
      <div className={classes.line}></div>
    </div>
  );
};

export default Title;
