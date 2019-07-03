import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import FormOne from './src/files/form1.js';
import FormTwo from './src/files/form2.js';
import Login from './src/files/login.js';
import UserHeader from './src/files/user/header.js';
import UserSideBar from './src/files/user/sidebar.js';
import UserVesselDoc from './src/files/user/vesselDocument.js'
import UserDashboard from './src/files/user/dashboard.js';
import MainComponent from './src/files/user/maincomponent.js';
import DocumentApprovel from './src/files/user/documentApprovel.js'
import FormThreeandFour from './src/files/form3 and form4.js';
import Workspace from './src/files/user/workspace.js';
import UserTask from './src/files/user/UserTask.js';
import loginReducer from  './src/files/service/reducer'
import viewShipReducer from './src/files/service/dashboard/reducer';
import WorkspaceList from './src/files/user/workspaceList.js';
import UserExtension from './src/files/user/UserExtension.js';
import VesseDocumentEBD from './src/files/user/vesselDocumentEBD'
import { combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const rootReducer = combineReducers({

    loginReducer,viewShipReducer
});
const store = applyMiddleware(thunk)(createStore)(rootReducer)

// render(<BrowserRouter>
//     <Switch>
//         <Redirect exact path="/" to="/login" />
//         <Route path="/login" component={Login} />
//         <Route path="/userHeader" component={UserHeader}/>
//         <Route path="/userSidebar" component={UserSideBar}/>
//         <Route path="/userDashboard" component={UserDashboard}/>
//         <Route path="/mainComponent" component={MainComponent}/>
//         <Route path="/vesselDocument" component={UserVesselDoc}/>
//         <Route path="/formone" component={FormOne} />
//         <Route path="/formtwo" component={FormTwo} />
//         <Route path="/formthreeandfour" component={FormThreeandFour} />
//         {/* <Route path="/formfive" component={formfive} /> */}


//     </Switch>
// </BrowserRouter>, document.getElementById('app'));

ReactDOM.render(<Provider store={store}>
<BrowserRouter>
  <Switch>
              <Redirect exact path="/" to="/login" />
       <Route path="/login" component={Login} />
       <Route path="/userHeader" component={UserHeader}/>
         <Route path="/userSidebar" component={UserSideBar}/>
         <Route path="/userDashboard" component={UserDashboard}/>
         <Route path="/mainComponent" component={MainComponent}/>
         <Route path="/vesselDocument" component={UserVesselDoc}/>
         <Route path="/vesseDocumentEBD" component={VesseDocumentEBD}/>
         <Route path="/documentApprovel" component={DocumentApprovel}/>
         <Route path="/userworkpace" component={Workspace}/>
         <Route path="/userWorkSpaceList" component={WorkspaceList} />
         <Route path="/userExtension" component={UserExtension} />
         <Route path="/userTask" component={UserTask}/>
</Switch>
</BrowserRouter>,
</Provider>, document.getElementById('app'))