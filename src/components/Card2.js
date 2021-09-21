import React from "react";
import Card1 from "./Card1";


import image1 from "../assests/image1.jpg";
import image2 from '../assests/image1.jpg';
import image3 from '../assests/image1.jpg';
import image4 from '../assests/image1.jpg';
// import image3 from '../assests/image3.jpg'


const card2 = [
  {
    id: 1,
    title: "Marc Ma",
    name: "Accountant, CPA, CA",
  
    text: "Operations Associate at Sigma Analysis & Management Ltd North York, Ontario, Canada",
    image: image1,
    url: "https://www.linkedin.com/in/zhong-marc-ma-cpa-ca-446232139/",
  },
  {
    id: 2,
    title: "Daraspreet Widge",
    name: "Accountant",
   
    text: "Detail-oriented, energetic, and solutions-driven Financial Accountant with extensive theoretical and hands-on, progressive experience in internal system review, budget development and monitoring, financial accounting, as well as in forecasting, financial report generation, auditing, and team leadership.",
    image: image2,
    url: "https://www.linkedin.com/in/daraspreet-widge-663b4b76/",
  },
  {
    id: 3,
    title: "Lakshay Gandhi",
    name: "Accountant, CPA, CGA",
   
    text: "CPA by profession but Entrepreneur at heart. After working in the Manufacturing, Financial Services and IT firms, I am motivated to start something of my own, Taxants Inc.",
    image: image3,
  url: "https://www.linkedin.com/in/lakshaygandhi/",
   },
   {
    id: 4,
    title: "Naish Shahani",
    name: "Accountant",
  
    text: "Being a highly motivated individual and a strong team player, I am dedicated to pursuing the CPA designation.",
    image: image4,
   url: "https://www.linkedin.com/in/unavailable/",
   },
 
];


function Card2() {
  return (
    <>
    <h1 className="hero">Our Accounting Affiliates</h1>
    <div className="container d-flex justify-content-center align-items-center h-100">
     
      <div className="row">
        {card2.map(({ title,name, university,text, image, url, id }) => (
          <div className="col-md-3" key={id}>
            <Card1 imageSource={image} title={title} name={name} university={university} text={text} url={url} />
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

export default Card2;