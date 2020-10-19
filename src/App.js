import React from 'react'
import { Switch, Route } from 'react-router'
// import { Redirect } from 'react-router-dom'
import Layout from './Layout/layout'


import Dashboard from './pages/menuPages/Dashboard'
import Events from './pages/menuPages/Events'
import Inbox from './pages/menuPages/Inbox'
import LogOut from './pages/menuPages/LogOut'

import Notifications from './pages/menuPages/Notifications'
import Profile from './pages/menuPages/Profile'
import Routine from './pages/menuPages/Routine'
import Setting from './pages/menuPages/Setting'


const navs = [
    { component : Dashboard , path : '/dashboard'},
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