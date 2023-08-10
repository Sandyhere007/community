import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../images/me.png"
const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Developer"
        />
        <div className="text">
          <h2>Sandeep Patidar</h2>
          <p>Believe In Yourself.</p>
        </div>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.instagram.com/__sandeeppatidar__/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Sandyhere007" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/sandeep-patidar-3a8857233/" target={"blank"} >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      
    </footer>
  );
};

export default Footer;