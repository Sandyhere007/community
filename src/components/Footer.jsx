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
       
        <div className="text">
          <h2>Coders Arena</h2>
          <p>Believe In Yourself.</p>
        </div>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="" target={"blank"} >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      
    </footer>
  );
};

export default Footer;