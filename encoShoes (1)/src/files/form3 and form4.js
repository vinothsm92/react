import React from 'react';
import axios from 'axios';
import { baseUrl } from '../common/apiUrl';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormThreeandFour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyername: '',
            cartonbox: '',
            id: '',
            pairs: '',
            sequenceub: '',
            unitbox: '',
            weightcb: '',
            weightub: '',
            tableLists: [],
            form4: false,
            form3: true,
            unitBoxtick: false,
            tick: false,
            unit1: '',
            unit2: '',
            unit3: '',
            unit4: '',
            unit5: '',
            unit6: '',
            unit7: '',
            unit8: '',
            buyername: '',
            weightub: '',
            sequenceub: '',
            weightcb: '',
            pairs: '',
            unit1Valid: false,
            unit2Valid: false,
            unit3Valid: false,
            unit4Valid: false,
            unit5Valid: false,
            unit6Valid: false,
            unit7Valid: false,
            unit8Valid: false,
            buyerNameValid: false,
            weightUnitvalid: false,
            unitPairValid: false,
            weightCartonValid: false,
            cartonPairValid: false,
            formValid: false,
            unitDisable: false,
            unitDisabledimension: false,
            cartonDisable: false,
            cartonDisabledimension: false,
            buyerMaster: [],
            editId: '',
            editBoxObject: {}
        }
        this.deleteRow = this.deleteRow.bind(this);
        this.editRow = this.editRow.bind(this);
        this.unitBoxChange = this.unitBoxChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.inputFilled = this.inputFilled.bind(this);
        this.onlyNumbers = this.onlyNumbers.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
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
        }).catch(error => {
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
            });
        });
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    componentWillMount() {
        const tableList = JSON.parse(sessionStorage.getItem("boxList"));
        this.setState({ tableLists: tableList })
    }

    deleteRow(id) {
        const url = baseUrl + 'deletecartoonbox/' + id;
        axios.delete(url, id).then(response => {
            if (response.status == 200) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                });
                // this.props.history.push('/formone')
            }
        }).catch(error => {
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
            });
        });
    }
    editRow(id) {
        this.setState({ form4: true, form3: false })
        const url = baseUrl + 'editboxmaster/' + id;
        axios.get(url, id).then(response => {
            if (response.status == 200) {
                let editBoxObject = Object.assign({}, this.state.editBoxObject);
                editBoxObject = response.data.dureaboxmastermdl;
                this.setState({ editBoxObject }, () => console.log("edit datasss", this.state.editBoxObject));
                if (this.state.editBoxObject.unitbox) {
                    var str = this.state.editBoxObject.unitbox;
                    var boo = str.includes("*");
                    var string = this.state.editBoxObject.cartonbox;
                    var bo = string.includes("*");
                    if (boo === true) {
                        var field = this.state.editBoxObject.unitbox.split('*');
                        this.setState({ unit1: field[0], unit2: field[1], unit3: field[2], unitDisable: true, unitDisabledimension: false })
                    }
                    else {
                        this.setState({ unit4: this.state.editBoxObject.unitbox, unitDisable: false, unitDisabledimension: true })
                    }
                    if (bo === true) {
                        var fields = this.state.editBoxObject.cartonbox.split('*');
                        this.setState({ unit5: fields[0], unit6: fields[1], unit7: fields[2], cartonDisable:true, cartonDisabledimension:false })
                    } else {
                        this.setState({ unit8: this.state.editBoxObject.cartonbox, cartonDisable:false, cartonDisabledimension:true })
                    }
                    this.setState({
                        editId: response.data.dureaboxmastermdl.id,
                        buyername: response.data.dureaboxmastermdl.buyername,
                        weightub: response.data.dureaboxmastermdl.weightub,
                        sequenceub: response.data.dureaboxmastermdl.sequenceub,
                        pairs: response.data.dureaboxmastermdl.pairs,
                        weightcb: response.data.dureaboxmastermdl.weightcb,
                        unitBoxtick: true,
                        tick: true
                    });

                }
                else if (!this.state.editBoxObject.unitbox) {
                    var string = this.state.editBoxObject.cartonbox;
                    var bo = string.includes("*");
                    if (bo === true) {
                        var fields = this.state.editBoxObject.cartonbox.split('*');
                        this.setState({ unit5: fields[0], unit6: fields[1], unit7: fields[2] })
                    } else {
                        this.setState({ unit8: this.state.editBoxObject.cartonbox })
                    }
                    this.setState({
                        editId: response.data.dureaboxmastermdl.id,
                        buyername: response.data.dureaboxmastermdl.buyername,
                        pairs: response.data.dureaboxmastermdl.pairs,
                        weightcb: response.data.dureaboxmastermdl.weightcb,
                        unitBoxtick: false,
                        tick: false
                    });

                }

                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }).catch(error => {
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER
            });
        });
    }
    unitBoxChange() {
        this.setState({ tick: !this.state.tick })
        if (this.state.tick) {
            this.setState({
                unitBoxtick: false, unitDisable: false, unitDisabledimension: false,
                cartonDisable: false, cartonDisabledimension: false
            })
        }
        else {
            this.setState({
                unitBoxtick: true, unitDisable: false, unitDisabledimension: false,
                cartonDisable: false, cartonDisabledimension: false
            })
        }
    }
    handleChange(e) {
        if (e.target.name == "weightub" || e.target.name == "sequenceub"
            || e.target.name == "weightcb" || e.target.name == "pairs") {
            this.setState({ [e.target.name]: e.target.value }, () => { this.validate })
        }
        else {
            if (e.target.name == "buyername") {
                this.setState({ [e.target.name]: e.target.value }, () => { this.validate });
            }
            else if (e.target.name == "unit4" && e.target.value != '') {
                this.setState({ [e.target.name]: e.target.value, unitDisable: false, unitDisabledimension: true }, () => { this.validate })
            }
            else if (e.target.name == "unit4" && e.target.value == '') {
                this.setState({ [e.target.name]: e.target.value, unitDisable: false, unitDisabledimension: false }, () => { this.validate })
            }
            else if (e.target.name == "unit8" && e.target.value != '') {
                this.setState({ [e.target.name]: e.target.value, cartonDisable: false, cartonDisabledimension: true }, () => { this.validate })
            }
            else if (e.target.name == "unit8" && e.target.value == '') {
                this.setState({ [e.target.name]: e.target.value, cartonDisable: false, cartonDisabledimension: false }, () => { this.validate })
            }
            else if (e.target.name == "unit1" || e.target.name == "unit2" || e.target.name == "unit3") {
                this.setState({ [e.target.name]: e.target.value }, () => this.unitBoxValidation())
            }
            else if (e.target.name == "unit5" || e.target.name == "unit6" || e.target.name == "unit7") {
                this.setState({ [e.target.name]: e.target.value }, () => this.cartonBoxValidation())
            }
        }
    }
    unitBoxValidation() {
        this.state.unit1 == '' && this.state.unit2 == '' && this.state.unit3 == '' ?
            this.setState({ unitDisable: false, unitDisabledimension: false }, () => { this.validate })
            : this.setState({ unitDisable: true, unitDisabledimension: false }, () => { this.validate })
    }
    cartonBoxValidation() {
        this.state.unit5 == '' && this.state.unit6 == '' && this.state.unit7 == '' ?
            this.setState({ cartonDisable: false, cartonDisabledimension: false }, () => { this.validate })
            : this.setState({ cartonDisable: true, cartonDisabledimension: false }, () => { this.validate })
    }
    validate() {
        console.log("yas")
        // if (this.state.unitBoxtick == true) {
        //     this.setState({
        //         formValid:
        //             (buyerNameValid && weightCartonValid && cartonPairValid && weightUnitvalid &&
        //                 unitPairValid && ((unit5Valid && unit6Valid && unit7Valid) || unit8Valid))
        //             && ((unit1Valid && unit2Valid && unit3Valid) || unit4Valid)
        //     })
        // }
        // else {
        //     this.setState({
        //         formValid:
        //             (buyerNameValid && weightCartonValid && cartonPairValid &&
        //                 ((unit5Valid && unit6Valid && unit7Valid) || unit8Valid))
        //     }, () => console.log(this.state.buyerNameValid, this.state.weightCartonValid, this.state.cartonPairValid,
        //         this.state.unit5Valid, this.state.unit6Valid, this.state.unit7Valid, this.state.unit8Valid))
        // }
    }
    onlyNumbers(e) {
        const re = /[0-9]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
    }
    // inputFilled() {
    //     if (this.state.unit5 !== '') {
    //         if (this.state.buyername && this.state.unit5 !== '' && this.state.unit6 !== '' && this.state.unit7 !== '') {
    //             const url = baseUrl + "checkcartoonbox?buyer=" + this.state.buyername + "&cartoonbox=" + this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7;
    //             axios.get(url).then(response => {
    //                 if (response.status === 206) {
    //                     toast.error(response.data.message, {
    //                         position: toast.POSITION.TOP_CENTER
    //                     });
    //                     this.setState({ unit5: '', unit6: '', unit7: '' })
    //                 }
    //             }).catch(error => {
    //                 toast.error(error, {
    //                     position: toast.POSITION.TOP_CENTER
    //                 });
    //             });
    //         }
    //         else {
    //             toast.error('Please Enter Buyer Name and All Carton Box Values Properly !', {
    //                 position: toast.POSITION.TOP_CENTER
    //             });
    //         }
    //     }
    //     else if (this.state.unit1 !== '') {
    //         if (this.state.buyername && this.state.unit1 !== '' && this.state.unit2 !== '' && this.state.unit3 !== '') {
    //             const url = baseUrl + "checkunitbox?buyer=" + this.state.buyername + "&unitbox=" + this.state.unit1 + "*" + this.state.unit2 + "*" + this.state.unit3;
    //             axios.get(url).then(response => {
    //                 if (response.status === 206) {
    //                     toast.error(response.data.message, {
    //                         position: toast.POSITION.TOP_CENTER
    //                     });
    //                     this.setState({ unit1: '', unit2: '', unit3: '' })
    //                 }
    //             }).catch(error => {
    //                 toast.error(error, {
    //                     position: toast.POSITION.TOP_CENTER
    //                 });
    //             });
    //         }
    //         else {
    //             toast.error('Please Enter Buyer Name and All Unit Box Values Properly !', {
    //                 position: toast.POSITION.TOP_CENTER
    //             });
    //         }
    //     }

    // }
    formSubmit(e) {

        if (this.state.unitBoxtick === true) {
            if (this.state.unit4 === '' && this.state.unit8 === '') {
                var payLoad = {
                    buyername: this.state.buyername,
                    unitbox: this.state.unit1 + "*" + this.state.unit2 + "*" + this.state.unit3,
                    weightub: this.state.weightub,
                    sequenceub: this.state.sequenceub,
                    cartonbox: this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7,
                    weightcb: this.state.weightcb,
                    pairs: this.state.pairs
                }
            }
            else if (this.state.unit4 !== '' && this.state.unit8 !== '') {
                var payLoad = {
                    buyername: this.state.buyername,
                    unitbox: this.state.unit4,
                    weightub: this.state.weightub,
                    sequenceub: this.state.sequenceub,
                    cartonbox: this.state.unit8,
                    weightcb: this.state.weightcb,
                    pairs: this.state.pairs
                }
            }
            else if(this.state.unit4 === '' && this.state.unit8 !== ''){
                var payLoad = {
                    buyername: this.state.buyername,
                    unitbox: this.state.unit1 + "*" + this.state.unit2 + "*" + this.state.unit3,
                    weightub: this.state.weightub,
                    sequenceub: this.state.sequenceub,
                    cartonbox: this.state.unit8,
                    weightcb: this.state.weightcb,
                    pairs: this.state.pairs
                }
            }
            else if(this.state.unit4 !== '' && this.state.unit8 === ''){
                var payLoad = {
                    buyername: this.state.buyername,
                    unitbox: this.state.unit4,
                    weightub: this.state.weightub,
                    sequenceub: this.state.sequenceub,
                    cartonbox: this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7,
                    weightcb: this.state.weightcb,
                    pairs: this.state.pairs
                }
            }

        }
        else {
            if (this.state.unit8 === '') {
                var payLoad = {
                    buyername: this.state.buyername,
                    cartonbox: this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7,
                    weightcb: this.state.weightcb,
                    pairs: this.state.pairs
                }
            }
            else {
                var payLoad = {
                    buyername: this.state.buyername,
                    cartonbox: this.state.unit8,
                    weightcb: this.state.weightcb,
                    pairs: this.state.pairs
                }
            }
        }
        let url = baseUrl + 'updateboxmaster/' + this.state.editId;
        axios.put(url, payLoad).then(response => {
            console.log("response", response)
            if (response.status == 200) {
                toast.success(response.data.message, {
                    position: toast.POSITION.TOP_CENTER
                });
                this.props.history.push('/formone')
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
        })
    }
    render() {
        return (
            <div>
                {this.state.form3 && <div className="registeration-body">
                    <ToastContainer />
                    <div className="container">
                        <div className="registration-form1">
                            <div className="register-title">
                                <h1>Box Master Table</h1>
                            </div>
                            <div className="register-form-div1">
                                <table className="task-state1">
                                    <thead>
                                        <tr>
                                            <th scope="col ">ID</th>
                                            <th scope="col ">Buyer Name</th>
                                            <th scope="col ">Unit Box</th>
                                            <th scope="col ">Weight UB</th>
                                            <th scope="col ">Sequence UB</th>
                                            <th scope="col ">Carton Box</th>
                                            <th scope="col ">Weight CB</th>
                                            <th scope="col ">Pairs</th>
                                            <th scope="col ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.tableLists.map((item, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td data-label="ID">{item.id}</td>
                                                    <td data-label="Buyer Name">{item.buyername}</td>
                                                    <td data-label="Unit Box">{item.unitbox}</td>
                                                    <td data-label="Weight UB">{item.weightub}</td>
                                                    <td data-label="Sequence UB">{item.sequenceub}</td>
                                                    <td data-label="Carton Box">{item.cartonbox}</td>
                                                    <td data-label="Weight CB">{item.weightcb}</td>
                                                    <td data-label="Pairs">{item.pairs}</td>
                                                    <td data-label="Action">
                                                        <button type="button" onClick={() => this.editRow(item.id)} className="btned editBtn">
                                                            <i className="fa fa-pencil" aria-hidden="true"></i>
                                                        </button>
                                                        <button type="button" onClick={() => this.deleteRow(item.id)} className="btned deleteBtn">
                                                            <i className="fa fa-trash-o del" aria-hidden="true"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>}
                {this.state.form4 &&
                    <div className="registeration-body">
                        <div className="container">
                            <div className="registration-form">
                                <div className="register-title">
                                    <h1>Edit Box Master</h1>
                                </div>
                                <div className="register-form-div1">
                                    <form>
                                        <div className="form-group">
                                            <label>Buyer Name:</label>
                                            <div className="extensionform1">
                                                <select value={this.state.buyername} disabled name="buyername" onChange={this.handleChange}>
                                                    <option value=''>Select Buyer Name</option>
                                                    {this.state.buyerMaster.map((item, i) => {
                                                        return (
                                                            <option key={i} value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        {/* <!-- <checkbox> --> */}
                                        <div className="form-group">
                                            <div className="rememberme">
                                                <input type="checkbox" id="cbx" checked={this.state.tick} onChange={this.unitBoxChange} className="inp-cbx" style={{ display: 'none' }} required />
                                                <label htmlFor="cbx" className="cbx">
                                                    <span>
                                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                        </svg>
                                                    </span>
                                                    <span className="me-rem">Use Unit Box</span>
                                                </label>
                                            </div>
                                        </div>
                                        {/* <!-- <div className="check-details"> --> */}
                                        {this.state.unitBoxtick ? (<div>
                                            <div className="form-group">
                                                <label>Unit box:</label>
                                                <div className="extensionform2">
                                                    <div className="start">
                                                        <input type="text" onKeyPress={this.onlyNumbers} disabled={this.state.unitDisabledimension} name="unit1" value={this.state.unit1} onChange={this.handleChange} required />
                                                        <img src="src/public/images/star.png" />

                                                    </div>
                                                    <div className="start">
                                                        <input type="text" onKeyPress={this.onlyNumbers} disabled={this.state.unitDisabledimension} name="unit2" value={this.state.unit2} onChange={this.handleChange} required />
                                                        <img src="src/public/images/star.png" />
                                                    </div>
                                                    <div className="start">
                                                        <input type="text" onKeyPress={this.onlyNumbers} onBlur={this.inputFilled} disabled={this.state.unitDisabledimension} name="unit3" value={this.state.unit3} onChange={this.handleChange} required />
                                                        <img src="src/public/images/divide1.png" />
                                                    </div>
                                                    <div className="start">
                                                        <input type="text" onKeyPress={this.onlyNumbers} disabled={this.state.unitDisable} name="unit4" value={this.state.unit4} onChange={this.handleChange} required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Weight Unit Box:</label>
                                                <div className="extensionform">
                                                    <input type="text" onKeyPress={this.onlyNumbers} name="weightub" value={this.state.weightub} onChange={this.handleChange} required />
                                                    <span>kg</span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Sequence Unit Box:</label>
                                                <div className="extensionform">
                                                    <input type="text" onKeyPress={this.onlyNumbers} name="sequenceub" value={this.state.sequenceub} onChange={this.handleChange} required />
                                                    <span className="error">This value is required</span>
                                                </div>
                                            </div>
                                        </div>) : ''}
                                        {/* <!-- </div> -->
                        <!-- </checkbox> --> */}
                                        <div className="form-group">
                                            <label>Carton Box:</label>
                                            <div className="extensionform2">
                                                <div className="start">
                                                    <input type="text" onKeyPress={this.onlyNumbers} onChange={this.handleChange} disabled={this.state.cartonDisabledimension} name="unit5" value={this.state.unit5} onChange={this.handleChange} required />
                                                    <span className="error">This value is required</span>
                                                    <img src="src/public/images/star.png" />
                                                </div>
                                                <div className="start">
                                                    <input type="text" onKeyPress={this.onlyNumbers} onChange={this.handleChange} disabled={this.state.cartonDisabledimension} name="unit6" value={this.state.unit6} onChange={this.handleChange} required />
                                                    <span className="error">This value is required</span>
                                                    <img src="src/public/images/star.png" />
                                                </div>
                                                <div className="start">
                                                    <input type="text" onKeyPress={this.onlyNumbers} onBlur={this.inputFilled} onChange={this.handleChange} disabled={this.state.cartonDisabledimension} name="unit7" value={this.state.unit7} onChange={this.handleChange} required />
                                                    <span className="error">This value is required</span>
                                                    <img src="src/public/images/divide1.png" />
                                                </div>
                                                <div className="start">
                                                    <input type="text" onKeyPress={this.onlyNumbers} onChange={this.handleChange} disabled={this.state.cartonDisable} name="unit8" value={this.state.unit8} onChange={this.handleChange} required />
                                                    <span className="error">This value is required</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Weight Carton Box:</label>
                                            <div className="extensionform">
                                                <input type="text" onKeyPress={this.onlyNumbers} name="weightcb" value={this.state.weightcb} onChange={this.handleChange} required />
                                                <span>kg</span>
                                                <span className="error">This value is required</span>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Pairs:</label>
                                            <div className="extensionform">
                                                <input type="text" onKeyPress={this.onlyNumbers} name="pairs" value={this.state.pairs} onChange={this.handleChange} required />
                                                <span className="error">This value is required</span>
                                            </div>
                                        </div>
                                        <div className="sbmt">
                                            <button className="add-btn" type="button" onClick={this.formSubmit}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        )
    }

}

