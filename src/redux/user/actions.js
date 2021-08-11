import { GLOBAL } from './action_types'
import axios from 'axios'
 import {history} from '../../helpers/history'

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

export const userLoginSuccess = (response) =>{
    return {
        type: GLOBAL.USER_LOGIN_SUCCESS,
        payload: response
    }
}
export const userLoginFailure = (response) =>{
    return {
        type: GLOBAL.USER_LOGIN_FAILURE,
        payload: response
    }
}
export const userRegistrationSuccess = (response) =>{
  return {
      type: GLOBAL.USER_REGISTRATION_SUCCESS,
      payload: response
  }
}
export const userRegistrationfailure = (response) =>{
  return {
      type: GLOBAL.USER_REGISTRATION_FAILURE,
      payload: response
  }
}

export const userLogoutSuccess = (response) =>{
  return {
      type: GLOBAL.USER_LOGOUT_SUCCESS,
      payload: ""
  }
}
export const loginSubmit = (data,event) => {
   return async dispatch=> {
        event.preventDefault();
          await axios.post("http://localhost:8091/user/login/",data)
         .then(response =>{
           if(response.data.loginStatusMessage === "Success"){
             response.data.isSeller=data.isSeller;
            dispatch(userLoginSuccess(response.data));
            console.log(response);
            if(data.isSeller === "true"){
              history.push('/sellerhome');
            }else{
              history.push('/home');
            }
           } else{
            dispatch(userLoginFailure(response.data));
            console.log(response);
           }
         })
         .catch(error=>{
              // dispatch(userLoginFailure())
             console.log(error)
         })
        
       }
  };
  const handleRegistrationResponse = (response) => {
    return dispatch=> {
    if(response.data.registrationStatusMessage === "Success"){
      dispatch(userRegistrationSuccess(response.data));
      dispatch(userLoginSuccess(response.data));
      history.push('/home');
    }else {
      dispatch(userRegistrationfailure(response.data));
    }
  }
  }
export const registrationSubmit = (data,event) => {
    return dispatch=> {
         event.preventDefault();
           axios.post("http://localhost:8091/user/",data)
          .then(response =>{
            dispatch(handleRegistrationResponse(response));
          })
          .catch(error=>{
              console.log(error);
          })
        }
   }

   export const logoutSubmit = (data) => {
     return dispatch=> {
      dispatch(userLogoutSuccess(data));
     }
   }