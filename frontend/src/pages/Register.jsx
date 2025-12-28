import React, { useContext, useState } from 'react'
import { FormGroup, Form, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css';
import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext.jsx';
import { BASE_URL } from '../utils/config.js';



const Register = () => {
  const [cred, setCred] = useState({
    username: "",
    email: "",
    password: ""
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate();
  const handlechange = (e) =>{
    setCred(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cred)
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        dispatch({ type: "REGISTER_FAILURE", payload: result.message });
        alert(result.message);
        return;
      }
  
      dispatch({ type: "REGISTER_SUCCESS" });
      alert("Registration successful! Please login.");
      navigate("/login");
  
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.message });
      alert("Something went wrong");
    }
  };
  
  
  return (
    <section className='m-auto'>
      <div className='login_container full flex'>
        <div className="loginImg">
          <img src={registerImg} alt="" />
        </div>
        <div className="login_form">
          <div className="user">
            <img src={userIcon} alt="" />
          </div>
          <h2>Register</h2>
          <Form onSubmit={handleClick}>
            <FormGroup>
              <input type="text" className='bg-white' placeholder='Username' required id='username' onChange={handlechange}/>
            </FormGroup>
            <FormGroup>
              <input type="email" className='bg-white' placeholder='Email' required id='email' onChange={handlechange}/>
            </FormGroup>
            <FormGroup>
              <input type="password" className='bg-white' placeholder='Password' required id='password' onChange={handlechange}/>
            </FormGroup>
            <Button className='btn secondary_btn auth_btn' type='submit'>
              Create Account
            </Button>
          </Form>
          <p>Have an account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Register

