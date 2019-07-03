import {actionTypes} from '../service/actionType'
import axios from 'axios'
import {baseUrl} from '../../common/apiUrl';
export const loginService= (data)=> dispatch =>{
    console.log("actin ",data)
    let url = baseUrl + '/user/login';
        console.log("url before gitting..",url)
        axios.post(url,{
            "userName" : data.userName,
             "password" : data.password
        }).then(response => {
            console.log("response",response.data)
                dispatch({
                    type:actionTypes.LOGINSUCCESS,
                    result:response.data
                })                          
             
        }).catch(error => {
            console.log("errorr",error)
            dispatch({
                type:actionTypes.LOGINFAILURE,
                error:error.response
            })
        });
}
