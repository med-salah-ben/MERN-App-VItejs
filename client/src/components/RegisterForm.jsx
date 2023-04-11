import React , {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../JS/Actions/auth";
import { Link, Navigate } from "react-router-dom";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.authReducer.isAuth);

    const [name , setName] = useState("");
    const [lastName , setLastName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleRegister = (e)=>{
      e.preventDefault();
        const newUser = {name , lastName , email , password}
        dispatch(registerUser(newUser))
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

  return (
    <>
    {!isAuth ? (
          <Form style={{margin:"10% 30%"}}>
          <Form.Group className="mb-3" >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" value={name} name="name" onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" value={lastName} name="lastName" onChange={(e)=>setLastName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password} name="passowrd" onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Link to="/contacts"><Button variant="primary" type="submit" onClick={handleRegister}>
            Register
          </Button>
          </Link>
        </Form>
    ):(
      <Navigate to="/contacts" />

    )}
    </>

  );
};

export default RegisterForm;
