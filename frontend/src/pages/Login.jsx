import React, { useContext, useState } from "react";
import { FormGroup, Form, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext.jsx";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [cred, setCred] = useState({
    email: "",
    password: ""
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlechange = (e) => {
    setCred((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
  
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(cred)
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        dispatch({ type: "LOGIN_FAILURE", payload: result.message });
        alert(result.message);
        return;
      }
      console.log(result.data);
  
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data || result.user
      });
  
      alert("Login successful");
      navigate("/");
  
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
      alert("Failed to connect to server");
    }
  };
  

  return (
    <section className="m-auto">
      <div className="login_container full flex">
        <div className="loginImg">
          <img src={loginImg} alt="" />
        </div>

        <div className="login_form">
          <div className="user">
            <img src={userIcon} alt="" />
          </div>

          <h2>Login</h2>

          <Form onSubmit={handleClick}>
            <FormGroup>
              <input
                type="email"
                className="bg-white"
                placeholder="Email"
                required
                id="email"
                onChange={handlechange}
              />
            </FormGroup>

            <FormGroup>
              <input
                type="password"
                className="bg-white"
                placeholder="Password"
                required
                id="password"
                onChange={handlechange}
              />
            </FormGroup>

            <Button className="btn secondary_btn auth_btn" type="submit">
              Login
            </Button>
          </Form>

          <p>
            Don't have an account? <Link to="/register">Create</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
