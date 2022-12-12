import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/utils/header';
import avatar from '../../assets/wahid.jpg';
import axios from '../../config/axios';
import Title from '../../components/utils/Title';


const useStyles = makeStyles((theme) => ({
  notifications: {
    width: '75%',
    backgroundColor: '#ebecf0',
    margin: '1rem auto 0',
    padding: '1.4rem',
    paddingBottom: '2.4rem',
    boxShadow: 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF',
    [theme.breakpoints.down('600')]: {
      padding: '1.5rem ',
      width: '90%',
    },
  },
  story: {
    // transform: 'skewX(-12deg)',
    textOverflow: 'hidden',
    fontSize: 'inherit',
    display: 'flex',
    alignItems:'center'
  },
  story__shape: {
    width: '5rem',
    height: '5rem',
    float: 'left',
    clipPath: 'circle(50% at 50% 50%)',
    shapeOutside: 'circle(50% at 50% 50%)',
    // transform: 'translate(-2rem,-2rem) skewX(11deg)',
    transform: 'translate(-2rem,-2rem)',
    position: 'relative',
  },
  story__img: {
    height: '100%',
    transform: 'translateX(-4rem) scale(1.4)',
    backfaceVisibility: 'hidden',
    transition: 'all 0.5s',
  },
  story__text: {
    // transform: 'skewX(12deg) translateY(1.2rem)',
    transform: 'translateY(1.2rem)',
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
    color:'crimson',
    background: '#ebecf0',
    borderRadius : '50%',
    padding: '2.5rem',
    width: '6rem',
    height: '6rem',
    marginRight: '3rem',
    fontWeight: '600',
    lineHeight: '1.9rem',
    fontSize: '1.2rem',
    textAlign: 'center',
    // transform: 'skewX(12deg) translateY(14px)',
    transform: ' translateY(14px)',
    boxShadow:'9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5), 3px 3px 7px rgba(136, 165, 191, 0.48), -3px -3px 7px #fff'
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const [notifications, setNotifications] = useState([]);
  const userType = useSelector(({ ui }) => ui.userType);

  const nameShorter = (name) => {
    let ar = name.split(' ');
    return ar[1] ? `${ar[0][0]}${ar[1][0]}` : `${ar[0][0]}${ar[0][1]}` ;
  };

  useEffect(() => {
    axios.get(`${userType}/notification`).then((res) => {
      setNotifications(res.data.notifications);
    });
  }, [setNotifications, userType]);
  return (
    <>
      <Header data="Notifications" />
      {notifications.map((notification) => (

        <div style={{padding:20}} >

          <Title title={notification[0].courseName} />

          { notification.map((noti) => (
            <div className={classes.notifications}>
              <div className={classes.story}>
                <Avatar  className={classes.purple}> {nameShorter(noti.courseName)} </Avatar>
                {/* <div className={classes.purple}>{noti.code}</div> */}
                <div className={classes.story__text}>
                  <h3>{noti.title}</h3>
                  <p>{noti.body}</p>
                </div>
              </div>
            </div> 
            ))}

        </div>


      ))}
    </>
  );
};

export default Notifications;
