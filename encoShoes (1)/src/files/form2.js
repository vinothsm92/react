import React from 'react';
import { baseUrl } from '../common/apiUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class FormTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            buyerName: '',
            weightUnit: '',
            unitPair: '',
            weightCarton: '',
            cartonPair: '',
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
            buyerMaster: []

        }
        this.unitBoxChange = this.unitBoxChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.inputFilled = this.inputFilled.bind(this);
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
        if (e.target.name == "weightUnit" || e.target.name == "unitPair"
            || e.target.name == "weightCarton" || e.target.name == "cartonPair") {
            this.setState({ [e.target.name]: e.target.value }, () => { this.validate })
        }
        else {
            if (e.target.name == "buyerName") {
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
    inputFilled() {
        if (this.state.unit5 !== '') {
            if (this.state.buyerName && this.state.unit5 !== '' && this.state.unit6 !== '' && this.state.unit7 !== '') {
                const url = baseUrl + "checkcartoonbox?buyer=" + this.state.buyerName + "&cartoonbox=" + this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7;
                axios.get(url).then(response => {
                    if (response.status === 206) {
                        toast.error(response.data.message, {
                            position: toast.POSITION.TOP_CENTER
                        });
                        this.setState({ unit5: '', unit6: '', unit7: '' })
                    }
                }).catch(error => {
                    toast.error(error, {
                        position: toast.POSITION.TOP_CENTER
                    });
                });
            }
            else {
                toast.error('Please Enter Buyer Name and All Carton Box Values Properly !', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }
        else if (this.state.unit1 !== '') {
            if (this.state.buyerName && this.state.unit1 !== '' && this.state.unit2 !== '' && this.state.unit3 !== '') {
                const url = baseUrl + "checkunitbox?buyer=" + this.state.buyerName + "&unitbox=" + this.state.unit1 + "*" + this.state.unit2 + "*" + this.state.unit3;
                console.log("usrrrrl", url)
                axios.get(url).then(response => {
                    if (response.status === 206) {
                        toast.error(response.data.message, {
                            position: toast.POSITION.TOP_CENTER
                        });
                        this.setState({ unit1: '', unit2: '', unit3: '' })
                    }
                }).catch(error => {
                    toast.error(error, {
                        position: toast.POSITION.TOP_CENTER
                    });
                });
            }
            else {
                toast.error('Please Enter Buyer Name and All Unit Box Values Properly !', {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }

    }
    formSubmit(e) {

        if (this.state.unitBoxtick === true) {
            if (this.state.unit4 === '' && this.state.unit8 === '') {
                var payLoad = {
                    buyername: this.state.buyerName,
                    unitbox: this.state.unit1 + "*" + this.state.unit2 + "*" + this.state.unit3,
                    weightub: this.state.weightUnit,
                    sequenceub: this.state.unitPair,
                    cartonbox: this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7,
                    weightcb: this.state.weightCarton,
                    pairs: this.state.cartonPair
                }
            }
            else if (this.state.unit4 !== '' && this.state.unit8 !== '') {
                var payLoad = {
                    buyername: this.state.buyerName,
                    unitbox: this.state.unit4,
                    weightub: this.state.weightUnit,
                    sequenceub: this.state.unitPair,
                    cartonbox: this.state.unit8,
                    weightcb: this.state.weightCarton,
                    pairs: this.state.cartonPair
                }
            }
            else if(this.state.unit4 === '' && this.state.unit8 !== ''){
                var payLoad = {
                    buyername: this.state.buyerName,
                    unitbox: this.state.unit1 + "*" + this.state.unit2 + "*" + this.state.unit3,
                    weightub: this.state.weightUnit,
                    sequenceub: this.state.unitPair,
                    cartonbox: this.state.unit8,
                    weightcb: this.state.weightCarton,
                    pairs: this.state.cartonPair
                }
            }
            else if(this.state.unit4 !== '' && this.state.unit8 === ''){
                var payLoad = {
                    buyername: this.state.buyerName,
                    unitbox: this.state.unit4,
                    weightub: this.state.weightUnit,
                    sequenceub: this.state.unitPair,
                    cartonbox: this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7,
                    weightcb: this.state.weightCarton,
                    pairs: this.state.cartonPair
                }
            }

        }
        else {
            if (this.state.unit8 === '') {
                var payLoad = {
                    buyername: this.state.buyerName,
                    cartonbox: this.state.unit5 + "*" + this.state.unit6 + "*" + this.state.unit7,
                    weightcb: this.state.weightCarton,
                    pairs: this.state.cartonPair
                }
            }
            else {
                var payLoad = {
                    buyername: this.state.buyerName,
                    cartonbox: this.state.unit8,
                    weightcb: this.state.weightCarton,
                    pairs: this.state.cartonPair
                }
            }
        }
        let url = baseUrl + 'cartoonbox';
        axios.post(url, payLoad).then(response => {
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
            <div className="registeration-body">
                <ToastContainer />
                <div className="container">
                    <div className="registration-form">
                        <div className="register-title">
                            <h1>Add Box Master</h1>
                        </div>
                        <div className="register-form-div1">
                            <form>
                                <div className="form-group">
                                    <label>Buyer Name:</label>
                                    <div className="extensionform1">
                                        <select value={this.state.buyerName} name="buyerName" onChange={this.handleChange}>
                                            <option value=''>Select Buyer Name</option>
                                            {this.state.buyerMaster.map((item, i) => {
                                                return (
                                                    <option key={i} value={item}>{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
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
                                {this.state.unitBoxtick ? (<div>
                                    <div className="form-group">
                                        <label>Unit box:</label>
                                        <div className="extensionform2">
                                            <div className="start">
                                                <input type="text" onKeyPress={this.onlyNumbers} disabled={this.state.unitDisabledimension} name="unit1" value={this.state.unit1} onChange={this.handleChange} required />
                                                <span className="error">This value is required</span>
                                                <img src="src/public/images/star.png" />
                                            </div>
                                            <div className="start">
                                                <input type="text" onKeyPress={this.onlyNumbers} disabled={this.state.unitDisabledimension} name="unit2" value={this.state.unit2} onChange={this.handleChange} required />
                                                <span className="error">This value is required</span>
                                                <img src="src/public/images/star.png" />
                                            </div>
                                            <div className="start">
                                                <input type="text" onKeyPress={this.onlyNumbers} onBlur={this.inputFilled} disabled={this.state.unitDisabledimension} name="unit3" value={this.state.unit3} onChange={this.handleChange} required />
                                                <span className="error">This value is required</span>
                                                <img src="src/public/images/divide1.png" />
                                            </div>
                                            <div className="start">
                                                <input type="text" onKeyPress={this.onlyNumbers} disabled={this.state.unitDisable} name="unit4" value={this.state.unit4} onChange={this.handleChange} required />
                                                <span className="error">This value is required</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Weight Unit Box:</label>
                                        <div className="extensionform">
                                            <input type="text" onKeyPress={this.onlyNumbers} name="weightUnit" value={this.state.weightUnit} onChange={this.handleChange} required />
                                            <span>kg</span>
                                            <span className="error">This value is required</span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Sequence Unit Box:</label>
                                        <div className="extensionform">
                                            <input type="text" onKeyPress={this.onlyNumbers} name="unitPair" value={this.state.unitPair} onChange={this.handleChange} required />
                                            <span className="error">This value is required</span>
                                        </div>
                                    </div>
                                </div>) : ''}
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
                                        <input type="text" onKeyPress={this.onlyNumbers} name="weightCarton" value={this.state.weightCarton} onChange={this.handleChange} required />
                                        <span>kg</span>
                                        <span className="error">This value is required</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Pairs:</label>
                                    <div className="extensionform">
                                        <input type="text" onKeyPress={this.onlyNumbers} name="cartonPair" value={this.state.cartonPair} onChange={this.handleChange} required />
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
            </div>
        );
    }
}

