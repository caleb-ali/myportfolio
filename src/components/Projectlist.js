import React from "react";
import "./Projectlist.css";
import Projectcard from "./Projectcard";



const Projectlist = () => {
  return (
    <div className="pl">
      <div className="pl-list">
        <Projectcard />
        <Projectcard />
        <Projectcard />
      </div>
    </div>
  )
}

export default Projectlist