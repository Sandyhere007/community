import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { server } from '../index.js';
import { toast } from 'react-hot-toast';
import { Context } from '../index.js';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isAuthenticated , setIsAuthenticated , loading  , setLoading ,admin , setAdmin } = useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try { 
      const { data } = await axios.post(`${server}/admin/login`, {
        email, password
      },
      {
          headers: { "Content-Type": "application/json",
         },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
      setAdmin(true)
      
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
      setAdmin(false)
    }
  };
  if(isAuthenticated) return <Navigate to={"/"} />
  return (
    <div className="login">
    <div className="container">
    <div className="title">User Login</div>
    <div className="content">
      <form onSubmit={submitHandler}>
        <div className="user-details">
        <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter your email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <br />
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
              </div>
          
        </div>
       
        <div className="button">
          <input disabled={loading} type="submit" value="Login" />
        </div>
        {/* <span>Create New Account </span> <Link to={"/userregister111"}>Register</Link> */}
         
      </form>
    </div>
  </div>
    </div>
  )
}

export default AdminLogin;
