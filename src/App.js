import React from 'react'
import { Switch, Route } from 'react-router';
import Layout from './Layout/layout.jsx'

import './style.css'

import Dashboard from './pages/Main_Menu/Dashboard'
import DashboardProgress from './pages/Main_Menu/Dashboard/Progress'
import Events from './pages/Main_Menu/Events'
import Inbox from './pages/Main_Menu/Inbox'
import LogOut from './pages/Main_Menu/LogOut'

import Notifications from './pages/Main_Menu/Notifications'
import Profile from './pages/Main_Menu/Profile'
import Routine from './pages/Main_Menu/Routine'
import Setting from './pages/Main_Menu/Setting'


const navs = [
    { component : Dashboard , path : '/dashboard'},
    { component : DashboardProgress , path : '/progress'},
    { component : Events , path : '/events'},
    { component : Inbox , path : '/inbox'},
    { component : LogOut , path : '/logout'},
    { component : Notifications , path : '/notification'},
    { component : Profile , path : '/profile'},
    { component : Routine , path : '/routine'},
    { component : Setting , path : '/setting'},
    { component : Dashboard , path : '/'},
]


const app = () => {
    return (
        <Layout>
            <Switch>                             
                {
                    navs.map(nav => (    
                        <Route path={nav.path} component={nav.component}/>                    
                    ))
                }
            </Switch>
        </Layout>

    )
}

export default app


//font-family: 'Raleway', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;