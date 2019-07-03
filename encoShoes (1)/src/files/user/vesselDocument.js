import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import { NavLink } from 'react-router-dom';
import UserHeader from '../user/header';
import UserSideBar from '../user/sidebar';
import axios from 'axios';
import { connect } from 'react-redux';
 class VesselDocument extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            shipProfileList : [],            
        }   
        this.onClick=this.onClick.bind(this)
    }   
    componentDidMount(){
        console.log("this.props.loginresponse.userInfos",this.props.loginresponse.userInfos)
       const {userId,roleId} = this.props.loginresponse.userInfos
        let url = baseUrl + '/user/ship/get'
        axios.post(url,{
            "userId" : userId,
             "roleId" : roleId
        }).then(response => {
            console.log("response from user vessel ",response.data)
            this.setState ({
                shipProfileList : response.data.shipProfileList
            })
              
            }).catch(error => {
                console.log("errorr",error)
               
            });
    }

    onClick(item){
        console.log("Div is clicked",item)
        sessionStorage.setItem('vesselId',item)
        var seeion = sessionStorage.getItem('vesselId')
        console.log("Vessel id is...",seeion)
        this.props.history.push('/vesseDocumentEBD')
    }    

    render(){
        return(
            <React.Fragment>
                <UserHeader/>                
                <UserSideBar/>
                {console.log("{this.state.modelchange}",this.state.modelchange)}
                {console.log("this.state.shipProfileList..",this.state.shipProfileList)}
                <div className="app-content" id={this.state.modelchange}>
        <div className="docuchainContent">
            <div className="docuuservesseldoc">
                <div className="row">
                {this.state.shipProfileList.map((item,i)=>{
                    return(
                        <div className="docuvessellist" onClick={()=>this.onClick(item.id)}>                        
                            <div className="uservessellist">
                               {item.shipProfilePicPath == null ? <img src="src/public/image/shipname.png" /> : <img src={item.shipProfilePicPath} />} 
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

    
    <div className="geoLocationPopup">
        <div className="modal fade" id="geoLocation" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Geo Location</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Latitude</label>
                                <input type="text" placeholder="13.0637824" />
                            </div>
                            <div className="form-group">
                                <label>Longitude</label>
                                <input type="text" placeholder="80.2627584" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer1">
                        <button type="button" className="btngeo clearbtn">Clear</button>
                        <button type="button" className="btngeo submitbtn clr448aff" data-dismiss="modal">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </React.Fragment>
        )
    }
}
const  mapStateToProps = state =>({
    loginresponse : state.loginReducer.loginresponse
});

export default connect (mapStateToProps,null)(VesselDocument)