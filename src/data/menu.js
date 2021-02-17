import React from 'react'
import DashboardIcon from "@material-ui/icons/Dashboard";
 // icon
import Dashboard from '../pages/Main_Menu/Dashboard'
import Community from '../pages/Sub_Menu/Community'

const Inbox = React.lazy(() => import(`../pages/Main_Menu/Inbox`));
const Routine = React.lazy(() => import(`../pages/Main_Menu/Routine`));
const Events = React.lazy(() => import(`../pages/Main_Menu/Events`));
const Profile = React.lazy(() => import(`../pages/Main_Menu/Profile`));
const Notifications = React.lazy(() => import(`../pages/Main_Menu/Notifications`));
const Setting = React.lazy(() => import(`../pages/Main_Menu/Setting`));
const LogOut = React.lazy(() => import(`../pages/Main_Menu/LogOut`));


const JoinClass = React.lazy(() => import(`../pages/Sub_Menu/JoinClass`));
const JoinExam = React.lazy(() => import(`../pages/Sub_Menu/JoinExam`));
const Assignment = React.lazy(() => import(`../pages/Sub_Menu/Assignment`));
const Attendance = React.lazy(() => import(`../pages/Sub_Menu/Attendance`));
const Lectures = React.lazy(() => import(`../pages/Sub_Menu/Lectures`));
const Gallery = React.lazy(() => import(`../pages/Sub_Menu/Gallery`));
const GoHome = React.lazy(() => import(`../pages/Sub_Menu/GoHome`));

const menuList = {
  student: {
    main: [
      { icon: <DashboardIcon/>, component: Dashboard, name: "Dashboard"},
      { icon: <DashboardIcon/>, component: Inbox, name: "Inbox"},
      { icon: <DashboardIcon/>, component: Routine, name: "Routine"},
      { icon: <DashboardIcon/>, component : Events, name: "Events"},
      { icon: <DashboardIcon/>, component: Profile, name: "Profile"},
      { icon: <DashboardIcon/>, component: Notifications, name: "Notification"},
      { icon: <DashboardIcon/>, component: Setting, name: "Setting"},
      { icon: <DashboardIcon/>, component: LogOut, name: "Log Out"},
    ],
    sub: [
      { icon: <DashboardIcon/>, component: Community, name: "Community"},
      { icon: <DashboardIcon/>, component: Assignment, name: "Assignments"},
      { icon: <DashboardIcon/>, component: JoinClass, name: "Join Class"},
      { icon: <DashboardIcon/>, component: JoinExam, name: "Join Exam"},
      { icon: <DashboardIcon/>, component : Lectures, name: "Lectures"},
      { icon: <DashboardIcon/>, component: Gallery, name: "Gallery"},
      { icon: <DashboardIcon/>, component: Attendance, name: "Attendance"},
      { icon: <DashboardIcon/>, component: GoHome, name: "Go Home"},
    ]
  },
  teacher: {
    
  }
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
