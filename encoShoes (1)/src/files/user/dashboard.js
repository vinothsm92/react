import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import { NavLink } from 'react-router-dom';
import UserHeader from '../user/header';
import UserSideBar from '../user/sidebar';
import axios from 'axios';
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {viewShipProfile} from '../../files/service/dashboard/action';
 class dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerObj : [],
            loginDetail : ''
        }
    }
    // static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    //   };
    componentWillMount(){    
        this.setState({
            loginDetail : this.props.loginresponse
        })
        this.onLoadValue();     
        
    }
    componentWillReceiveProps(newProps){
        console.log("dashboard receve ship   ",newProps)
        console.log("dashboard reducer...",newProps.viewShipSuccessResponce,"error")
        if (newProps != ''){
            this.setState ( {
                headerObj : newProps.viewShipSuccessResponce.shipProfileList
            })
        }
        
        
    }
    onLoadValue(){      
        var loginObj = sessionStorage.getItem('loginData');
        var obj2 = JSON.parse(loginObj);
        const {userId} = this.props.loginresponse.userInfos
        console.log("before ship view api..",userId)
        if (userId != undefined && userId){
            this.props.viewShipProfile(userId)
            // let url = baseUrl + '/ship/viewShipProfile/'+ userId;
            // console.log("before ship view api..",url)
            // axios.get(url).then(response => {
            //     if (response.status == 200){
            //         //console.log("responce.data from db viewship profile...",response.data.shipProfileList)
            //         const { activeCount, } =response.data.shipProfileList
            //         this.setState({
            //             headerObj : response.data.shipProfileList
            //         })
                    
            //     }
            // })
        }
    }
    render(){
        console.log('props render', this.props)
        console.log("this.props.willmount", this.state.loginDetail.userInfos.userId)
        console.log("this.state.viewship...",this.state.headerObj)
         
        return(
            <React.Fragment>
                <UserHeader/>                
                <UserSideBar/>
               <div className="app-content">
            <div className="docuchainContent">
                <div className="docuchain-admin-title">
                    <h1>Expiry Based Documents Statistics</h1>
                </div>
                <div className="docuchain-admin-table">
                    <div className="row">
    
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="docuchainTable">
                                <div className="docuadmin-table">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th rowSpan="4" className="text-center">Vessels</th>
                                                <th rowSpan="3" className="addwidth150">Vessels Name</th>
                                                <th rowSpan="2" className="addwidth150">IMO Number</th>
                                                <th rowSpan="2" className="addwidth150">Type of Vessels</th>
                                                <th colSpan="5" className="text-center">Vessel Documents</th>
                                                <th rowSpan="2" className="text-center">Total Vessel Documents</th>
                                            </tr>
                                            <tr>
                                                <th className="text-center">Active</th>
                                                <th className="text-center">Renewal</th>
                                                <th className="text-center">Expired</th>
                                                <th className="text-center">Pending</th>
                                                <th className="text-center">Missing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.headerObj.map((item,i)=>{
                                                return(
                                                <tr>
                                                    <td className="text-center">
                                                       {item.shipProfilePicPath != null ? <img src={item.shipProfilePicPath}/> : <img src="src/public/image/ship-view.jpg"/>} 
                                                    </td>
                                                    <td>{item.vesselsName}</td>
                                                    <td>{item.imo}</td>
                                                    <td>{item.shipTypes}</td>
                                                    <td className="text-center">{item.activeCount}</td>
                                                    <td className="text-center">{item.renewelCount}</td>
                                                    <td className="text-center">{item.expiryedCount}</td>
                                                    <td className="text-center">{item.pendingCount}</td>
                                                    <td className="text-center">{item.missingCount}</td>
                                                    <td className="text-center">{item.totalCount}</td>
                                                </tr>
                                             ) })}
                                            
    
                                        </tbody>
                                    </table>
                                </div>
                               
                                <div className="clearfix"></div>
                            </div>
    
                        </div>
    
                    </div>
                </div>
                <div className="docuchain-admin-title">
                    <h1>Vessel tracker</h1>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <div className="locationNearest">
                            <button type="button" className="btnLatitude" data-toggle="modal" data-target="#geoLocation" data-backdrop="static">Geo Location</button>
                        </div>
                    </div>
                </div>
                 <div className="vesselMap">
    
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-xs-12">
                            <div className="docuchainMapVictor">
                              {/* <Map
                                google={this.props.google}
                                zoom={14}
                                
                                initialCenter={{
                                lat: -1.2884,
                                lng: 36.8233
                                }}
                            /> */}

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
     
    loginresponse:state.loginReducer.loginresponse,
    viewShipSuccessResponce : state.viewShipReducer.viewShipSuccessResponce,
    viewShipErrorResponce : state.viewShipReducer.viewShipErrorResponce
    
  });  
 const mapDispatchToProps = dispatch => ({
     viewShipProfile : userId => dispatch(viewShipProfile(userId))
 });
export default connect(mapStateToProps,mapDispatchToProps)(dashboard)

//  GoogleApiWrapper({
//     apiKey: ''
//   })(dashboard);