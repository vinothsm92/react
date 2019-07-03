import React from 'react';
import UserHeader from '../user/header.js';
import UserSideBar from '../user/sidebar.js';
import { connect } from 'react-redux';
import {baseUrl} from '../../common/apiUrl.js';
import axios from 'axios';

class WorkSpaceList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            groupList : []
        }
    }
    componentWillMount(){
        const{userId,roleId} = this.props.loginresponse.userInfos;
        var vesselId = sessionStorage.getItem('vesselId');
        console.log("userId...VesselId...",userId,vesselId)
        let url = baseUrl + '/group/list';
        axios.post(url,{
            "userProfileId" : userId,
            "shipId" : vesselId

        }).then(responce =>{
            console.log("groupList....",responce.data)
            this.setState({
                groupList : responce.data.groupList
            })
        }).catch(error=>{
            console.log("Error...",error.responce)
        });
        
    }
    render(){
        return(
            <React.Fragment>
                <UserHeader />
                <UserSideBar />
                <div class="app-content">
        <div class="docubodyTitle">
            <ul id="breadcrumb">
                <li>
                    <a href="#">
                        <span class="icon icon-beaker"> </span> My Workspace</a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon icon-beaker"> </span> Vikram</a>
                </li>
            </ul>
            <div class="bttnGroup">
                <button type="button" class="addNew" data-toggle="modal" data-target="#creategroup" data-backdrop="static">
                    <img src="src/public/image/add-user-button.png  "/>Create Group</button>
            </div>
        </div>

        <div class="docuContent">
            <div class="vesslesDocumentsTable">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="datatableEntry">
                            <label>Show
                                <input type="text" placeholder="6" />of
                                <span>60</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="docuchainSearchbox">
                            <div class="searchInput">
                                <input type="text" placeholder="Search" />
                                <button type="button" class="searchIcon">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-xs-12">
                        <div class="vesselsTables">
                            <div class="VesselTableData">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Group Name</th>
                                            <th>Keyword</th>
                                            <th>Email Id</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                            {this.state.groupList != null ? this.state.groupList.map((item,i)=>{
                                                return(
                                                    <tr>
                                                    <td>{item.groupName}</td>
                                                    <td>{item.keyword}</td>
                                                    <td>{item.emailId}</td>
                                                    <td class="text-center">
                                                <button type="button" class="btned editBtn" data-toggle="modal" data-target="#sharegroup" data-backdrop="static">
                                                    <i class="fa fa-share-alt" aria-hidden="true"></i>
                                                </button>
                                                <button type="button" class="btned deleteBtn" data-toggle="modal" data-target="#delete" data-backdrop="static">
                                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                            </tr>
                                                )
                                            })
                                            :<tr> <h1>No Record Found!</h1> </tr>}                             

                                    </tbody>
                                </table>
                            </div>
                            <div class="vesselstablebottom">

                                <ul class="pagination pull-right">
                                    <li class="disabled">
                                        <a href="#">
                                            Previous
                                        </a>
                                    </li>
                                    <li class="active">
                                        <a href="javascript:void(0);">1</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">2</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">3</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">4</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            Next
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </React.Fragment>
        )
    }
}

const mapStateToProps = state =>({
    loginresponse : state.loginReducer.loginresponse,
    loginErrorResponce : state.loginReducer.loginErrorResponce
})
export default connect (mapStateToProps, null)(WorkSpaceList)

