import React from 'react';
import Img from '../../assets/event.svg';
import Styles from './Event.module.scss';
import Carousel from './carousel/carousel';
import Title from '../utils/Title';

const Event = (props) => {
  const { upEvents, recents } = props;
  return (
    <div className={Styles.container}>
      <div className={Styles.imgHolder}>
        <img src={Img} alt="" />
      </div>
 
      <div className={Styles.main}>
        <Title title="Upcoming Events" />

        <div style={{ width: '100%' }}>
          <Carousel data={upEvents} />
        </div>

        <Title title="Recent Events" />

        <div style={{ width: '100%' }}>
          <Carousel data={recents} />
        </div>
      </div>
    </div>
  );
};

export default Event;
