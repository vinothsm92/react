import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import UserHeader from '../user/header';
import UserSideBar from '../user/sidebar';
import UserDashboard from '../user/dashboard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
export default class Maincomponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div><UserHeader/>
                <UserDashboard/>
                <UserSideBar/>
            </div>
        )




    }
}