import React, { useContext, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../index.js';
import axios from 'axios';
import { server } from '../index.js';
import { toast } from 'react-hot-toast';
import { FaBars , FaTimes} from "react-icons/fa";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const logoutHandler = async (e) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${server}/user/logout`, {

      },
        {
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
      
    } catch (error) {
      toast.error(error.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  }
  const navRef = useRef();


	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);

  };

  return (
    <nav>
      <h2>Community</h2>
      <div className="navItems" ref={navRef}>
        <Link to={"/"} >Home</Link>
        <Link to={"/community"} >Community</Link>
        <Link to={"/challenge"} >Challenge</Link>
        <Link to={"/aboutuspage"} >About</Link>
        {(isAuthenticated) ? <button disabled={loading} onClick={logoutHandler} >Logout</button> :
          <Link to={"/userlogin"} >Login</Link>
        }
        <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
      </div>
      <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
    </nav>
  );
};

export default Header;