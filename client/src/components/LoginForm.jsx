import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../JS/Actions/auth";
import { Link, Navigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = { email, password };
    dispatch(loginUser(userDetails));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {!isAuth ? (
        <Form style={{ margin: "10% 32%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              name="passowrd"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link to="/contacts">
            <Button variant="primary" type="submit" onClick={handleLogin}>
              Login
            </Button>
          </Link>
        </Form>
      ) : (
        <Navigate to="/contacts" />
      )}
    </>
  );
};

export default LoginForm;
