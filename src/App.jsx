import React, {Suspense} from "react";
import { Switch, Route, Redirect } from 'react-router';

import Layout from './Layout/index.jsx'
import Progress from './pages/Main_Menu/Dashboard/Progress'
import { useSelector } from "react-redux";

import './style.css'
import menuLists from './data/menu';
import Login from "./pages/Authentication/Login.jsx";

const App = () => {
    const isAuthenticated = useSelector(({ui}) => (ui.isAuthenticated));
    const userType = useSelector(({ui}) => (ui.userType))
    
    let route;
    if(isAuthenticated){ 
        route = (
        <Layout>
            <Suspense fallback={<p>Loading.......</p>}>
                <Switch>
                    <Route path={'/dashboard/progress'} component={Progress}/> 
                    {
                        menuLists[userType]['main'].map(nav => (    
                            <Route 
                                path={`/${nav.name.toLowerCase().replace(' ', '-')}`} 
                                component={nav.component}
                            />                    
                        ))
                    }
                    {
                        menuLists[userType]['sub'].map(nav => (    
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
    else{
        route = (
            <div>
                <Switch>
                    {/* <Route path="/dashboard" component={dashboard} />
                    <Redirect to="/dashboard"/> */}

                    <Route path="/" component={Login} />
                    <Redirect to="/login"/>
                </Switch>
            </div>
        )
    }
    return route;
}

export default App;


//font-family: 'Raleway', sans-serif;
// font-family: 'Nunito', sans-serif;
// font-family: 'Poppins', sans-serif;