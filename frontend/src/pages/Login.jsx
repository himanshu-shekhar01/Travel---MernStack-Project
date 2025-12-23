import React, { useState } from 'react'
import { FormGroup, Form, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css';
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {
  const [cred, setCred] = useState({
    email: undefined,
    password: undefined
  });
  const handlechange = (e) =>{
    setCred(prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = (e) =>{
    e.preventDefault();
  }
  return (
    <section className='m-auto'>
      <div className='login_container full flex'>
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
              <input type="email" className='bg-white' placeholder='Email' required id='email' onChange={handlechange}/>
            </FormGroup>
            <FormGroup>
              <input type="password" className='bg-white' placeholder='Password' required id='password' onChange={handlechange}/>
            </FormGroup>
            <Button className='btn secondary_btn auth_btn' type='submit'>
              Login
            </Button>
          </Form>
          <p>Don't have an account? <Link to='/register'>Create</Link></p>
        </div>
      </div>
    </section>
  )
}

export default Login
