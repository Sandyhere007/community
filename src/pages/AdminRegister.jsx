import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { server } from '../index.js';
import { toast } from 'react-hot-toast';
import { Context } from '../index.js';

const AdminRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username , setUsername] =useState("");
  const [phone, setPhone] = useState("");
  const {isAuthenticated , setIsAuthenticated ,loading  , setLoading ,setAdmin} = useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try { 
      const { data } = await axios.post(`${server}/admin/register`, {
        name, username, phone, email, password, userType: "admin"
      },
        {
          headers: { "Content-Type": "application/json",
         },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setAdmin(true);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setAdmin(false);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };
  if(isAuthenticated) return <Navigate to={"/"} />
  return (
    <div className="registration">
      <div className="container">
        <div className="title">Admin Registration</div>
        <div className="content">
          <form onSubmit={submitHandler}>
            <div className="user-details">
              
              <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder="Enter your name" name='name' value={name} onChange={(e) => setName(e.target.value)}  />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your Username" name='username' value={username} onChange={(e) => setUsername(e.target.value)}  />
              </div>
              
              <div className="input-box">
                <span className="details">Phone</span>
                <input type="text" placeholder="Enter your phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}  />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter your email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
          
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
              </div>
             
            </div>

            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <span>Already have an Account </span> <Link to={"/adminlogin"}>Login Here</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminRegister