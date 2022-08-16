import React from 'react';
import "./HeroimgStyles.css";
import Introimg from "../assets/programmer.svg"
import{HiDownload} from 'react-icons/hi';


const Heroimg = () => {
  return (
    <div className="hero">
        <div className='mask'>
            <img className='intro-img' src={Introimg}
             alt="Introimg"/>
        </div>
        <div className='content'>
            <h1>Hi. I'm Caleb</h1>
            <h2> A Frontend developer</h2>
            <button className='btn'>resume <HiDownload/> </button>
        </div>

    </div>
  )
}

export default Heroimg;


