import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSubmit } from "../redux/user/actions";
import style from './registerStyle'
function RegistrationPage() {
  const [userLoginDetails, setUserLoginDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
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
    dispatch(loginSubmit(userLoginDetails, event));
  };
  return (
    <div style={style.form}>
      <h2>Registration Page</h2>
      <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="formBasicEmail"
            placeholder="Enter email"
            name="email"
            value={userLoginDetails.email}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Group>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            className="formFirstName"
            placeholder="Enter First Name"
            name="firstName"
            value={userLoginDetails.firstName}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            className="formLastName"
            placeholder="Enter Last Name"
            name="lastName"
            value={userLoginDetails.lastName}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Group>
        <Form.Group controlId="formMobileNo">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            className="formMobileNo"
            placeholder="Enter mobile number"
            name="mobileNo"
            value={userLoginDetails.mobileNo}
            onChange={(event) => handleInputChange(event)}
          />
        </Form.Group>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          id="gender1"
          onChange={(event) => handleInputChange(event)}
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          value="Female"
          id="gender2"
          onChange={(event) => handleInputChange(event)}
        />
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="password"
            placeholder="Enter Password"
            name="password"
            value={userLoginDetails.password}
            onChange={(event) => handleInputChange(event)}
          />{" "}
        </Form.Group>
        <div  style={style.button}>
        <Button  variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default RegistrationPage;
