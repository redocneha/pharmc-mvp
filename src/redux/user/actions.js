import {  USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from './action_types'
import axios from 'axios'
 import {history} from '../../helpers/history'

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

export const userLoginSuccess = () =>{
    return {
        type: USER_LOGIN_SUCCESS,
    }
}
export const userLoginFailure = () =>{
    return {
        type: USER_LOGIN_FAILURE,
    }
}

export const loginSubmit = (data,event) => {
   return dispatch=> {
        event.preventDefault();
          axios.post("https://run.mocky.io/v3/1342edb6-fd02-4dfe-8a61-f28279563081",data)
         .then(response =>{
            dispatch(userLoginSuccess());
          console.log(response);
          history.push('/home')
         })
         .catch(error=>{
              dispatch(userLoginFailure())
             console.log(error)
         })
        
       }

  };