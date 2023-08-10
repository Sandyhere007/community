import React from 'react'
import image from "../images/aboutus.jpg"
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (
    <div className = "about">
        <div className="heading">
           <h3> About Us </h3>
        </div>
        <div className="content">
        <div className="img">
            <img src= {image} alt="" />
        </div>
        <div className="text">
            <p>
           We the community are no other then you it is not formed of and for a single person it is by us all every person who uses our website who logs in here have a passion in Coding have a dream to achieve is the Community. Its just a hope from my side me <Link >Sandeep Patidar</Link> to make the whole community one. These Website is a contribution of me to the community where we all can come, learn, practice, grow together and as being a community help in each others growth. 
            </p>
                
        </div>
        </div>

    </div>
  )
}

export default AboutUs;