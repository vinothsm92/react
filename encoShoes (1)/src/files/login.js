import React from 'react';
import {baseUrl} from '../common/apiUrl.js';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {loginService} from  '../files/service/action';
import { connect } from "react-redux";
 class loginclass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    this.signIn = this.signIn.bind(this);
    }
    componentWillReceiveProps(newProps){
        console.log("   ",newProps)
        const { status } =newProps.loginresponse
        console.log("status is ..",status,this.props.loginresponse)
        if(status === "Success")
        {
            console.log("sdfgsdgsgsggsgsgsgsgsgsggg",this.props.loginresponse)
            this.props.history.push('/userDashboard')
        }
    }
    handleChange(env){
        this.setState ({
            [env.target.name] : env.target.value
        },()=> console.log("state...",this.state));
    }
    signIn(e){
        e.preventDefault();
        console.log("element value is..",this.state.username);
        const data = {
            "userName" : this.state.username,
            "password" : this.state.password
        }
              this.props.loginService(data)
 
        // let url = baseUrl + '/user/login';
        // console.log("url before gitting..",url)
        // axios.post(url,{
        //     "userName" : this.state.username
        //     "password" : this.state.password
        // }).then(response => {
        //     console.log("response",response)
        //     if (response.status === 200) {
        //       console.log("reponce data from db..",response.data)
        //       sessionStorage.setItem('loginData', JSON.stringify(response.data.userInfos))
        //       this.props.history.push('/userDashboard')
              
        //     }   
        // }).catch(error => {
        //     console.log("reponce data from db..",error)
        // });
    }
    render() {
        console.log("sdfsdgfsdgs",this.props.loginresponse)
        return(
            <div className="docu-login-section">
            <div className="docu-login-logo">
                <div className="docu-form">
                    <div className="docu-logo">
                        <img src="src/public/image/logo.png" alt="logo"/>
                        <h1>Sign In</h1>
                    </div>
                    <div className="docu-form-div">
                        <form onSubmit={this.signIn}>
                            <div className="docu-form-group">
                                <input type="text" className="form-input" placeholder="User Name" name="username" onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="docu-form-group">
                                <input type="password" className="form-input" placeholder="Password" name="password" onChange={this.handleChange.bind(this)}/>
                            </div>
                            <div className="docu-form-group mtop40">
                                <div className="boxes">
                                    <input type="checkbox" id="box-1"/>
                                    <label htmlFor="box-1">Remember Me</label>
                                </div>
                                <span className="forgt-pwd">
                                    <a href="javascript:void(0)" >Forgot Password ?</a>
                                </span>
                            </div>
                            <div className="docu-form-group text-center">
                                <button  className="signin-btn" >Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="docu-group-logo">
                <div className="docu-group">
                    <img src="src/public/image/GN-Logo.png"/>
                </div>
            </div>
        </div>
        );
    }
}
const mapStateToProps = state => ({   

    loginresponse:state.loginReducer.loginresponse
    
  });
  
  const mapDispatchToProps = dispatch => ({
    loginService: data => dispatch(loginService(data))
  });
export default connect(mapStateToProps,mapDispatchToProps)(loginclass)