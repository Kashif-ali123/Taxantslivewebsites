import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import "./card1.css";

function Card1({ imageSource, title, name,university, text, url }) {
  return (
    <>
    <div className="card text-center  animate__animated animate__fadeInUp">
      <div className="over">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body " style={{fontFamily:"Open Sans sans-serif", }}>
        <h4 className="card-title" style={{fontFamily:"Open Sans sans-serif", marginTop:"-50px"}}>{title}</h4>
        <h5 className="card-title" style={{fontFamily:"Open Sans sans-serif"}}>{name}</h5>
        <h4 className="card-title" style={{fontFamily:"Open Sans sans-serif"}}>{university}</h4>
        <p className="card-text text-black" style={{fontFamily:"Open Sans sans-serif"}}>{text}</p>
        {/* <p className="card-text text-secondary">
          {text
            ? text
            : "CPA by profession but Entrepreneur at heart. After working in the Manufacturing, Financial Services and IT firms, I am motivated to start something of my own, Taxants Inc. Taxants Inc. is a platform that helps students in getting their taxes filed in a simple, fast and secure manner.."}
        </p> */}
       
        <a
         href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-black border-0 " style={{fontSize:"20px", fontFamily:"Open Sans sans-serif", backgroundColor:"red", color:"white"}}
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
     
    </div>
  </>
   
  );
}

Card1.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card1;
