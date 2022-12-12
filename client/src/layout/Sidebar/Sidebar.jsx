import React, { useEffect } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';

import menuList from '../../data/menu';
import LineBreak from '../../components/utils/LineBreak';
import logo from '../../assets/logo.png';

import styles from './Sidebar.module.scss';

const Sidebar = (props) => {
  const { open, setOpen, medium } = props;

  // const profilePic = useSelector(({ profilePicReducer }) => profilePicReducer.img);
  let profilePicRedux = useSelector(
    ({ profilePicReducer }) => profilePicReducer.img,
  );
  let profilePic = localStorage.getItem('profile_pic');

  const menuType = useSelector(({ ui }) => ui.menuType);
  const userType = useSelector(({ ui }) => ui.userType);
  const profile = useSelector(({ ui }) => ui.profile);

  useEffect(() => {
    profilePic = localStorage.getItem('profile_pic');
  }, [profilePic, profilePicRedux]);

  const menuClickHandler = (name) => {
    setOpen(false);
  };
  return (
    <div
      className={styles.sidebar}
      style={{
        transform: medium
          ? open
            ? 'translateX(0)'
            : 'translateX(-100vw)'
          : 'translateX(0)',
      }}
    >
      <div className={styles.logoWrapper}>
        <img src={logo} alt="" className={styles.logo} />
        {medium && (
          <Fab
            size="small"
            // color="primary"
            aria-label="add"
            style={{
              position: 'absolute',
              right: '3rem',
              top: '2rem',
              zIndex: 10000,
              // background:'#0d236d',
              color: '#0d236d',
              border: '1px solid',
              boxShadow: '-5px -5px 20px #fff, 5px 5px 20px #babecc',
            }}
            onClick={() => setOpen(false)}
          >
            <ClearIcon style={{ height: '3rem', width: '3rem' }} />
          </Fab>
        )}
      </div>

      <LineBreak />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.profileWrapper}
      >
        <div className="border">
          <div className={styles.profilePicHolder}>
            <Avatar
              alt="Student ProfilePic"
              src={profilePic || profilePicRedux}
              className={styles.profileAvatar}
            />
          </div>
        </div>

        <h3 style={{ marginTop: 10 }}>Wahid</h3>
        {userType === 'student' ? (
          <p> CSE({profile?.batch || '...'}) </p>
        ) : (
          <p> {profile?.position || '...'} </p>
        )}
        {userType === 'student' && (
          <Grid
            container
            justifyContent="space-between"
            className={styles.infoWrapper}
          >
            <Grid
              container
              item
              justifyContent="center"
              alignItems="center"
              xs={6}
            >
              <Grid item>
                <EmojiFlagsIcon className={styles.infoIcon} />
              </Grid>
              <Grid item style={{ paddingLeft: 15 }}>
                <h4>Batch</h4>
                <h4>{profile?.batch || '...'}</h4>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              item
              xs={6}
            >
              <Grid item>
                <EmojiEventsIcon className={styles.infoIcon} />
              </Grid>
              <Grid item style={{ paddingLeft: 15 }}>
                <h4>CGPA</h4>
                <h4>{profile?.cgpa || '...'}</h4>
              </Grid>
            </Grid>
          </Grid>
        )}

        {/* teacher */}

        {userType === 'teacher' && (
          <Grid
            container
            justifyContent="space-between"
            className={styles.infoWrapper}
          >
            <Grid
              container
              item
              justifyContent="center"
              alignItems="center"
              xs={6}
            >
              <Grid item>
                <EmojiFlagsIcon className={styles.infoIcon} />
              </Grid>
              <Grid item style={{ paddingLeft: 15 }}>
                <h4>Gender</h4>
                <p>{profile?.gender || '...'}</p>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              item
              xs={6}
            >
              <Grid item>
                <EmojiEventsIcon className={styles.infoIcon} />
              </Grid>
              <Grid item style={{ paddingLeft: 15 }}>
                <h4>Teaching</h4>
                <p>{profile?.age / 10 || '...'} years</p>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

      {/* <LineBreak /> */}

      <Grid container className={styles.menuWrapper} spacing={2}>
        {menuList[userType][menuType].map(({ name, icon }) => (
          <Grid item xs={6} key={name}>
            <NavLink
              exact
              to={`/${menuType === 'sub' ? 'class/web-technology/' : ''}${name
                .toLowerCase()
                .replace(' ', '-')}`}
              onClick={() => menuClickHandler(name)}
              className={styles.menuTitles}
              activeClassName={styles.menuTitles_active}
            >
              <div className={styles.iconStyle}>{icon}</div>
              <p>{name}</p>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sidebar;
