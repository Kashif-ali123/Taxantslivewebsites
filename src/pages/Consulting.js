import React from "react";
import { FooterContainer } from "../containers/footer";
import Card6 from "./Card6";

function Consulting() {
  return (
    <div>
      {/* <h1 className="consulting"></h1> */}
      <div >
        <h1 style={{marginBottom:"40px", marginTop:"40px", fontFamily:"Open Sans sans-serif", fontWeight:"bold"}}>Careers</h1>
        <Card6 />
       </div>
      <FooterContainer />
    </div>
    
  );
}

export default Consulting;
