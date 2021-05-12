import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Hero.module.scss";
import cover from "../../assets/cover.svg";



const Hero = () => {
  const userType = useSelector(({ui}) => (ui.userType))

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome Back, <strong>{userType === 'teacher' ? 'Rehnuma' : 'Nazrul'}</strong>
        </h1>
        <p className={styles.subtitle}>
          You have completed 76% of the {userType === 'teacher' ? 'classes' : 'lessons'}.
          <br />
          {userType === 'teacher' ? 'Attendance Rate' : 'Progress'} is very good.
        </p>
        {userType !== 'teacher' && <NavLink to="/dashboard/progress">
          <button className={styles.button}>View Progress</button>
        </NavLink>}
      </div>
      <div>
        <img src={cover} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
