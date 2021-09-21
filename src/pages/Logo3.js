import React from "react";
// import PropTypes from "prop-types";



function Logo3 ({imageSource}){

return(
    <div className="overflows">
    <img src={imageSource} style={{width:"auto", marginLeft:"150px", display:"flex", overflow:"hidden", height:"70px"}} />
  </div>
)
}

// product.propTypes = {
//     // title: PropTypes.string.isRequired,
//     // text: PropTypes.string,
//     // url: PropTypes.string,
//     imageSource: PropTypes.string
//   };
  export default Logo3;