import React from 'react'
import Product from './Product';
import abc from '../assets/taxants.jpg'
import count from '../assets/taxant1.jpg'
import image3 from '../assets/taxant2.jpg'
import image4 from '../assets/taxant4.jpg'
import image5 from '../assets/taxant5.jpeg'
import image6 from '../assets/taxants6.jpeg'
import image7 from '../assets/taxant7.jpg'
import image8 from '../assets/taxant8.jpg'


const pros = [
    {
      id: 1,
    
      image: abc
      // url: "https://faztweb.com",
    },
    {
      id: 2,
    
    
      image: count,
      // url: "https://blog.faztweb.com",
    },
    {
      id: 3,
   
      image: image3,
      // url: "https://faztweb.com",
    },
    {
        id: 4,
     
        image: image4,
        // url: "https://faztweb.com",
      },
      {
        id: 5,
     
        image: image5,
        // url: "https://faztweb.com",
      },
      {
        id: 6,
     
        image: image6,
        // url: "https://faztweb.com",
      },
      {
        id: 7,
     
        image: image7,
        // url: "https://faztweb.com",
      },
      {
        id: 8,
     
        image: image8,
        // url: "https://faztweb.com",
      },
   
  ];
  
function pro() {
    return (
        <div className="row">
        {pros.map(({  image,  id }) => (
          <div className="col-md-4" key={id}>
            <Product  imageSource={image}  />
          </div>
        ))}
   </div>
    )
}

export default pro
