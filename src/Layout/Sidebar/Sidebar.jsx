import React from "react";
import { Grid, Avatar  } from "@material-ui/core";

// import Icon from "@material-ui/core/Icon";

import { NavLink } from "react-router-dom";

import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

import DashboardIcon from "@material-ui/icons/Dashboard"; // icon

import LineBreak from "../../components/utils/LineBreak";
import logo from "../../assets/LogoMakr_2dZfJJ.png";
import profilePic from "../../assets/IMG_20180618_111617_HDR .jpg";

import styles from "./Sidebar.module.scss";

const menuList = [
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Dashboard", nav: "/" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Routine", nav: "/routine" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Inbox", nav: "/inbox" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Profile", nav: "/profile" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Events", nav: "/events" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Notification", nav: "/notification" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Setting", nav: "/setting" },
  { icon: <DashboardIcon className={styles.menuIcon}/>, name: "Log Out", nav: "/logout" },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <LineBreak />

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.profileWrapper}
      >
        <div className="border">
          <div className={styles.profilePicHolder}>
            <Avatar alt="Student ProfilePic" src={profilePic} className={styles.profileAvatar}/>
          </div>
        </div>


        <h3 style={{marginTop:10}}> Md Nazrul Islam </h3>
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

      <LineBreak />

      <Grid container className={styles.menuWrapper} spacing={2}>
        {menuList.map((menu) => (
          <Grid item xs={6}>
                <NavLink exact to={menu.nav}  className={styles.menuTiles} activeClassName={styles.menuTiles_active}>
                    <div>{menu.icon}</div>
                    <p style={{marginTop: 5}}>{menu.name}</p>
                </NavLink>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Sidebar;
