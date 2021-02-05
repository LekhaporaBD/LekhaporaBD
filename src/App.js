import React, {Suspense} from "react";
import { Switch, Route, Redirect } from 'react-router';

import Layout from './Layout/index.jsx'
import Progress from './pages/Main_Menu/Dashboard/Progress'

import './style.css'
import menuLists from './data/menu';

const app = () => {
    return (
        <Layout>
            <Suspense fallback={<p>Loading.......</p>}>
                <Switch>
                    <Route path={'/dashboard/progress'} component={Progress}/> 
                    {
                        menuLists['student']['main'].map(nav => (    
                            <Route 
                                path={`/${nav.name.toLowerCase().replace(' ', '-')}`} 
                                component={nav.component}
                            />                    
                        ))
                    }
                    {
                        menuLists['student']['sub'].map(nav => (    
                            <Route 
                                path={`/class/:courseName/${nav.name.toLowerCase().replace(' ', '-')}`} 
                                component={nav.component}
                            />                    
                        ))
                    }
                    <Redirect to="/dashboard"/>
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default app


//font-family: 'Raleway', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;