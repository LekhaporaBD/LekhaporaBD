import React from 'react';
import { useSelector } from 'react-redux';
import SchoolIcon from '@material-ui/icons/School';
import SettingsInputCompositeIcon from '@material-ui/icons/SettingsInputComposite';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import styles from './Summaries.module.scss';

const studentSummaries = [
  {
    icon: <SchoolIcon className={styles.icon} style={{ color: '#B17059' }} />,
    title: 'Total Course',
    value: 5,
    color: ['#882B00', '#ECDBD1'],
  },
  {
    icon: (
      <SettingsInputCompositeIcon
        className={styles.icon}
        style={{ color: '#866298' }}
      />
    ),
    title: 'Total Credits',
    value: 12,
    color: ['#732597', '#EDD5F9'],
  },
  {
    icon: (
      <PeopleAltIcon className={styles.icon} style={{ color: '#81BB8B' }} />
    ),
    title: 'Semester No',
    value: 10,
    color: ['#027313'],
  },
];
const teacherSummaries = [
  {
    icon: <SchoolIcon className={styles.icon} style={{ color: '#B17059' }} />,
    title: 'Total Course',
    value: 5,
    color: ['#882B00', '#ECDBD1'],
  },
  {
    icon: (
      <SettingsInputCompositeIcon
        className={styles.icon}
        style={{ color: '#866298' }}
      />
    ),
    title: 'Total Credits',
    value: 12,
    color: ['#732597', '#EDD5F9'],
  },
  {
    icon: (
      <PeopleAltIcon className={styles.icon} style={{ color: '#81BB8B' }} />
    ),
    title: 'No of Classes',
    value: 17,
    color: ['#027313'],
  },
];

const Summaries = (props) => {
  const userType = useSelector(({ ui }) => ui.userType);
  const summaries =
    userType === 'teacher' ? teacherSummaries : studentSummaries;
  return (
    <div className={styles.summaries}>
      {summaries.map((summary, idx) => (
        <Summary
          key={summary.title}
          values={props.data[idx]}
          details={summary}
        />
      ))}
    </div>
  );
};

const Summary = (props) => {
  const { icon, title, color } = props.details;
  return (
    <div
      className={styles.summary}
      style={{ borderLeft: `8px solid ${color[0]}` }}
    >
      <div>{icon}</div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{props.values || 0}</span>
      </div>
    </div>
  );
};

export default Summaries;
