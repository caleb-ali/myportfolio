import React from "react";
import "./Projectcard.css";

const Projectcard = ({img,link}) => {
    return (
        <div className="p">
            <a href={link} target="_blank" rel="nonreferrer">
                <img src={img} alt="" className="p-img"/>
            </a>
        </div>
    )
}

export default Projectcard