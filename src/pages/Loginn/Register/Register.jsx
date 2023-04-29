
import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";


const Register = () => {
  const {registerUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    registerUser(email, password)
    .then(result=>{
     const registerUser = result.user;
     console.log(registerUser);
     form.reset();
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const checkAccepted = (event) =>{
    setAccepted(event.target.checked)
  }
  return (
    <Container className="w-25 mx-auto mt-3 border border-1 p-3 rounded">
        <h3 className="">Register Your Account</h3>
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" required placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" name="password" required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" required placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        onClick={checkAccepted} 
        type="checkbox"
        name="checkbox"
        label={<>Accept <Link to='/terms'>terms and conditions</Link></>}/>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
    </Form>
    <Form.Text className="text-muted">
          Already have an account? <Link to='/login'>Login</Link>
    </Form.Text>
    <Form.Text className="text-muted">
          
    </Form.Text>
    <Form.Text className="text-muted">
          
    </Form.Text>
    </Container>
  );
};

export default Register;
