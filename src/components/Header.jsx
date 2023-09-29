import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index.js';
import axios from 'axios';
import { server } from '../index.js';
import { toast } from 'react-hot-toast';
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/header.scss'
import mainImage from '../images/codersarena.png';
const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState(false); // New state to manage navigation visibility

  const logoutHandler = async (e) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${server}/user/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (

    <nav >
      <div className="logo"><img src={mainImage} alt="" /></div>
      
      <div className={`navItems ${isNavOpen ? 'responsive_nav' : ''}`}>
        <Link to={"/"} onClick={closeNav}>Home</Link>
        <Link to={"/community"} onClick={closeNav}>Community</Link>
        <Link to={"/challenge"} onClick={closeNav}>Challenge</Link>
        <Link to={"/aboutuspage"} onClick={closeNav}>About</Link>
        {(isAuthenticated) ? (
          <button disabled={loading} onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <Link to={"/userlogin"} onClick={closeNav}>Login</Link>
        )}
      </div>
      <span className="nav-btn" onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </span>
    </nav>
  );
};

export default Header;
