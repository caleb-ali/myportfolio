import React, { useState } from 'react';
import "./Contactpage.css";
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import {FaGithub } from 'react-icons/fa';
import {BsMedium } from 'react-icons/bs'; 
import {BiMailSend} from 'react-icons/bi';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




const Contactpage = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_63eiq5b', 'template_uinhcss', formRef.current, 'BOB-xBqFbbC7JCAWO')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, 
      (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='c'>
                <div className='c-wrapper'>
                    <div className='c-left'>
                        <h2 className='c-title'>
                            Love to hear from you, <br/> Get in touch. <BiMailSend/>
                        </h2>
                        <div className='c-info'>
                            <div className='c-info-item'>
                            
                                <a href="https://twitter.com/_realkally" target="_blank" rel="noreferrer">  <BsTwitter/>  </a>
                                <a href="https://www.linkedin.com/in/caleb-ali-94305b14b/" target="_blank" rel="noreferrer">   <FaLinkedin/> </a>
                                <a href="https://github.com/caleb-ali" target="_blank" rel="noreferrer">  <FaGithub/> </a>
                                <a href="https://medium.com/@caleb_ali" target="_blank" rel="noreferrer"> <BsMedium/> </a>
                            </div>
                        </div>
                    </div>
                    <div className='c-right'>
                        <p className='c-desc'>
                            <b>What's your story?</b> Get in touch. Always available for freelancing if the right projects comes along 
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} >
                            <input type='text' placeholder='Name' name='user_name'/>
                            <input type='text' placeholder='Subject' name='user_subject'/>
                            <input type='text' placeholder='Email' name='user_email'/>
                            < textarea rows='5' placeholder='Message' name='message'/>
                            <button>Submit</button>
                            {done && 'thank you...'}
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contactpage;