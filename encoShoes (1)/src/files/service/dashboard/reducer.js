import {actionTypes} from '../dashboard/actionType';
const initialState = {
    viewShipSuccessResponce : "",
    viewShipErrorResponce : ""
}

const viewShipReducer = (state = initialState, action) => {
    console.log("view ship action......",action)
    switch (action.type) {
        case actionTypes.VIEWSHIPSUCCESS:
             return {
                viewShipSuccessResponce : action.result
             }
        case actionTypes.viewShipErrorResponce:
             return {viewShipErrorResponce: action.error}
        default:
             return state;
    }
};
export default viewShipReducer