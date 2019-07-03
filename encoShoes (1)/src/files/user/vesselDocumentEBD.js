import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import UserHeader from '../user/header';
import UserSideBar from '../user/sidebar';
import axios from 'axios';

export default class VesseDocumentEBD extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            expiryDocumentList : []
        }
    }
    componentWillMount(){
        console.log("Vessel id is...",sessionStorage.getItem('vesselId'))
        let url = baseUrl + '/expiry/document/holder/all/'+sessionStorage.getItem('vesselId')+'/'+ 0;
        axios.get(url).then(response => {
            console.log("response from user vessel ",response.data.expiryDocumentList)       
            this.setState({
                expiryDocumentList : response.data.expiryDocumentList
            })
            }).catch(error => {
                console.log("errorr",error)
               
            });
    }
    render() {
        return(
            <React.Fragment>
                <UserHeader/>                
                <UserSideBar/>
                {console.log("this.state.expiryDocumentList",this.state.expiryDocumentList)}
                <div className="app-content">
        <div className="docuchainContent">
            <div className="row">
                <div className="col-lg-12">
                    <div className="docuuserdoculist">
                        <div className="tab" role="tabpanel">                            
                            <ul className="nav nav-tabs" role="tablist">
                                <li role="presentation" className="active">
                                    <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Expiry Based Document</a>
                                </li>
                                <li role="presentation">
                                    <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Voyage Specific Document</a>
                                </li>
                            </ul>
                            
                            <div className="tab-content tabs">
                                <div role="tabpanel" className="tab-pane fade in active" id="Section1">
                                    <div className="vessellistable">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="datatableEntry">
                                                    <label>Show
                                                        <input type="text" placeholder="6" />of
                                                        <span>60</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="docuchainSearchbox">
                                                    <div className="searchInput">
                                                        <input type="text" placeholder="Search" />
                                                        <button type="button" className="searchIcon">
                                                            <i className="fa fa-search" aria-hidden="true"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-xs-12">
                                                <div className="taskMangeTable">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th className="text-center">
                                                                    <div className="clearcheckbox">
                                                                        <label className="control control--checkbox">
                                                                            <input id="selectAll" type="checkbox" />
                                                                            <div className="control__indicator"></div>
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <th>Certificate</th>
                                                                <th>Certificate No </th>
                                                                <th>IssuingAuthority</th>                                                                
                                                                <th>Place of Issue </th>
                                                                <th>Date of Issue</th>
                                                                <th>Date of Expiry</th>
                                                               
                                                                <th className="text-center addwidth180">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                             {this.state.expiryDocumentList.map((item, i) => (
                                                                <tr>
                                                               
                                                                <td className="text-center">
                                                                    <div className="clearcheckbox">
                                                                        <label className="control control--checkbox">
                                                                            <input id="selectAll" type="checkbox" />
                                                                            <div className="control__indicator"></div>
                                                                        </label>
                                                                    </div>
                                                                </td>
                                                                <td>{item.documentHolderName}</td>
                                                                <td>{item.certificateNumber} </td> 
                                                                <td>{item.issuingAuthority}</td>                                                               
                                                                <td>{item.issueDateString}</td>
                                                                <td>{item.expiryDateString}</td>
                                                               

                                                                <td className="text-center">
                                                                    <button type="button" className="btned editBtn">
                                                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                                                    </button>
                                                                    <button type="button" className="btned editBtn" data-toggle="modal" data-target="#uploadf" data-backdrop="static">
                                                                        <i className="fa fa-upload" aria-hidden="true"></i>
                                                                    </button>
                                                                    <button type="button" className="btned editBtn">
                                                                        <i className="fa fa-download" aria-hidden="true"></i>
                                                                    </button>
                                                                    <button type="button" className="btned editBtn" data-toggle="modal" data-target="#history" data-backdrop="static">
                                                                        <i className="fa fa-history" aria-hidden="true"></i>
                                                                    </button>
                                                                    <button type="button" className="btned editBtn">
                                                                        <i className="fa fa-tag" aria-hidden="true"></i>
                                                                    </button>
                                                                </td>
                                                                  
                                                            </tr> 
                                                        ))} 
                                                                                                                      
                                                          
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="vesselstablebottom">
                                                    <button type="button" className="btned sharebtn" data-toggle="modal" data-target="#sharepopup" data-backdrop="static">
                                                        <i className="fa fa-share-alt" aria-hidden="true"></i>Share</button>
                                                    <ul className="pagination pull-right">
                                                        <li className="disabled">
                                                            <a href="#">
                                                                Previous
                                                            </a>
                                                        </li>
                                                        <li className="active">
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