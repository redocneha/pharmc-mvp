import { Form, Button } from "react-bootstrap";
import {useState} from 'react';
import { useDispatch } from "react-redux";
// import {connect} from 'react-redux';
import {loginSubmit} from '../redux/user/actions'
import { useSelector } from "react-redux";

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
   const handleSubmit = (event) =>{
        userLoginDetails.email = email;
        userLoginDetails.password = password;
        setUserLoginDetails(userLoginDetails);
        dispatch(loginSubmit(userLoginDetails,event))
   }
   const userId = useSelector((state) => state.user.id);
  return (
    <>
      <h2>Login Page</h2>
      {userId !== 0 && <h4>{userId}</h4> }
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>         
          <Form.Control
          className="formBasicEmail"
          placeholder="Enter email"
          value={email}
          onChange={event=> setEmail(event.target.value)}
        />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          className="password"
          placeholder="Enter Password"
          value={password}
          onChange={event=> setPassword(event.target.value)}
        /> </Form.Group>
        <Button variant="primary" type="submit" onClick={
           handleSubmit
          }>
          Submit
        </Button>
      </Form>
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
