import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/utils/header';
import avatar from '../../assets/wahid.jpg';
import axios from '../../config/axios';

const useStyles = makeStyles((theme) => ({
  notifications: {
    width: '75%',
    backgroundColor: 'rgb(255 255 255 / 60%)',
    margin: '4rem auto 0',
    padding: '3rem',
    boxShadow: 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF',
    [theme.breakpoints.down('600')]: {
      padding: '1.5rem ',
      width: '90%',
    },
  },
  story: {
    transform: 'skewX(-12deg)',
    textOverflow: 'hidden',
    fontSize: 'inherit',
    display: 'flex',
  },
  story__shape: {
    width: '10rem',
    height: '10rem',
    float: 'left',
    clipPath: 'circle(50% at 50% 50%)',
    shapeOutside: 'circle(50% at 50% 50%)',
    transform: 'translate(-2rem,-2rem) skewX(11deg)',
    position: 'relative',
  },
  story__img: {
    height: '100%',
    transform: 'translateX(-4rem) scale(1.4)',
    backfaceVisibility: 'hidden',
    transition: 'all 0.5s',
  },
  story__text: {
    transform: 'skewX(12deg) translateY(1.2rem)',
  },
  story__caption: {
    color: '#fff',
    transform: 'translate(-50%, 20%)',
    textAlign: 'center',
    textTransform: 'uppercase',
    transition: 'all 0.5s',
    opacity: 0,
  },
  purple: {
    background: '#ff8c0f',
    padding: '4.5rem',
    marginRight: '3rem',
    fontWeight: '600',
    lineHeight: '1.9rem',
    fontSize: '1.7rem',
    textAlign: 'center',
    transform: 'skewX(12deg)',
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);
  const userType = useSelector(({ ui }) => ui.userType);

  useEffect(() => {
    axios.get(`${userType}/notification`).then((res) => {
      setNotifications(res.data);
    });
  }, [setNotifications, userType]);
  console.log(notifications);
  return (
    <>
      <Header data="Notifications" />
      {notifications.map((notification) => (
        <div className={classes.notifications}>
          <div className={classes.story}>
            <Avatar className={classes.purple}>{notification.code}</Avatar>
            <div className={classes.story__text}>
              <h3>{notification.notifications[0].title}</h3>
              <p>{notification.notifications[0].body}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Notifications;
