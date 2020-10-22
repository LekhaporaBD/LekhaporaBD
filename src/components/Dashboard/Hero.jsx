import React from "react";
import { Grid } from "@material-ui/core";

import styles from "./Hero.module.scss";
import cover from "../../assets/cover.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Welcome Back, <strong>Nazrul!</strong>
          </h1>
          <p className={styles.subtitle}>
            You have completed 76% of the lessons.
            <br />
            Progress is very good.
          </p>
          <button className={styles.button}>View Progress</button>
        </div>
        <div>
          <img src={cover} alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
