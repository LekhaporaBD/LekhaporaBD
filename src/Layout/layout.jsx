import React from "react";
import Sidebar from '../components/sidebar/Sidebar'
import {Grid} from '@material-ui/core';


const Layout = props => {
  return (
   
    <Grid container spacing={1}>

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


