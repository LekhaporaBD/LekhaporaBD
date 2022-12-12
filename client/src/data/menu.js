import React from 'react';

// main menu Icon
import DashboardIcon from '@material-ui/icons/Dashboard';
import MessageIcon from '@material-ui/icons/Message';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PersonIcon from '@material-ui/icons/Person';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Sub menu icon
import ForumIcon from '@material-ui/icons/Forum';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import CampaignIcon from '@material-ui/icons/OndemandVideo';
import CollectionsIcon from '@material-ui/icons/Collections';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

import Dashboard from '../pages/Main_Menu/Dashboard';
import Community from '../pages/Sub_Menu/Community';

const Inbox = React.lazy(() => import(`../pages/Main_Menu/Inbox`));
const Routine = React.lazy(() => import(`../pages/Main_Menu/Routine`));
const Events = React.lazy(() => import(`../pages/Main_Menu/Events`));
const Profile = React.lazy(() => import(`../pages/Main_Menu/Profile`));
const Notifications = React.lazy(() => import(`../pages/Main_Menu/Notifications`));
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
      { icon: <MessageIcon />, component: Inbox, name: 'Inbox' },
      { icon: <PlaylistPlayIcon />, component: Routine, name: 'Routine' },
      { icon: <EventNoteIcon />, component: Events, name: 'Events' },
      { icon: <PersonIcon />, component: Profile, name: 'Profile' },
      { icon: <NotificationsNoneIcon />, component: Notifications,name: 'Notification',},
      { icon: <SettingsIcon />, component: Setting, name: 'Setting' },
      { icon: <ExitToAppIcon />, component: LogOut, name: 'Log Out' },
    ],
    sub: [
      { icon: <ForumIcon />, component: Community, name: 'Community' },
      { icon: <AssignmentIcon />, component: Assignment, name: 'Assignments' },
      { icon: <OndemandVideoIcon />, component: JoinClass, name: 'Join Class' },
      { icon: <AddToQueueIcon />, component: JoinExam, name: 'Join Exam' },
      { icon: <AssignmentIndIcon />, component: Lectures, name: 'Lectures' },
      { icon: <CollectionsIcon />, component: Gallery, name: 'Gallery' },
      { icon: <FingerprintIcon />, component: Attendance, name: 'Attendance' },
      { icon: <SettingsBackupRestoreIcon />, component: GoHome, name: 'Go Home' },
    ],
  },
  teacher: {
    main: [
      { icon: <DashboardIcon />, component: Dashboard, name: 'Dashboard' },
      { icon: <MessageIcon />, component: Inbox, name: 'Inbox' },
      { icon: <PlaylistPlayIcon />, component: Routine, name: 'Schedule' }, // Class Schedule
      { icon: <EventNoteIcon />, component: Events, name: 'Events' }, // Any Seminar News
      { icon: <PersonIcon />, component: Profile, name: 'Profile' },
      { icon: <FingerprintIcon />, component: Attendance, name: 'Attendance' }, //Teacher can see the taken class of her
      { icon: <SettingsIcon />, component: Setting, name: 'Setting' },
      { icon: <ExitToAppIcon />, component: LogOut, name: 'Log Out' },
    ],
    sub: [
      { icon: <ForumIcon />, component: Community, name: 'Community' },
      { icon: <OndemandVideoIcon />, component: CreateClass, name: 'Create Class' },
      { icon: <AssignmentIcon />, component: Assignment, name: 'Assignment' },
      { icon: <AssignmentIndIcon />, component: JoinExam, name: 'Exam' },
      { icon: <AddToQueueIcon />, component: Lectures, name: 'Lectures' },
      { icon: <FilterListIcon />, component: Students, name: 'Students' },
      { icon: <CampaignIcon />, component: Announce, name: 'Announce' }, // To publish any announcement it will redirect to students dashboard
      { icon: <SettingsBackupRestoreIcon />, component: GoHome, name: 'Go Home' },
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
