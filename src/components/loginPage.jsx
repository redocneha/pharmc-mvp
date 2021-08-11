import { Form, Button } from "react-bootstrap";
import {useState} from 'react';
import { useDispatch } from "react-redux";
// import {connect} from 'react-redux';
import {loginSubmit} from '../redux/user/actions'
import { useSelector } from "react-redux";
import './loginPage.scss'

function LoginPage() {
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [isSeller,setisSeller] = useState("false");
   const [errorStatus,setErrorStatus] = useState("");
   const [emailError,setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [userLoginDetails,setUserLoginDetails] = useState(
       {
           email:"",
           password:"",
           isSeller: "false"
       }
   )
   const dispatch = useDispatch();
   var loginStatus = useSelector((state) => state.user.loginStatus);
    const handleSubmit = (event) =>{
      setErrorStatus("");
      event.preventDefault();
      userLoginDetails.email = email;
      userLoginDetails.password = password;
      userLoginDetails.isSeller = isSeller;
      var flag = 0;
        const keys = Object.keys(userLoginDetails);
        for(let count=0; count < keys.length; count++){
          const key = keys[count];
          if(userLoginDetails[key] !== ""){
            flag++;
          }
        }
        if(flag === keys.length ){
          setUserLoginDetails(userLoginDetails);
          dispatch(loginSubmit(userLoginDetails,event));
        } else{
          setErrorStatus("Please Enter All the Fields");
          loginStatus = "Please Enter All the Fields"
        }
   }

   const validateEmail = (email) => {
    if (/.+@.+\.[A-Za-z]+$/.test(email)) { 
      setEmailError("");
     }else {
      setEmailError("Please enter valid email");
     }
   }
   const onChangeHandler = (event) => {
     switch (event.target.name){
        case "email":
          validateEmail(event.target.value);
          break;
        case "password":
          if(event.target.value === ""){
            setPasswordError("Please enter Password");
          } else {
            setPasswordError("");
          }
          break;
          case "seller":
            if(isSeller === "false"){
              setisSeller("true");
            } else {
              setisSeller("false");
            }
            break;
        default:
          setEmailError("");
          setPasswordError("");
     }
   }
  return (
    <>
    <div className="cmp-loginPage">
    <h2 className="title">Sign In</h2>
    <div className="loginContainer col-md-6">

      <div className="loginForm">
        <Form>
        <h5 className="error">{errorStatus}</h5>
        {loginStatus !=="Pending" && <h5 className="error">{loginStatus}</h5>}
          <Form.Group controlId="formBasicEmail" className="login-field-container">
            <Form.Label>Email address: (Required)</Form.Label> {emailError !=="" && <span className="error">{emailError}</span>}
            <Form.Control className="formBasicEmail" name="email" placeholder="Enter email" value={email} onChange={
              event=> {setEmail(event.target.value);onChangeHandler(event)}}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword"  className="login-field">
            <Form.Label>Password: (Required)</Form.Label> {passwordError !=="" && <span className="error" >{passwordError}</span>}
            <Form.Control type="password" className="password" name="password" placeholder="Enter Password" value={password} onChange={event=> {setPassword(event.target.value); onChangeHandler(event)}} />
          </Form.Group>
          <Form.Group>
          <Form.Label class="checkbox-label">
            <input type="checkbox" name="seller" value={isSeller} onChange={(event) => {setisSeller(isSeller);onChangeHandler(event)}} />
            <span class="checkbox-custom rectangular"></span>
            <label className="is-seller">Are you a Seller?</label>
        </Form.Label>
        </Form.Group>
          <Button variant="primary" type="submit" className="btn-submitLogin" onClick={ handleSubmit }> Submit </Button>
        </Form>
        </div>
        <div className="join-now-container">
          <span>
            New to Pharmc?
          </span>
          <a className="join-now-link" href="/register">Join Now</a>
        </div>
      </div>
      </div>
    </>
  );
}
// const mapStateToProps = (state)=>{
//     return{
//         user: state.user
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         loginSubmit:dispatch(loginSubmit({
//             "email":"nnjwnd"
//         }))
//     }

// }
 //export default connect(null,mapDispatchToProps)(LoginPage);

export default LoginPage;
