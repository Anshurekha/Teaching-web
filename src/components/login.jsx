import React from 'react'
import { FiLogIn } from "react-icons/fi";
import { useState } from 'react';
import './login.css';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Successfully signed in!');
    setTimeout(() => {
      setShowAlert(true);
    }, 1000);    
    
  };


  return (
    <>
      <div className='logn'>
        <div className="log">
          <h2 className=''>LOGIN WITH US <FiLogIn /></h2>
          <form onSubmit={handleSubmit} className="frm">
            <div className="frm1">
              <label htmlFor="email" className="frm2">Email</label>
              <input className='in1'
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="frm3">
              <label htmlFor="password" className="frm4">Password</label>
              <input className='in2'
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="frm5">
              
              <button className='in3' type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;




