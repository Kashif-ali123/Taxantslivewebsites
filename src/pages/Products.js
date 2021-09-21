import React from "react";
import Cards from '../components/Cards'
import Pro from "./Pro";
import Card from '../components/Card';
import {FooterContainer } from '../containers/footer';
import Card2 from "../components/Card2";



function Products() {
  return (
    <>
      {/* <h1 className="products"></h1> */}
      <hr style={{marginLeft:"250px",marginRight:"250px", color:"#000" }}></hr>
      <p style={{marginLeft:"250px",fontSize:"20px", fontFamily:"Open Sans sans-serif",lineHeight:"1.6",fontWeight:"400",marginTop:"20px"  }}> Taxants Inc. is a platform to connect tax payers to the accountants. We are a startup made up of experienced professionals from different backgrounds (Accounting, Marketing<br></br> and Real Estate) with a common goal of making tax filing a simple, fast and secure process.</p>
      <p style={{marginLeft:"250px",fontSize:"20px", fontFamily:"Open Sans sans-serif",lineHeight:"1.6" ,fontWeight:"400" }}>Taxants.ca connects students to accountants for filing taxes from the convenience of their home. Through a simple process of taking pictures on phone, and submitting to our<br></br> accountants the students can get their taxes filed. This is useful as this saves students the hassle of booking appointments with pricey accountants, taking buses during the<br></br> exam season and snowy weather just to get something done in 5 mins rather than a couple of hours. </p>
      <p style={{marginLeft:"250px" ,fontSize:"20px", fontFamily:"Open Sans sans-serif",lineHeight:"1.6",fontWeight:"400"  }}>Taxants is not an accountant. It connects students to accountants and charges a service fee for doing so. To keep costs low Taxants provides classes to train students on how <br></br>to file taxes and eventually hires them during the season on a seasonal basis.</p>
     <hr style={{marginLeft:"250px",marginRight:"250px",fontSize:"30px", marginTop:"40px" }}></hr>
      <Cards />
      <Card2 />
      <div className="abouts">
        <h1>About Taxants</h1>
        <p>Taxants Inc. is a platform that helps in connecting students to accountants.<br></br>
It's an easy to use web app that allows students to submit documents to accountants for tax filing and other related services.<br></br>
Our simple, fast and secure platform is catered to students who want to get their taxes filed from home without the hassle of taking buses in snowy weather,<br></br> booking appointments and waiting in lines at accountant offices.</p><br></br>
<p>We started in 2018 and are now present in 6 colleges with an active database of over 1500 plus students. Our goal for 2019 is to help as many as 5000 students  across Ontario.
</p>

{/* 
<div className="taxa">
  <img src="assets/account.jpg"  />
  <span><img src="/assets/study.jpg"/></span>
  <span><img src="/assets/student.jpg"/></span>
  <span><img src="/assets/count.jpg"/></span>



</div>
<div className="taxan">
  <img src="/assets/abc.png" />
<span><img src="/assets /cv.jpg"/></span>
  <span><img src="/assets/mn.jpg"/></span>
  <span><img src="/assets/nm.jpg"/></span>



</div> */}
<Pro />
      </div>
    
      <FooterContainer />
    </>
    
  );
}

export default Products;
