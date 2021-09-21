import React from 'react'
import Banner from './Banner';
import abc from "../assets/imge.png";




const banner1 = [
    {
      id: 1,
    
      image: abc
      // url: "https://faztweb.com",
    },
  
   
  ];
  
function Banner1() {
    return (
        <div className="row">
        {banner1.map(({  image,  id }) => (
          <div className="col-md-3" key={id}>
            <Banner  imageSource={image} />
          </div>
        ))}
   </div>
    )
}

export default Banner1;
