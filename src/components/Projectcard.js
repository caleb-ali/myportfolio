import { getByTitle } from "@testing-library/react";
import React from "react";
import "./Projectcard.css";
import { Projectcards } from "./Data";


const Projectcard = ({ img, link, title, technology, description }) => {
    return (
        <div className="p">
            <a href={link} target="_blank" rel="nonreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
            <h4>
                {title} 
            </h4>
            <h4>
                {technology}    
            </h4>
            <h4>
            {description}
            </h4>
           

        </div>

    )
}

export default Projectcard