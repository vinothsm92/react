import React from 'react';
import UserSidebar from '../user/sidebar';
import UserHeader from '../user/header';
export default class UserTask extends React.Component{

render(){
    return(
        <React.Fragment>
            <UserHeader />
            <UserSidebar />
 <div class="app-content">
        <div class="docubodyTitle">
            <ul>
                <li>
                    <a href="javascript:void(0);">Tasks</a>
                </li>

            </ul>
            <div class="bttnGroup">
                <button type="button" class="addNew" data-toggle="modal" data-target="#createtask" data-backdrop="static">
                    <img src="src/public/image/add-user-button.png" />Create Tasks</button>
            </div>
        </div>
        <div class="docuContent">
            <div class="vesslesDocumentsTable">
                <div class="tasksManagement">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tab" role="tabpanel">
                                {/* <!-- Nav tabs -- */}
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active">
                                        <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Task Assigned by you</a>
                                    </li>
                                    <li role="presentation">
                                        <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Task Assigned to you</a>
                                    </li>
                                </ul>
                                {/* <!-- Tab panes -- */}
                                <div class="tab-content tabs">
                                    <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                                        <div class="taskmanagementtable">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="datatableEntry">
                                                        <label>Show
                                                            <input type="text" placeholder="6" />of
                                                            <span>60</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="docuchainSearchbox">
                                                        <div class="searchInput">
                                                            <input type="text" placeholder="Search" />
                                                            <button type="button" class="searchIcon">
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-xs-12">
                                                    <div class="taskMangeTable">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center addwidth50">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx14" type="checkbox" style={{display: 'none'}} />
                                                                            <label class="cbx" for="cbx14">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </th>
                                                                    <th class="addwidth150">Task Name</th>
                                                                    <th class="addwidth150">Start Date</th>
                                                                    <th class="addwidth150">End Date</th>
                                                                    <th class="addwidth150">Status</th>
                                                                    <th class="text-center addwidth150">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx15" type="checkbox" style={{display: 'none'}} />
                                                                            <label class="cbx" for="cbx15">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Task Name</td>
                                                                    <td>2018-07-31
                                                                        <span>11:21</span>
                                                                    </td>
                                                                    <td>2018-08-01
                                                                        <span>18:39</span>
                                                                    </td>

                                                                    <td>
                                                                        Yet To Start
                                                                    </td>

                                                                    <td class="text-center">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#viewtasks" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#updatetask" data-backdrop="static">
                                                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned deleteBtn" data-toggle="modal" data-target="#delete" data-backdrop="static">
                                                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx16" type="checkbox" style={{display: 'none'}} />
                                                                            <label class="cbx" for="cbx16">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Task Name</td>
                                                                    <td>2018-07-31
                                                                        <span>11:21</span>
                                                                    </td>
                                                                    <td>2018-08-01
                                                                        <span>18:39</span>
                                                                    </td>

                                                                    <td>
                                                                        Yet To Start
                                                                    </td>

                                                                    <td class="text-center">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#viewtasks" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#updatetask" data-backdrop="static">
                                                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned deleteBtn" data-toggle="modal" data-target="#delete" data-backdrop="static">
                                                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx17" type="checkbox" style={{display: 'none'}} />
                                                                            <label class="cbx" for="cbx17">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Task Name</td>
                                                                    <td>2018-07-31
                                                                        <span>11:21</span>
                                                                    </td>
                                                                    <td>2018-08-01
                                                                        <span>18:39</span>
                                                                    </td>

                                                                    <td>
                                                                        Yet To Start
                                                                    </td>

                                                                    <td class="text-center">
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#viewtasks" data-backdrop="static">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned editBtn" data-toggle="modal" data-target="#updatetask" data-backdrop="static">
                                                                            <i class="fa fa-pencil" aria-hidden="true"></i>
                                                                        </button>
                                                                        <button type="button" class="btned deleteBtn" data-toggle="modal" data-target="#delete" data-backdrop="static">
                                                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="vesselstablebottom">
                                                        <ul class="pagination pull-right">
                                                            <li class="disabled">
                                                                <a href="#">
                                                                    Previous
                                                                </a>
                                                            </li>
                                                            <li class="active">
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
                                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                                        <div class="taskmanagementtable">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="datatableEntry">
                                                        <label>Show
                                                            <input type="text" placeholder="6" />of
                                                            <span>60</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="docuchainSearchbox">
                                                        <div class="searchInput">
                                                            <input type="text" placeholder="Search" />
                                                            <button type="button" class="searchIcon">
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12 col-xs-12">
                                                    <div class="taskMangeTable">
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center addwidth50">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx18" type="checkbox" style={{display: 'none'}}/>
                                                                            <label class="cbx" for="cbx18">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </th>
                                                                    <th>Task Name</th>
                                                                    <th>Start Date</th>
                                                                    <th>End Date</th>
                                                                    <th>Assigned By</th>
                                                                    <th>Status</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx19" type="checkbox" style={{display: 'none'}} />
                                                                            <label class="cbx" for="cbx19">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Task Name</td>
                                                                    <td>2018-07-31
                                                                        <span>11:21</span>
                                                                    </td>
                                                                    <td>2018-08-01
                                                                        <span>18:39</span>
                                                                    </td>
                                                                    <td>prasath</td>
                                                                    <td>
                                                                        In Progress
                                                                    </td>

                                                                    <td class="text-center">
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="text-center">
                                                                        <div class="userextensioncheckbox">
                                                                            <input class="inp-cbx" id="cbx20" type="checkbox" style={{display: 'none'}}/>
                                                                            <label class="cbx" for="cbx20">
                                                                                <span>
                                                                                    <svg width="12px" height="10px" viewbox="0 0 12 10">
                                                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                                                    </svg>
                                                                                </span>
                                                                            </label>
                                                                        </div>
                                                                    </td>
                                                                    <td>Task Name</td>
                                                                    <td>2018-07-31
                                                                        <span>11:21</span>
                                                                    </td>
                                                                    <td>2018-08-01
                                                                        <span>18:39</span>
                                                                    </td>
                                                                    <td>prasath</td>
                                                                    <td>
                                                                        In Progress
                                                                    </td>

                                                                    <td class="text-center">
                                                                        <button type="button" class="btned editBtn">
                                                                            <i class="fa fa-eye" aria-hidden="true"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div class="vesselstablebottom">
                                                        <ul class="pagination pull-right">
                                                            <li class="disabled">
                                                                <a href="#">
                                                                    Previous
                                                                </a>
                                                            </li>
                                                            <li class="active">
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
    </div>

        </React.Fragment>
    )
}


}