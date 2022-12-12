import React, { useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from '../../components/utils/header';
import Styles from '../Authentication/Login.module.scss';
import { Grid, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  settings: {
    width: '50rem',
    minHeight: '60rem',
    padding: '5rem 3rem',
    [theme.breakpoints.down(800)]: {
      width: '40rem',
    },
    [theme.breakpoints.down(450)]: {
      width: '35rem',
    },
  },
  setting: {
    padding: '2rem 4rem',
    width: '85%',
    background: '#ebecf0',
    borderRadius: '5rem',
    marginBottom: '4rem',
    boxShadow: `9px 9px 16px rgba(163, 177, 198, 0.6),
              -9px -9px 16px rgba(255, 255, 255, 0.5), 
              inset 3px 3px 7px rgba(136, 165, 191, 0.48), 
              inset -3px -3px 7px #FFFFFF`,
    [theme.breakpoints.down(450)]: {
      padding: '2rem',
    },
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    darkMode: false,
    fullscreen: false,
    showActive: false,
  });
  const [hasFullScreened, setHasFullScreened] = React.useState(false);

  
  useEffect(() => {
    // if(state.fullscreen){
    //     setHasFullScreened(true);
    //     document.documentElement.requestFullscreen();
    // }
  });
  // else if(hasFullScreened && !state.fullscreen){
  // }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.name === 'fullscreen' && !state.fullscreen) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    } else if (state.fullscreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <>
      <Header data="Settings" />
      <div className={Styles.container} style={{ width: '100%' }}>
        <div className={Styles.mainDiv} style={{ padding: 0 }}>
          <div className={classes.settings}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.setting}
            >
              <Grid item>Dark Mode</Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.darkMode}
                      onChange={handleChange}
                      name="darkMode"
                    />
                  }
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.setting}
            >
              <Grid item>Fullscreen</Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.fullscreen}
                      onChange={handleChange}
                      name="fullscreen"
                    />
                  }
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.setting}
            >
              <Grid item>Show Active Status</Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.showActive}
                      onChange={handleChange}
                      name="showActive"
                    />
                  }
                />
              </Grid>
            </Grid>

            {/*  */}
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.setting}
            >
              <Grid item>Show Active Status</Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state.showActive}
                      onChange={handleChange}
                      name="something else"
                    />
                  }
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#ff8c0f',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#ff8c0f',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
