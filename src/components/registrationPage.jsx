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
    formErrorStatus: "",
    emailError: "",
    passwordError: "",
    firstNameError: "",
    lastNameError: "",
    mobileNoError: ""
  });
  
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    let textName = event.target.name;
    let textVal = event.target.value;
    setUserLoginDetails({
      ...userLoginDetails,
      [textName]: textVal,
    });
    switch (event.target.name) {
      case "email":
        validateEmail(event.target.value);
        break;
      case "firstName":
        if(event.target.value === ""){
          setRegistrationState({
            ...registrationState,
            firstNameError:"Please Enter First Name"
          });
        } else {
            setRegistrationState({
              ...registrationState,
              firstNameError:""
            });
          }
        break;
      case "lastName":
        if(event.target.value === ""){
          setRegistrationState({
            ...registrationState,
            lastNameError:"Please Enter Second Name"
          });
        } else {
            setRegistrationState({
              ...registrationState,
              lastNameError:""
            });
          }
        break;
      case "mobileNo":
        if(event.target.value.match(/^[0-9]+$/) !== null){
          setRegistrationState({
            ...registrationState,
            mobileNoError:""
          });
        } else {
            setRegistrationState({
              ...registrationState,
              mobileNoError:"Please Enter Valid Mobile Number"
            });
          }
          break;
        case "password":
          if(event.target.value === ""){
            setRegistrationState({
              ...registrationState,
              passwordError:"Please Enter Password"
            });
          } else {
              setRegistrationState({
                ...registrationState,
                mobilpasswordErroreNo:""
              });
            }
          break;
        default:
          break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var flag = 0;
    const keys = Object.keys(userLoginDetails);
    for(let count=0; count < keys.length; count++){
      const key = keys[count];
      if(userLoginDetails[key] !== ""){
        flag++;
      }
    }
    if(flag === keys.length ){
      dispatch(registrationSubmit(userLoginDetails, event));
      setRegistrationState({
        ...registrationState,
        formErrorStatus : ""
      });
    } else {
      setRegistrationState({
        ...registrationState,
        formErrorStatus : "Please Enter All the Fields"
      });
    }
  };
  const validateEmail = (email) => {
    if (/.+@.+\.[A-Za-z]+$/.test(email)) { 
      setRegistrationState({
        ...registrationState,
        emailError:""
      });
     }else {
      setRegistrationState({
        ...registrationState,
        emailError:"Please enter valid email"
      });
     }
   }

  return (
    <div className="cmp-registration">
      <h2 className="registration-title">Sign Up</h2>
      <div className="registration-container col-md-6">
      <div className="registration-form-container">
      {registrationState.formErrorStatus !=="" && <h5 className="error">{registrationState.formErrorStatus}</h5>}
      <Form >
        <Form.Group controlId="formBasicEmail" className="field-container">
          <Form.Label className= { registrationState.className}>Email address:</Form.Label> {registrationState.emailError !=="" && <span className="error">{registrationState.emailError}</span>}
          {registrationStatus !=="Success" && <span className="error" >{ registrationStatus}</span> }
          <Form.Control className="formBasicEmail" placeholder="Enter email" name="email" value={userLoginDetails.email} onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group controlId="formFirstName" className="field-container">
          <Form.Label>First Name:</Form.Label> {registrationState.firstNameError !=="" && <span className="error">{registrationState.firstNameError}</span>}
          <Form.Control className="formFirstName" placeholder="Enter First Name" name="firstName" value={userLoginDetails.firstName} onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group controlId="formLastName" className="field-container">
          <Form.Label>Last Name:</Form.Label> {registrationState.lastNameError !=="" && <span className="error">{registrationState.lastNameError}</span>}
          <Form.Control className="formLastName" placeholder="Enter Last Name" name="lastName" value={userLoginDetails.lastName}  onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group controlId="formMobileNo" className="field-container">
          <Form.Label>Mobile Number:</Form.Label> {registrationState.mobileNoError !=="" && <span className="error">{registrationState.mobileNoError}</span>}
          <Form.Control className="formMobileNo" placeholder="Enter mobile number" name="mobileNo" value={userLoginDetails.mobileNo} onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group className="field-container">
        <Form.Label>Please Select the Gender:</Form.Label>
        <Form.Check type="radio" label="Male" name="gender" id="gender1" value="M" onChange={(event) => handleInputChange(event)} />
        <Form.Check type="radio" label="Female" name="gender" value="F" id="gender2" onChange={(event) => handleInputChange(event)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className="field-container">
          <Form.Label>Password:</Form.Label> {registrationState.passwordError !=="" && <span className="error">{registrationState.passwordError}</span>}
          <Form.Control type="password" className="password" placeholder="Enter Password" name="password" value={userLoginDetails.password} onChange={(event) => handleInputChange(event)} />{" "}
        </Form.Group>
        <div>
        <Button variant="primary" className="btn-submit" type="submit" onClick={handleSubmit}> Submit </Button>
        </div>
      </Form>
      </div>
      <div className="login-now">
        <span>
          Already a Member?
        </span>
        <a className="login-link" href="/">Sign In</a>
      </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
