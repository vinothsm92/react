import React from 'react';
import {baseUrl} from '../../common/apiUrl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
class header extends React.Component{
    constructor(props){
        super(props);    
        this.state = {
            headerObj : {
               }  
        }   
        this.onloadValue = this.onloadValue.bind(this);
        this.logout = this.logout.bind(this);
    };

    componentWillMount() {
        this.onloadValue();
    }
    onloadValue()   {       
        console.log('this.props.loginresponse.userInfos',this.props.loginresponse)
        const {userId} = this.props.loginresponse.userInfos
       console.log("userId values...",userId)           
        let url = baseUrl + '/ship/getDashboardTopCount/'+ userId;
        axios.get(url).then(response => {
            if (response.status == 200){
                console.log("responce.data from db...",response.data)
                const { activeCount, } =response.data.shipProfileList[0]
                this.setState({
                    headerObj : response.data.shipProfileList[0]
                })
                
            }
        })
    
    }
    logout(){        
        localStorage.clear();
       // this.props.history.push("/");
    }
    render(){        
    //    console.log("this,.state.",this.state.headerObj && this.state.headerObj)s
        return(
            <div className="app sidebar-mini rtl">            
            <div className="docuchain-app-header">
            <a className="docuchain-header-logo" href="adminDashboard.html">
                <img src="src/public/image/GN-Logo.png" height="75" />
            </a>
            <a className="docuchain-sidebar-toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
            <div className="docuchain-count-list">
                <ul>
                    <li>
                        <a href="javascript:void(0);">
                            <div className="countList">
                                <div className="shipnamelist">
                                    <h1>Vessel</h1>
                                    <h3 className="bluelight">{this.state.headerObj.vesselsCount}</h3>
                                </div>
                                <div className="shipimage">
                                    <img src="src/public/image/topVesselscount.png"/>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <div className="countList">
                                <div className="shipnamelist">
                                    <h1>Active</h1>
                                    <h2 className="textgreen">{this.state.headerObj.activeCount}</h2>
                                </div>
                                <div className="shipimage">
                                    <img src="src/public/image/active.png"/>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <div className="countList">
                                <div className="shipnamelist">
                                    <h1>Renewal</h1>
                                    <h2 className="textorange">{this.state.headerObj.renewelCount}</h2>
                                </div>
                                <div className="shipimage">
                                    <img src="src/public/image/renewal.png"/>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <div className="countList">
                                <div className="shipnamelist">
                                    <h1>Expired</h1>
                                    <h2 className="red">{this.state.headerObj.expiryedCount}</h2>
                                </div>
                                <div className="shipimage">
                                   {/* <img src="image/topExpired.png"/> */}
                                    <img src= 'src/public/image/topExpired.png'/>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
    
            
            <ul className="docuchain-app-nav">
                <li className="dropdown">
                    <a className="app-nav__item animated infinite swing" href="#" data-toggle="dropdown" aria-label="Show notifications">
                        <img src="src/public/image/notification.png" alt="notification"/>
                        <span>3</span>
                    </a>
                    <ul className="app-notification dropdown-menu dropdown-menu-right animated hiding" data-animation="bounceInDown">
                        <li className="app-notification__title">Notifications</li>
                        <div className="app-notification__content">
                            <li>
                                <a className="app-notification__item" href="javascript:void(0);">
                                    <span className="app-notification__icon">
                                        <img src="src/public/image/transporte-view-green.png"/>
                                    </span>
                                    <div>
                                        <p className="app-notification__message">Kaeeh Zhan</p>
                                        <p className="app-notification__meta">Just Now</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="app-notification__item" href="javascript:void(0);">
                                    <span className="app-notification__icon">
                                        <img src="src/public/image/transporte-view-red.png"/>
                                    </span>
                                    <div>
                                        <p className="app-notification__message">Kaeeh Zhan</p>
                                        <p className="app-notification__meta">5 min ago</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="app-notification__item" href="javascript:void(0);">
                                    <span className="app-notification__icon">
                                        <img src="src/public/image/transporte-view-yellow.png"/>
                                    </span>
                                    <div>
                                        <p className="app-notification__message">Kaeeh Zhan</p>
                                        <p className="app-notification__meta">2 days ago</p>
                                    </div>
                                </a>
                            </li>
                            <div className="app-notification__content">
                                <li>
                                    <a className="app-notification__item" href="javascript:void(0);">
                                        <span className="app-notification__icon">
                                            <img src="src/public/image/transporte-view-yellow.png"/>
                                        </span>
                                        <div>
                                            <p className="app-notification__message">Kaeeh Zhan</p>
                                            <p className="app-notification__meta">3 days ago</p>
                                        </div>
                                    </a>
                                </li>
                            </div>
                        </div>
                        <li className="app-notification__footer">
                            <a href="notification.html">See all Notifications.</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a className="app-nav__item" href="#" data-toggle="modal" data-target="#logout" data-backdrop="static" aria-label="Show notifications" onClick= {this.logout()}>
                        <img src="src/public/image/logout.png" alt="logout"/>
                    </a>
                </li>
    
            </ul>
            <div className="doculogo">
                <a href="javascript:void(0);">
                    <img src="src/public/image/docuchainLogo.png"/>
                </a>
            </div>
        </div>        
        </div>
    )
}
}
const mapStateToProps = state => ({
    loginresponse:state.loginReducer.loginresponse
})

export default connect(mapStateToProps,null)(header)