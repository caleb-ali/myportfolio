import React from "react";
import "./Projectlist.css";
import Projectcard from "./Projectcard";
import { Projectcards } from "./Data";



const Projectlist = () => {
  return (
    <div className="pl">

      <h1>
        My Recent Works
      </h1>
    
      <div className="pl-list">
        {Projectcards.map((item) => (
          <Projectcard key={item?.id} title={item?.title} technology={item?.technology} description={item?.description} link={item?.link}/>
        ))}
    
      </div>
    </div>
  );
};

export default Projectlist;