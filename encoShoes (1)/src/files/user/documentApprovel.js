import React from 'react'
import {baseUrl} from '../../common/apiUrl'
import UserHeader from '../user/header'
import { NavLink } from 'react-router-dom';
import UserSideBar from '../user/sidebar'
import { connect } from 'react-redux';
import axios from 'axios';

class DocumentApprovel extends React.Component{
    constructor(props){
        super(props);   
    this.state = {
        expiryDocumentList : []
    }
    }
    componentWillMount(){

        console.log("props value is..",this.props.loginresponse.userInfos)
        const {userId} = this.props.loginresponse.userInfos
        let url = baseUrl + '/expiry/document/getExpDocumentInfo'
        axios.post(url,{
            "loginId" : userId
        }).then(responce => {
            console.log("responce is...",responce)
            if(responce.status == 200){
                console.log("responce success..",responce.data)
                this.setState ({
                    expiryDocumentList : responce.data.expiryDocumentList
                })
            }
        })
    }
    render(){
        {console.log("state value is...",this.state.expiryDocumentList)}
        return(
            <React.Fragment>
                 <UserHeader/>                
                <UserSideBar/>
            <div class="app-content">
            <div class="docuchainContent">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="docuuserdoculist">
                            <div class="tab" role="tabpanel">                                
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active">
                                        <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Expiry Based Document</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Voyage Specific Document</a>
                                    </li>
                                </ul>
                                
                                <div class="tab-content docuApproval tabs">
                                    <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                                        <div class="vessellistable">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="datatableEntry">
                                                        <label>Show
                                                            <input type="text" placeholder="6"/>of
                                                            <span>60</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="filtersearchoption">
                                                        <div class="filterbox">
                                                            <label>Filter by Status</label>
                                                            <div class="filterselect">
                                                                <select>
                                                                    <option selected="">All</option>
                                                                    <option value="Popeda">Pending</option>
                                                                    <option value="Popeda">Approved</option>
                                                                    <option value="Popeda">Rejected</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="docuchainSearchbox docuapprovalSearch">
                                                            <div class="searchInput bgwhiteinput">
                                                                <input type="text" placeholder="Search"/>
                                                                <button type="button" class="searchIcon">
                                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-xs-12">
                                                    <div class="taskMangeTable">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Certificate</th>
                                                                    <th>Vessel Name</th>
                                                                    <th>Certificate No </th>
                                                                    <th>Place of Issue </th>
                                                                    <th>Date of Issue</th>
                                                                    <th>Date of Expiry</th>
                                                                    <th class="text-center addwidth80">Status</th>
                                                                    <th class="text-center">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody> 
                                                                
                                                                {
                                                                     this.state.expiryDocumentList.length >0 ? this.state.expiryDocumentList.map ((item,i) => (

                                                                    <tr>
                                                                      <td>{item.documentHolderName}</td>
                                                            <td>{item.shipName} </td>
                                                            <td>{item.certificateNumber} </td>
                                                            <td>{item.placeOfIssue}</td>
                                                            <td>{item.issueDate}</td>
                                                            <td>{item.expiryDate}</td>

                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                    </tr>
                                                                ))
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
                                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                                        <div class="vessellistable">
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
                                                    <div class="filtersearchoption">
                                                        <div class="filterbox">
                                                            <label>Filter by Status</label>
                                                            <div class="filterselect">
                                                                <select>
                                                                    <option selected="">All</option>
                                                                    <option value="Popeda">Pending</option>
                                                                    <option value="Popeda">Approved</option>
                                                                    <option value="Popeda">Rejected</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="docuchainSearchbox docuapprovalSearch">
                                                            <div class="searchInput bgwhiteinput">
                                                                <input type="text" placeholder="Search" />
                                                                <button type="button" class="searchIcon">
                                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-xs-12">
                                                    <div class="taskMangeTable">
                                                        <table>
                                                            <thead>
                                                                <tr>
    
                                                                    <th>Certificate</th>
                                                                    <th>Vessel Name</th>
                                                                    <th>Certificate No </th>
                                                                    <th>Place of Issue </th>
                                                                    <th>Date of Issue</th>
                                                                    <th>Date of Expiry</th>
                                                                    <th class="text-center addwidth80">Status</th>
                                                                    <th class="text-center">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Certificate of Ship Registry</td>
                                                                    <td>Popeda </td>
                                                                    <td>ABC283792 </td>
                                                                    <td> Singapore
                                                                    </td>
                                                                    <td>05-Jan-2018</td>
                                                                    <td>05-Jan-2018</td>
    
                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
    
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Certificate of Ship Registry</td>
                                                                    <td>Popeda </td>
                                                                    <td>ABC283792 </td>
                                                                    <td> Singapore
                                                                    </td>
                                                                    <td>05-Jan-2018</td>
                                                                    <td>05-Jan-2018</td>
    
                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
    
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Certificate of Ship Registry</td>
                                                                    <td>Popeda </td>
                                                                    <td>ABC283792 </td>
                                                                    <td> Singapore
                                                                    </td>
                                                                    <td>05-Jan-2018</td>
                                                                    <td>05-Jan-2018</td>
    
                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
    
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Certificate of Ship Registry</td>
                                                                    <td>Popeda </td>
                                                                    <td>ABC283792 </td>
                                                                    <td> Singapore
                                                                    </td>
                                                                    <td>05-Jan-2018</td>
                                                                    <td>05-Jan-2018</td>
    
                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
    
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Certificate of Ship Registry</td>
                                                                    <td>Popeda </td>
                                                                    <td>ABC283792 </td>
                                                                    <td> Singapore
                                                                    </td>
                                                                    <td>05-Jan-2018</td>
                                                                    <td>05-Jan-2018</td>
    
                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
    
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Certificate of Ship Registry</td>
                                                                    <td>Popeda </td>
                                                                    <td>ABC283792 </td>
                                                                    <td> Singapore
                                                                    </td>
                                                                    <td>05-Jan-2018</td>
                                                                    <td>05-Jan-2018</td>
    
                                                                    <td class="text-center addwidth150">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#libcreate" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-download" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
    
                                                                    <td class="text-center">
                                                                        <button type="button" class="btn pendingbtn">
                                                                            Pending
                                                                        </button>
                                                                    </td>
                                                                </tr>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({

    loginresponse:state.loginReducer.loginresponse
})
export default connect (mapStateToProps,null) (DocumentApprovel)