import React from "react";
// import PropTypes from "prop-types";
import './banner.css';


function Banner ({imageSource}){

return(
    <div className="overflow">
    <img src={imageSource}  className="cas" />
  </div>
)
}

// product.propTypes = {
//     // title: PropTypes.string.isRequired,
//     // text: PropTypes.string,
//     // url: PropTypes.string,
//     imageSource: PropTypes.string
//   };
  export default Banner;