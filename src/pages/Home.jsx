import React from 'react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
const Home = () => {
  
  return (
    <>
    <div className="home" >
      <h4> Welcome to the community of coders</h4>
      <h3>We Grow Together</h3>
      <div className="container">
        We are a community where we help each other by sharing notes, writing blogs, Sharing Project Links, Solving Problem Solving Techniques Together, Doing Challenges, and having much more fun.
      </div>
      <div className="button">
        <button> <Link to="/aboutuspage" > About Us </Link></button>
        <button> <Link to="/userlogin" > Join Us </Link></button>
        
      </div>
    </ div>
    <AboutUs />
    </>
  )
}

export default Home