import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
// icon
import Dashboard from '../pages/Main_Menu/Dashboard';
import Community from '../pages/Sub_Menu/Community';

const Inbox = React.lazy(() => import(`../pages/Main_Menu/Inbox`));
const Routine = React.lazy(() => import(`../pages/Main_Menu/Routine`));
const Events = React.lazy(() => import(`../pages/Main_Menu/Events`));
const Profile = React.lazy(() => import(`../pages/Main_Menu/Profile`));
const Notifications = React.lazy(() =>
  import(`../pages/Main_Menu/Notifications`),
);
const Setting = React.lazy(() => import(`../pages/Main_Menu/Setting`));
const LogOut = React.lazy(() => import(`../pages/Main_Menu/LogOut`));

const JoinClass = React.lazy(() => import(`../pages/Sub_Menu/JoinClass`));
const CreateClass = React.lazy(() => import(`../pages/Sub_Menu/CreateClass`));
const JoinExam = React.lazy(() => import(`../pages/Sub_Menu/JoinExam`));
const Assignment = React.lazy(() => import(`../pages/Sub_Menu/Assignment`));
const Attendance = React.lazy(() => import(`../pages/Sub_Menu/Attendance`));
const Lectures = React.lazy(() => import(`../pages/Sub_Menu/Lectures`));
const Gallery = React.lazy(() => import(`../pages/Sub_Menu/Gallery`));
const Students = React.lazy(() => import(`../pages/Sub_Menu/Students`));
const Announce = React.lazy(() => import(`../pages/Sub_Menu/Announce`));
const GoHome = React.lazy(() => import(`../pages/Sub_Menu/GoHome`));

const menuList = {
  student: {
    main: [
      { icon: <DashboardIcon />, component: Dashboard, name: 'Dashboard' },
      { icon: <DashboardIcon />, component: Inbox, name: 'Inbox' },
      { icon: <DashboardIcon />, component: Routine, name: 'Routine' },
      { icon: <DashboardIcon />, component: Events, name: 'Events' },
      { icon: <DashboardIcon />, component: Profile, name: 'Profile' },
      {
        icon: <DashboardIcon />,
        component: Notifications,
        name: 'Notification',
      },
      { icon: <DashboardIcon />, component: Setting, name: 'Setting' },
      { icon: <DashboardIcon />, component: LogOut, name: 'Log Out' },
    ],
    sub: [
      { icon: <DashboardIcon />, component: Community, name: 'Community' },
      { icon: <DashboardIcon />, component: Assignment, name: 'Assignments' },
      { icon: <DashboardIcon />, component: JoinClass, name: 'Join Class' },
      { icon: <DashboardIcon />, component: JoinExam, name: 'Join Exam' },
      { icon: <DashboardIcon />, component: Lectures, name: 'Lectures' },
      { icon: <DashboardIcon />, component: Gallery, name: 'Gallery' },
      { icon: <DashboardIcon />, component: Attendance, name: 'Attendance' },
      { icon: <DashboardIcon />, component: GoHome, name: 'Go Home' },
    ],
  },
  teacher: {
    main: [
      { icon: <DashboardIcon />, component: Dashboard, name: 'Dashboard' },
      { icon: <DashboardIcon />, component: Inbox, name: 'Inbox' },
      { icon: <DashboardIcon />, component: Routine, name: 'Schedule' }, // Class Schedule
      { icon: <DashboardIcon />, component: Events, name: 'Events' }, // Any Seminar News
      { icon: <DashboardIcon />, component: Profile, name: 'Profile' },
      { icon: <DashboardIcon />, component: Attendance, name: 'Attendance' }, //Teacher can see the taken class of her
      { icon: <DashboardIcon />, component: Setting, name: 'Setting' },
      { icon: <DashboardIcon />, component: LogOut, name: 'Log Out' },
    ],
    sub: [
      { icon: <DashboardIcon />, component: Community, name: 'Community' },
      { icon: <DashboardIcon />, component: CreateClass, name: 'Create Class' },
      { icon: <DashboardIcon />, component: Assignment, name: 'Assignment' },
      { icon: <DashboardIcon />, component: JoinExam, name: 'Exam' },
      { icon: <DashboardIcon />, component: Lectures, name: 'Lectures' },
      { icon: <DashboardIcon />, component: Students, name: 'Students' },
      { icon: <DashboardIcon />, component: Announce, name: 'Announce' }, // To publish any announcement it will redirect to students dashboard
      { icon: <DashboardIcon />, component: GoHome, name: 'Go Home' },
    ],
  },
};

export default menuList;

// const styles = {
//   menuIcon: {
//     width: '3rem !important',
//     height: '3rem !important',
//     display: 'flex !important',
//     justifyContent: 'center !important',
//     alignItems: 'center !important',
//   }
// }
