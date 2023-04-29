import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Loginn = () => {
    const {logInUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/catagory/0'

  const handleLogIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email, password);

    logInUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      form.reset();
      navigate(from);
    })
    .catch(error =>{
      console.log(error);
    })

  }

  return (
    <Container className="w-25 mx-auto mt-5 border border-1 p-3 rounded">
        <h3 className="">LogIn Your Account</h3>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Password" />
        </Form.Group>
        <p><Button variant="primary" type="submit">
          Login
        </Button></p>
        <Form.Text className="text-success">
            Don't have an account? <Link to='/register'>Register</Link>
          </Form.Text>
        <Form.Text className="text-success">
            
          </Form.Text>
          <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
  );
};

export default Loginn;
