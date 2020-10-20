import React from 'react'
import {Grid} from '@material-ui/core';
import Icon from '@material-ui/core/Icon'; 
import { NavLink } from "react-router-dom";

import DashboardIcon from '@material-ui/icons/Dashboard'; // icon

import LineBreak from '../../components/utils/LineBreak'
import logo from '../../assets/LogoMakr_2dZfJJ.png'
import profilePic from '../../assets/IMG_20180618_111617_HDR.jpg'


const menuList = [ 
    {icon: < DashboardIcon /> , name : 'Dashboard' , nav:'/Dashboard'},
    {icon: < DashboardIcon /> , name : 'Routine' , nav:'/routine'},
    {icon: < DashboardIcon /> , name : 'Inbox' , nav:'/inbox'},
    {icon: < DashboardIcon /> , name : 'Profile' , nav:'/profile'},
    {icon: < DashboardIcon /> , name : 'Events' , nav:'/events'},
    {icon: < DashboardIcon /> , name : 'Notification' , nav:'/notification'},
    {icon: < DashboardIcon /> , name : 'Setting' , nav:'/setting'},
    {icon: < DashboardIcon /> , name : 'Log Out' , nav:'/logout'},
]

const Sidebar = () => {
    return (
        <div style={{backgroundColor:'rgb(234, 234, 234)'}}>
            <div className="logoTile">
                <img src={logo} alt=""/>
            </div>

            <LineBreak/>

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className="person-details"
            >
                <div className="profilePic-holder">
                    <img src={profilePic} alt="" style={{height:100 , width: 100}}/>
                </div>

                <h3> Md Nazrul Islam </h3>
                <p> CSE(171) </p>

                <div className="person-result">
                    <div className="batch">
                        <Icon> Icon</Icon>
                        <h4> 171 batch </h4>
                    </div>
                    <div className="cgpa">
                        <Icon> Icon</Icon>
                        <h4>CGPA 3.83 </h4>
                    </div>
                </div>

            </Grid>

            <LineBreak/>

            {
                menuList.map( menu => (
                    <NavLink to={menu.nav}>
                        <div className="menuTile">
                            <div className="menu-icon">
                                { menu.icon }
                            </div>
                            <p>{menu.name}</p>
                        </div>
                    </NavLink>
                ))
            }

        </div>
    )
}

export default Sidebar
