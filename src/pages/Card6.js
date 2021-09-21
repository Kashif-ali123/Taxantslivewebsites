import React from "react";
import Card5 from "./Card5";


import image1 from "../assests/image1.jpg";

// import image3 from '../assests/image3.jpg'


const card6 = [
  {
    id: 1,
    title: "Job Title: Web App Developer",
    name: "About Us:",
  
    // text: "Operations Associate at Sigma Analysis & Management Ltd North York, Ontario, Canada",
    image: image1,
    // url: "https://faztweb.com",
  },
 
  
];


function Card6() {
  return (
    <>
    {/* <h1 className="hero">Our Accounting Affiliates</h1> */}
    <div className="container d-flex justify-content-center align-items-center h-100" style={{marginLeft:"400px"}} >
     
      <div className="row" >
        {card6.map(({ title,name, university,image, url, id }) => (
          <div className="col-md-8" key={id}>
            <Card5 imageSource={image} title={title} name={name} university={university}  url={url} />
          </div>
        ))}
      </div>
    </div>
    {/* <h1 className="hero">Our Accounting Affiliates</h1>
    <div className="container d-flex justify-content-center align-items-center h-100">
     
      <div className="row">
        {cards.map(({ title,name, university,text, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} name={name} university={university} text={text} url={url} />
          </div>
        ))}
      </div>
    </div> */}
    </>
  );
}

export default Card6;