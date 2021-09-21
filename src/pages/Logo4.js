import React from 'react'
import Logo3 from './Logo3';
import abc from "../assets/123.png";




const logo4 = [
    {
      id: 1,
    
      image: abc
      // url: "https://faztweb.com",
    },
  
   
  ];
  
function Logo4() {
    return (
        <div className="row">
        {logo4.map(({  image,  id }) => (
          <div className="col-md-3" key={id}>
            <Logo3  imageSource={image}  />
          </div>
        ))}
   </div>
    )
}

export default Logo4
