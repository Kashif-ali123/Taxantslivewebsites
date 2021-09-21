import React from "react";
// import PropTypes from "prop-types";
import './logo.css';


function Logo1 ({imageSource}){

return(
    <div className="overflo">
    <img src={imageSource}  className="cla" style={{color:"#fff", marginLeft:"140px", width:"250px"}} />
  </div>
)
}

// product.propTypes = {
//     // title: PropTypes.string.isRequired,
//     // text: PropTypes.string,
//     // url: PropTypes.string,
//     imageSource: PropTypes.string
//   };
  export default Logo1;