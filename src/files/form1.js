import React from 'react';
import axios from 'axios';
import { baseUrl } from '../common/apiUrl';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyerMaster: [],
      buyer: '',
      boxList: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    let url = baseUrl + 'buyernames'
    axios.get(url).then(response => {
      if (response.status === 200) {
        if (this.mounted) {
          this.setState({ buyerMaster: response.data.listOfString });
        }
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  handleChange(e) {
    const data = e.target.value
    let url = baseUrl + 'fetchcartoonbox?buyer=' + data;
    axios.get(url).then(response => {
      if (response.status === 200) {
        if (response.data.dureaboxmastermdllist.length !== 0) {
          this.setState({ boxList: response.data.dureaboxmastermdllist })
          sessionStorage.setItem("boxList", JSON.stringify(response.data.dureaboxmastermdllist));
          this.props.history.push('/formthreeandfour')
        }
        else {
          toast.error("No Data !!!", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      }
      else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }).catch(error => {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER
      });
    });

  }
  render() {
    return (
      <div className="registeration-body">
        <ToastContainer />
        <div className="container">
          <div className="registration-form">
            <div className="register-title">
              <h1>Box Master</h1>
            </div>
            <div className="register-form-div">
              <div className="add-box">
                <NavLink to={'/formfive'}> <button className="add-btn">Style Box Master</button></NavLink>
              </div>
              <div className="add-box">
                <NavLink to={'/formtwo'}> <button className="add-btn">Add</button></NavLink>
              </div>
              <div className="add-box">
                <div className="dropdown">
                  <button className="dropbtn">Fetch</button>
                  <div className="dropdown-content">
                    <select onChange={this.handleChange} name="buyer" >
                      <option value=''>Select Buyer Name</option>

                      {this.state.buyerMaster.map((item, i) => {
                        return (
                          <option key={i} value={item}>{item}</option>
                          // <a key={i} onClick={this.handleClick} id="buyer" value={item}>{item}</a> 
                        )
                      })}
                    </select>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}