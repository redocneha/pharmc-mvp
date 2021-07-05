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
   const [userLoginDetails,setUserLoginDetails] = useState(
       {
           email:"",
           password:""
       }
   )

   const dispatch = useDispatch();
   var loginStatus = useSelector((state) => state.user.loginStatus);
   const handleSubmit = (event) =>{
        userLoginDetails.email = email;
        userLoginDetails.password = password;
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
          dispatch(loginSubmit(userLoginDetails,event))
        } else{
          loginStatus = "Please Enter All the Fields"
        }
   }
  return (
    <>
    <div className="cmp-loginPage col-md-6">
      <h2>Login Page</h2>
      {loginStatus !=="Pending" && <h2>{loginStatus}</h2>}
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>         
          <Form.Control className="formBasicEmail" placeholder="Enter email" value={email} required onChange={event=> setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" className="password" placeholder="Enter Password" required value={password} onChange={event=> setPassword(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-submitLogin" onClick={ handleSubmit }> Submit </Button>
      </Form>
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
