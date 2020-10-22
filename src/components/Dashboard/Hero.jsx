import React from "react";
import { Grid } from "@material-ui/core";

import styles from './Hero.module.scss'
import cover from '../../assets/cover.svg';


const Hero = () => {
  return (
      <div className={styles.hero}>
        <div>
          <h1 className={styles.title}>Welcome Back, <strong>Wahid!</strong></h1>
          <p className={styles.subtitle}>
            You have completed 76% of the lessons.<br/>
            Progress is very good.
          </p>
          <button className={styles.button}>View Progress</button>
        </div>
        <div>
          <img src={cover} alt="Cover hero image"  className={styles.image}/>
        </div>
      </div>
  );
};

export default Hero;
