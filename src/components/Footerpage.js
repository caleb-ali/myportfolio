import "./Footer.css";
import React from "react";
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';



const Footerpage = () => {
  return (
    <div class="site-footer">
    
      <p class="copyright-text">caleb ali &copy; 2022 </p>
      <div class="footer-links">
        <a href="https://twitter.com/_realkally" target="_blank" rel="noreferrer">  <BsTwitter />  </a>
        <a href="https://www.linkedin.com/in/caleb-ali-94305b14b/" target="_blank" rel="noreferrer">   <FaLinkedin /> </a>
        <a href="https://github.com/caleb-ali" target="_blank" rel="noreferrer">  <FaGithub /> </a>
        <a href="https://medium.com/@caleb_ali" target="_blank" rel="noreferrer"> <BsMedium /> </a>
      </div>
    </div>
  )
}

export default Footerpage