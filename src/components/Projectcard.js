import { getByTitle } from "@testing-library/react";
import React from "react";
import "./Projectcard.css";
import { Projectcards } from "./Data";


const Projectcard = ({ img, link, title, technology, description }) => {
    return (
        <div className="p">
            <h2 className="card-title">{title}</h2>
            <p className="tech">{technology}</p>
            <p className="description">{description}</p>
            <button>live</button>
        </div>

    )
}

export default Projectcard