import React, { useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  addMonths,
  subMonths,
} from 'date-fns';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import styles from './Calender.module.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const dateFormat = 'd';
  const attendanceList = [
    '2-03-2022',
    '7-03-2022',
    '3-03-2022',
    '15-03-2022',
    '17-03-2022',
    '12-03-2022',
    '20-03-2022',
    '28-03-2022',
    '28-03-2022',
    '31-03-2022',

    '3-04-2022',
    '6-04-2022',
    '7-04-2022',
    '11-04-2022',
    '16-04-2022',
    '22-04-2022',
    '25-04-2022',
    '27-04-2022',  

    '25-05-2022',
    '27-05-2022',
    '06-05-2022',
    '10-05-2022',
    '22-05-2022',
    '25-05-2022',
    '27-05-2022',

    '3-06-2022',
    '6-06-2022',
    '7-06-2022',
    '11-06-2022',
    '16-06-2022',
    '21-06-2022',
    '25-06-2022',
    '29-06-2022',
  ];

  let attendanceArray = [];
  attendanceList.forEach((single) => {
    let [d, m, y] = single.split('-');
    attendanceArray.push(new Date(y, m, d));
  });

  const renderHeader = () => {
    const dateFormate = 'MMMM yyyy';

    return (
      <div className={`${styles.header} ${styles.row} ${styles.flexMiddle}`}>
        <div className={`${styles.col} ${styles.colStart}`}>
          <div className={styles.icon} onClick={pervMonthHandler}>
            <ArrowBackIosIcon />
          </div>
        </div>

        <div className={`${styles.col} ${styles.colCenter}`}>
          <span style={{ color: '#0d236d', fontSize: 28 }}>
            {format(currentMonth, dateFormate)}
          </span>
        </div>

        <div className={`${styles.col} ${styles.colEnd}`}>
          <div className={styles.icon} onClick={nextMonthHandler}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dataFormate = 'dddd';
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={`${styles.col} ${styles.colCenter}`}>
          {format(addDays(startDate, i), dataFormate)}
        </div>,
      );
    }

    return <div className={`${styles.days} ${styles.row}`}>{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);

        days.push(
          <div
            className={`${styles.col} ${styles.cell} ${
              !isSameMonth(day, monthStart)
                ? styles.disabled
                : attendanceArray.find(
                    (dt) => JSON.stringify(dt) === JSON.stringify(day),
                  )
                ? styles.selected
                : ''
            }`}
            key={day}
          >
            <span className={styles.number}>{formattedDate}</span>
            <span className={styles.bg}>{formattedDate}</span>
          </div>,
        );

        day = addDays(day, 1);
      }
      rows.push(
        <div className={styles.row} key={day}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div className={styles.body}>{rows}</div>;
  };

  const nextMonthHandler = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const pervMonthHandler = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <div className={styles.calendar}>
      {renderHeader()}
      {!matches && renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calender;
