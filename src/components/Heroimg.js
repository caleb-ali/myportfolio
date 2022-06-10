import React from 'react';
import "./HeroimgStyles.css";
import Introimg from "../assets/programmer.svg"


const Heroimg = () => {
  return (
    <div className="hero">
        <div className='mask'>
            <img className='intro-img' src={Introimg}
             alt="Introimg"s/>
        </div>
        <div className='content'>
            <h1>Hi. I'm Caleb</h1>
            <p>A frontend developer, enthusiastic about building <br/> websites that are responsive and easy to use.</p>

        </div>

    </div>
  )
}

export default Heroimg;


