import React from "react";
import PropTypes from "prop-types";

import "./follow.css";

function Card5({ imageSource, title, name,university, url }) {
  return (
    <>
    <div className="card text-center  animate__animated animate__fadeInUp" style={{height:"3000px", marginBottom:"30px"}}>
      <div className="follow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body " style={{fontFamily:"Open Sans sans-serif", textAlign:"left"}}>
        <h4 className="card-title" style={{fontFamily:"Open Sans sans-serif", color:"#000", marginLeft:"20px", fontWeight:"bold"}}>{title}</h4>
        <h5 className="card-title" style={{fontFamily:"Open Sans sans-serif", color:"#000", marginLeft:"20px", fontWeight:"bold"}}>{name}</h5>
       
        {/* <p className="card-text text-black" style={{fontFamily:"Open Sans sans-serif"}}></p> */}
         <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}> Taxants Inc. is a platform to connect taxpayers to the accountants. We are a startup made up of young professionals and students from different backgrounds (Accounting, Marketing, and Real Estate) with a common goal of launching a successful product by January 2019.</p> 
         <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>We’re looking for a Web App Developer to join our remote team.</p> 
         <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>If you are a creative problem solver who wants to help turn our mission into a reality, you are at the right place!</p> 
        <h4 style={{fontFamily:"Open Sans sans-serif", textAlign:"left",color:"#000", marginLeft:"20px", marginRight:"20px",fontSize:"18px", fontWeight:"bold"}} >Requirements:</h4>
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You have 1+ years of experience with Docker, Node js , React & Native (Web and Mobile application), AWS, Cross-platform mobile application, PostgreSQL, Redis, and JavaScript/TypeScript.</p>
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You understand and have experience with cloud platforms such as Digital Ocean or AWS.</p> 
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>What we’re looking For In You:</p> 
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You have an appetite for learning and self-improvement in a timely fashion to make sure targets are not missed.</p> 
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You are committed to a high standard of integrity and work ethic.</p> 
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You are adaptable to situations when faced with challenges. We are a tiny team and so self-management is very important.</p> 
        <h4 style={{fontFamily:"Open Sans sans-serif", textAlign:"left",color:"#000", marginLeft:"20px", marginRight:"20px",fontSize:"18px", fontWeight:"bold"}} >Skills:</h4>
        <ul>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Node Js</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>React & Native (It’s a plus, for Web and Mobile application).</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>AWS</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Docker</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>PostgreSQL</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>HTML5</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>CSS/SCSS</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>JavaScript/TypeScript</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>PhoneGap</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Job Types: Part-time, Volunteer</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>If this job interests you then please email us your resume at support@taxants.ca</li><br></br>

        </ul>
        <h4 style={{fontFamily:"Open Sans sans-serif", textAlign:"left",color:"#000", marginLeft:"20px", marginRight:"20px",fontSize:"18px", fontWeight:"bold"}}>Job Title: Student Brand Ambassador</h4>
        <br></br><br></br>
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>We are looking for enthusiastic people to join our marketing department and provide creative ideas to help achieve our goals.</p> 
        <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>As a Student Brand Ambassador, you will:</p> 
        <ul>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}> Create brand awareness using our in-person survey techniques</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Use your existing connections and your networking skills to build and  strengthen Taxants Inc’s partnerships with clubs and other organizations  on your campus.</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}> Survey students to get valuable feedback on our product and communicate it to our team of developers</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Leverage your social media networks to get students engaged with our brand and our expertise.</li><br></br>
            {/* <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px"}}>PostgreSQL</li><br></br> */}
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Grow our followers for all of the social media platforms</li><br></br>
            <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You are:</p> 
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Connected. You’re an involved member of the campus community and you  consistently look for opportunities to expand your network even  further.</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}> Enthusiastic. You get so excited  about helping students achieve their goals that others naturally buy  into what you’re saying. You can captivate any audience with your  excitement and your expertise, making you a great presenter.</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Resilient. You’re a competitor with grit who will do whatever it takes  to get the job done. Nothing will stop you from meeting your goals.</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Resourceful. You’re quick, you’re clever, and you’re solution-oriented.  You can take information and run with it – you don’t rely on a lot of  direction.</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Self-Motivated. You’re comfortable working independently and can motivate yourself to accomplish anything.  You’re great at managing your time and are committed to completing your  tasks.</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}> A Social Influencer. You love using  social media and you believe that it’s a great way to engage students  with information they need. You’re excited to use social media to  interact with your peers about their educational goals in an authentic  way.</li><br></br>
            <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>You are also:</p><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}> A current sophomore, junior, or senior on campus, able to commit to at least 3 months</li><br></br>
            <li style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Tech-savvy and excited to stay engaged in a remote workforce.</li><br></br>
            <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>Tech-savvy and excited to stay engaged in a remote workforce.</p><br></br>
            <p style={{textAlign:"left",fontFamily:"Open Sans sans-serif",color:"#777", marginLeft:"20px", marginRight:"20px",fontSize:"18px"}}>If this interests you, we would love to hear from you! Send a copy of your resume to support@taxants.ca</p><br></br>
        </ul>
        {/* <a
       
       href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-black border-0 " style={{fontSize:"20px", fontFamily:"Open Sans sans-serif"}}
          rel="noreferrer"
        >
          Go to {title}
        </a> */}
      </div>
     
    </div>
  </>
   
  );
}

Card5.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card5;
