import { getByTitle } from "@testing-library/react";
import React from "react";
import "./Projectcard.css";
import { Projectcards } from "./Data";


const Projectcard = ({ link, title, description, technology }) => {
    return (
        <div className="p">
            <h2 className="card-title">{title}</h2>
            <p className="tech">{technology}</p>
            <p className="desc">{description}</p>
            <a href={link} target="_blank" rel="nonreferrer">
                <button>live</button>
            </a>

        </div>

    )
}

export default Projectcard