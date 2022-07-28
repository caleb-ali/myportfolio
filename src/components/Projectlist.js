import React from "react";
import "./Projectlist.css";
import Projectcard from "./Projectcard";



const Projectlist = () => {
  return (
    <div className="pl">

      <h1>
        My Recent Works
      </h1>

      <h3>
        Here are a list of projects i have worked on in the past.
      </h3>
      <div className="pl-list">
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
    </div>
  )
}

export default Projectlist