import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import { NavLink } from 'react-router-dom';
import UserHeader from'../user/header';
import UserSideBar from '../user/sidebar';
import {connect} from 'react-redux';
import axios from 'axios';
class Workspace extends React.Component {
constructor(props){
    super(props);
    this.state = {
        groupVesselList : []
    }
}
componentWillMount(){
    const{userId,roleId} = this.props.loginresponse.userInfos;
    let url = baseUrl + '/user/ship/get';
    axios.post(url,{
        "userId": userId,
        "roleId": roleId

    }).then(response =>{
        console.log("response from user groupVesselList ",response.data)
        this.setState({
            groupVesselList : response.data.shipProfileList
        })
    }).catch(error=> {
        console.log("Error responce..",error.response)
    });
    
}
onClicked(id){
    console.log("id is ...",id)
    sessionStorage.setItem('vesselId',id)
    var seeion = sessionStorage.getItem('vesselId')
    console.log("Vessel id is...",seeion)
    this.props.history.push('/userWorkSpaceList')
}
    render(){
        return(
            <React.Fragment>
                <UserHeader />
                <UserSideBar />
                 <div class="app-content">
        <div class="docuchainContent">
            <div class="docuuservesseldoc">
                <div class="row">
                {this.state.groupVesselList.map((item,i)=>{
                    return(
                    <div class="docuvessellist" onClick={()=>this.onClicked(item.id)}>
                    
                        <div class="uservessellist">
                            {item.shipProfilePicPath != null ? <img src={item.shipProfilePicPath} /> : <img src="src/public/image/shipname.png" />}
                            <h1>{item.shipName}</h1>
                            <h1>{item.officialNo}</h1>
                        </div>
                    
                </div>
                )
                })}
                    
                </div>
            </div>
        </div>
    </div>
                </React.Fragment>
        );
    }

}
const mapStateToProps = state =>({
    loginresponse : state.loginReducer.loginresponse
});

export default connect(mapStateToProps,null)(Workspace)