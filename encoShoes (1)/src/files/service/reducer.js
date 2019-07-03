import {actionTypes} from '../service/actionType';
const initialState={
    loginresponse:"",
    loginErrorResponce:"" 
}
 


const loginReducer = (state = initialState, action) => {
    console.log("action============ ",action)
    switch (action.type) {
    case actionTypes.LOGINSUCCESS:
    return Object.assign({},{loginresponse:  action.result})
    case actionTypes.LOGINFAILURE:
    return Object.assign({},{loginErrorResponce:  action.error})
    default:
    return state;
    }
    };

    export default loginReducer
