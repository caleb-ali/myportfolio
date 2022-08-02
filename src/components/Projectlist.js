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

      <h3>
        Here are a list of projects i have worked on in the past.
      </h3>
      <div className="pl-list">
        {Projectcards.map((item) => (
          <Projectcard key={item?.id} img={item?.img} link={item?.link} title={item?.title} technology={item?.technology}  description={item?.description} />
        ))}
    
      </div>
    </div>
  );
};

export default Projectlist;