import React from 'react';
import {NavLink} from 'react-router-dom';
import UserHeader from '../user/header';
import UserSideBar from '../user/sidebar';
import { connect } from 'react-redux';
import {baseUrl} from '../../common/apiUrl';
import axios from 'axios';

class UserExtension extends React.Component{
   constructor(props){
       super(props);
       this.state = {
        shipList : [],
        userList : []
       }
   }
   componentWillMount(){
       
       console.log("props value here..",this.props.loginresponse)
       const {userId,roleId} = this.props.loginresponse.userInfos
       let url = baseUrl + '/ship/list/organization/' + userId;
       var getUserUrl;
       roleId == 4 ? getUserUrl= baseUrl + '/user/techmanager/list/'+ userId : getUserUrl = baseUrl + '/user/commercialmanager/list/' + userId;
       console.log("before api..",url,"....",getUserUrl)
       axios.get(getUserUrl).then(response => {
            this.setState({
                userList : response.data.technicalManagerInfos != null ? response.data.technicalManagerInfos : response.data.commercialManagerInfos
            })
            console.log("responce userList..",this.state.userList)
       }).catch(error => {
           console.log("error responce..",error)
       })
       axios.get(url).then(response => {
        this.setState ({
            shipList : response.data.shipProfileList
        })
        console.log("state value is..",this.state.shipList)
       }).catch(error=>{
           console.log("error responce..",error)
       })
   }
    render(){
        return(
            <React.Fragment>
                <UserHeader/>
                <UserSideBar/>
                <div class="app-content">
        <div class="docuchainContent">
            <div class="userUserExtension">
                <h1>User Extension</h1>
                <div class="extension">
                    <form>
                        <div class="form-group">
                            <label>Vessel Name</label>
                            <div class="extensionform">
                            <select>
                                    {
                                        this.state.shipList.map(function(item){
                                            return <option value={item.shipName} >{item.shipName}</option>;
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Number of Users</label>
                            <div class="extensionform">
                            <input type="number" custom-focus class="text-box"  min="1" max="2" required />
                            </div>
                        </div>
                    
                        <div class="form-group">
                            <label>Select User</label>
                            <div class="extensionform">
                                <select>
                                   {
                                       this.state.userList.map(function (item){
                                           return <option value={item.userName}>{item.userName}</option>
                                       })
                                   }
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Remarks</label>
                            <textarea></textarea>
                        </div>
                    </form>
                </div>
                <div class="extensionbtngroup">
                    <button type="button" class="btngeo clearbtn1">Clear</button>
                    <button type="button" class="btngeo btnsubmit">Submit</button>
                </div>
            </div>
        </div>
    </div>
        </React.Fragment>
        )
    }
}
const mapStateToProps = state =>({
    loginresponse:state.loginReducer.loginresponse
})
export default connect (mapStateToProps,null)(UserExtension)