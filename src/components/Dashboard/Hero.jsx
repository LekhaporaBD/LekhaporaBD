import React from "react";
import styles from "./Hero.module.scss";
import cover from "../../assets/cover.svg";
import { NavLink } from "react-router-dom";



const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome Back, <strong>Nazrul!</strong>
        </h1>
        <p className={styles.subtitle}>
          You have completed 76% of the lessons.
          <br />
          Progress is very good.
        </p>
        <NavLink to="/dashboard/progress">
          <button className={styles.button}>View Progress</button>
        </NavLink>
        
      </div>
      <div>
        <img src={cover} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
