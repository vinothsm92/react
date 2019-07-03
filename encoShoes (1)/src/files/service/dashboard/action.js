import {actionTypes} from '../dashboard/actionType';
import axios from 'axios';
import {baseUrl} from '../../../common/apiUrl';
export const viewShipProfile = (userId)=> dispatch =>{
    console.log("userId in dashboadservices..",userId)
     let url = baseUrl + '/ship/viewShipProfile/'+ userId;
            console.log("before ship view api..",url)
            axios.get(url).then(response => {
                console.log("responce.data from db viewship profile...",response)
                dispatch({
                        type:actionTypes.VIEWSHIPSUCCESS,
                        result:response.data
                })
            }).catch(error => {
                console.log("viewShipprofile error",error)
                dispatch({
                    type:actionTypes.VIEWSHIPFAILURE,
                    error:error.response
                })
            })
}