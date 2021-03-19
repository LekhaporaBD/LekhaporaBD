import React from "react";

import SchoolIcon from "@material-ui/icons/School";
import SettingsInputCompositeIcon from "@material-ui/icons/SettingsInputComposite";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import styles from "./Summaries.module.scss";


const summaries = [
  { icon: <SchoolIcon className={styles.icon} style={{color: '#B17059'}}/>, title: "Total Course", value: 5, color: ['#882B00', '#ECDBD1'] },
  { icon: <SettingsInputCompositeIcon className={styles.icon} style={{color: '#866298'}}/>, title: "Total Credits", value: 12, color: ['#732597', '#EDD5F9'] },
  { icon: <PeopleAltIcon className={styles.icon} style={{color: '#81BB8B'}}/>, title: "Total Students", value: 41, color: ['#027313'] },
];

const Summaries = () => {
  return (
    <div className={styles.summaries}>
      {summaries.map((summary) => (
        <Summary key={summary.title} details={summary} />
      ))}
    </div>
  );
};

const Summary = ( props ) => {
  const { icon, title, value, color } = props.details;
  return (
    <div className={styles.summary} style={{borderLeft: `8px solid ${color[0]}`}}>
      <div>{icon}</div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};

export default Summaries;
