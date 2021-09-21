import React from 'react'
import Logo1 from './Logo1';
import abc from "../assets/logo-new.png";




const logo2 = [
    {
      id: 1,
    
      image: abc
      // url: "https://faztweb.com",
    },
    
   
   
  ];
  
function Logo2() {
    return (
        <div className="row">
        {logo2.map(({  image,  id }) => (
          <div className="col-md-3" key={id}>
            <Logo1  imageSource={image} className="ade" />
          </div>
        ))}
   </div>
    )
}

export default Logo2;
