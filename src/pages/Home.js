import React from "react";
import { FaStopCircle, FaRegUser, FaLock } from 'react-icons/fa';
import { FooterContainer } from '../containers/footer';
import Home2 from './Home2';
import Image from "./Image";
import VideoPlayer from "./VideoPlayer";
import Carousel from "../Carousel";
import MultiItemCarousel from "../MultiItemCrousel";
import BootstrapMultiCarousel from "../BootstrapMulti";
import Testimonial from "../Testimonial";
import {FaPhoneAlt} from 'react-icons/fa';
import Banner1 from "./Banner1";
import Videos from "./Videos";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="home">
      <div className="text">
      <h4>CONNECTING TAXPAYERS TO <br></br> ACCOUNTANTS</h4>
      <p>Let us File your Tax...</p>
     <Link to="/signup"><button>Get Started</button></Link>
      </div>
      {/* <div className="kash">
       <Image />

      </div> */}
       
    </div>
    <div className="tax">
      <h1>WHY TAXANTS?</h1>
      <div className="fast">
        <FaStopCircle  className="icon"/>
        <p className="para">Fast</p>
        <p  className="min">5-10 minutes process for tax <br></br>filing.</p>
      </div>
      <div className="simple">
        <FaRegUser  className="icon1"/>
        <p className="param">Simple</p>
        <p  className="minute">Take pictures & submit to <br></br>accountants.</p>
      </div>
      <div className="lock">
        <FaLock  className="icon2"/>
        <p className="parama">Secure</p>
        <p  className="minutes">Safely transmitted to <br></br>accountants for tax filing.</p>
      </div>
    </div>
    <div className="cases">
     <div>
    <h1  className="a">Student Cases</h1>
    <p className="b">Out of these three which student you want to be?</p>
    </div>
    {/* <div className="images1"> */}
    <div className="mobi">
    <VideoPlayer />
    </div>
  {/* <img src="/assets/count.jpg" alt=""  /> 

    
  
  <span><img src="/assets/account.jpg" alt="" /></span>

 
   
 <span><img src="/assets/study.jpg" alt=""  /></span> */}

    {/* </div>  */}
    
  
    </div>
    
      {/* <Carousel />  */}
   
       {/* <BootstrapMultiCarousel /> */}
       <Testimonial />

       <div className="phone">
         <div className="ace">
         <FaPhoneAlt  className="be" />
         <span >
               Have questions? Get in touch today!</span>
<p >Please contact us anytime here +1647 987 4025</p>
</div>
<div style={{marginTop:"-206px", marginLeft:"1450px", width:"100%"}}>
  <Banner1  />
  </div>
       </div>
       
     <Carousel />
     <h1 style={{marginTop:"80px"}}>How To File Tax?</h1> 
       <Videos style={{outerWidth:"100%", innerWidth:"30%"}} />
    
   <FooterContainer style={{margin:"40px"}} />
    </>
  );
}

export default Home;
