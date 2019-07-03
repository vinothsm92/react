import React from 'react';
import { baseUrl } from '../common/apiUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
    render(){
      return (
        <div class="registeration-body">
          <div class="container">
            <div class="registration-form">
              <div class="register-title">
                <h1>Style Box Master</h1>
              </div>
              <div class="register-form-div">
                <div class="add-box">
                  <button class="add-btn">Add</button>
                </div>
                <div class="add-box">
                  <div class="dropdown">
                    <button class="dropbtn">Fetch</button>
                    <div class="dropdown-content">
                      <a href="#">Aa</a>
                      <a href="#">Ba</a>
                      <a href="#">Cc</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
