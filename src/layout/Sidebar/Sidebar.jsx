import React from "react";
import { Grid, Avatar  } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import menuList from '../../data/menu'
import LineBreak from "../../components/utils/LineBreak";
import logo from "../../assets/logo.png";

import styles from "./Sidebar.module.scss";


const Sidebar = () => {
  const profilePic = useSelector(({profilePicReducer}) => (profilePicReducer.img))
  const menuType = useSelector(({ui}) => (ui.menuType))
  const userType = useSelector(({ui}) => (ui.userType))

  const params = useParams();
  console.log(params)
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <LineBreak />

      <Grid
        container direction="column"
        justify="center" alignItems="center"
        className={styles.profileWrapper}
      >
        <div className="border">
          <div className={styles.profilePicHolder}>
            <Avatar alt="Student ProfilePic" src={profilePic} className={styles.profileAvatar}/>
          </div>
        </div>


        <h3 style={{marginTop:10}}>{userType === 'teacher' ? 'Rehnuma Tasnim' : 'Nazrul Islam Rakib'}</h3>
        <p> CSE(171) </p>

        <Grid container justify="space-between" className={styles.infoWrapper}>
            <Grid container item justify="center" alignItems="center" xs={6}>
                <Grid item>
                    <EmojiFlagsIcon className={styles.infoIcon}/>
                </Grid> 
                <Grid item style={{paddingLeft: 15}}>
                    <h4>Batch</h4>
                    <h4>171</h4>
                </Grid>
            </Grid>

            <Grid container justify="center" alignItems="center" item xs={6}>
                <Grid item>
                    <EmojiEventsIcon className={styles.infoIcon}/>                    
                </Grid>
                <Grid item style={{paddingLeft: 15}}>
                    <h4>CGPA</h4>
                    <h4>3.83</h4>
                </Grid>
            </Grid>
        </Grid>
      </Grid>

      {/* <LineBreak /> */}

      <Grid container className={styles.menuWrapper} spacing={2}>
        {menuList[userType][menuType].map(({name, icon}) => (
          <Grid item xs={6}>
                <NavLink 
                  exact 
                  to={`/${menuType==='sub' ? 'class/web-technology/':''}${name.toLowerCase().replace(' ', '-')}`} 
                  className={styles.menuTitles} 
                  activeClassName={styles.menuTitles_active}
                >
                    <div>{icon}</div>
                    <p style={{marginTop: 5}}>{name}</p>
                </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sidebar;
