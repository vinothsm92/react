import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class sidebar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
            
            <div className="app-sidebar">
              <div className="app-sidebar__user">
            <div className="imgupload">
                <img className="app-sidebar__user-avatar" src="src/public/image/profilePicture.jpg" alt="Admin Image"/>
            </div>
            <div>
                <p className="app-sidebar__user-name">John Doe</p>
                <span className="app-sidebar__user-designation">Admin</span>
            </div>
        </div>
        <ul className="app-menu">
            <li>
                <NavLink to="/userDashboard" activeClassName="selected" className="app-menu__item active">
                    <div className="imgclrs clr972323">
                        <img src="src/public/image/dashboardIcon.png" alt="dashboardIcon"/>
                    </div>
                    <span className="app-menu__label">Dashboard</span>
                </NavLink>
            </li>

            <li>
              <NavLink to="/vesselDocument" className="app-menu__item" >
                    <div className="imgclrs clrff8830">
                        <img src="src/public/image/vesselDocumentIcon.png" alt="dashboardIcon"/>
                    </div>

                    <span className="app-menu__label">Vessel Documents</span>
                </NavLink>
            </li>
            <li>
            <NavLink to="/documentApprovel" className="app-menu__item" href="userDocumentApproval.html">
                    <div className="imgclrs clr187e03">
                        <img src="src/public/image/documentApprovalIcon.png" alt="dashboardIcon"/>
                    </div>

                    <span className="app-menu__label">Document Approval</span>
                    <b className="badge pull-right">3</b>

                </NavLink>
            </li>
            <li>
            <NavLink to="/userworkpace" className="app-menu__item" >
                    <div className="imgclrs clr004283">
                        <img src="src/public/image/workspaceIcon.png" alt="dashboardIcon"/>
                    </div>
                    <span className="app-menu__label">My Workspace</span>
                </NavLink>
            </li>
            <li>
            <NavLink to="/userExtension" className="app-menu__item" href="userUserExtension.html">
                    <div className="imgclrs clr005cf7">
                        <img src="src/public/image/userExtensionIcon.png" alt="dashboardIcon"/>
                    </div>
                    <span className="app-menu__label">User Extension</span>
                    <b className="badge pull-right">3</b>
                </NavLink>
            </li>
            <li>
            <NavLink to="/userTask" className="app-menu__item" href="userTasks.html">
                    <div className="imgclrs clr8b0ce8">
                        <img src="src/public/image/taskIcon.png" alt="dashboardIcon"/>
                    </div>
                    <span className="app-menu__label">Tasks</span>
                </NavLink>
            </li>
        </ul>
        <ul className="appstore">
            <li>
                <a href="javascript:void(0);"><img src="src/public/image/googleplay.png" alt="googleplay"/></a>
            </li>
            <li>
                <a href="javascript:void(0);"><img src="src/public/image/appstore.png" alt="appstore"/></a>
            </li>
        </ul>
            </div>
            </React.Fragment>
        )
    }
}