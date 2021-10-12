import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Hero.module.scss';
import studentHero from '../../assets/cover.svg';
import teacherHero from '../../assets/teacher-hero.png';

const Hero = () => {
  const userType = useSelector(({ ui }) => ui.userType);
  const name = useSelector(({ ui }) => ui.profile.name);

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome Back, <strong>{name ? name.split(' ')[0] : '......'}</strong>
        </h1>
        <p className={styles.subtitle}>
          You have completed 76% of the{' '}
          {userType === 'teacher' ? 'classes' : 'lessons'}.
          <br />
          {userType === 'teacher' ? 'Attendance Rate' : 'Progress'} is very
          good.
        </p>
        {userType !== 'teacher' && (
          <NavLink to="/dashboard/progress">
            <button className={styles.button}>View Progress</button>
          </NavLink>
        )}
      </div>
      <div>
        <img
          src={userType === 'teacher' ? teacherHero : studentHero}
          alt=""
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Hero;
