import React from "react";
import Sidebar from '../components/sidebar/Sidebar'
import {Grid} from '@material-ui/core';


const Layout = props => {
  return (
   
    <Grid container spacing={3}>

        <Grid item xs={3}>
            <Sidebar />
        </Grid>

        <Grid item xs={9}>
            <main>{props.children}</main>
        </Grid>
     
     </Grid>
    
    
  );
};

export default Layout;



        {/* <Switch>
            {
                navs.map(nav => (    
                    console.log()                                                           
                    // <Route path={nav.path} component={nav.component}/>
                ))
            } 


 <Route path = '/home/inbox' component = {Inbox}/>
<Route path = '/home/routine' component = {Routine}/> 
<Route path = '/home' component = {Dashboard}/>  

        </Switch>  
        */}

