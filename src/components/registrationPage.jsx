import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registrationSubmit } from "../redux/user/actions";
import { useSelector } from "react-redux";
import './registrationPage.scss'

function RegistrationPage() {
  
  const [userLoginDetails, setUserLoginDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
  });

  var registrationStatus = useSelector((state) => state.user.registrationStatus);
  const [registrationState, setRegistrationState] = useState({
    className:"",
    formError: ""
  });
  
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    let textName = event.target.name;
    let textVal = event.target.value;
    setUserLoginDetails({
      ...userLoginDetails,
      [textName]: textVal,
    });
  };

  const handleSubmit = (event) => {
    var flag = 0;
    const keys = Object.keys(userLoginDetails);
    for(let count=0; count < keys.length; count++){
      const key = keys[count];
      if(userLoginDetails[key] !== ""){
        flag++;
        setRegistrationState({
          ...registrationState,
          formError : "error"
        });
      }
    }
    if(flag === keys.length ){
      dispatch(registrationSubmit(userLoginDetails, event));
      if(registrationStatus !== "Success"){
        setRegistrationState({
          formError : "",
          className: "error"
        });
      }
    }
  };
  return (
    <div className="cmp-registration col-md-6">
      <h2>Registration Page</h2>
      {registrationState.formError !=="" && <h2 className="error">Please fill All the fields</h2>}
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label className= { registrationState.className}>Email address:</Form.Label>
          {registrationStatus !=="Success" && <span className= { registrationState.className} >{ registrationStatus}</span> }
          <Form.Control className="formBasicEmail" placeholder="Enter email" name="email" value={userLoginDetails.email} onChange={(event) => handleInputChange(event)} required/>
        </Form.Group>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control className="formFirstName" placeholder="Enter First Name" name="firstName" value={userLoginDetails.firstName} required onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="formLastName" placeholder="Enter Last Name" name="lastName" value={userLoginDetails.lastName} required onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group controlId="formMobileNo">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control className="formMobileNo" placeholder="Enter mobile number" name="mobileNo" value={userLoginDetails.mobileNo} required onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Check type="radio" label="Male" name="gender" id="gender1" value="M" required onChange={(event) => handleInputChange(event)} />
        <Form.Check type="radio" label="Female" name="gender" value="F" id="gender2" required onChange={(event) => handleInputChange(event)} />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" className="password" placeholder="Enter Password" name="password" value={userLoginDetails.password} required onChange={(event) => handleInputChange(event)} />{" "}
        </Form.Group>
        <div>
        <Button  variant="primary" type="submit" onClick={handleSubmit}> Submit </Button>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationPage;
