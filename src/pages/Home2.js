import React from 'react'
import Home1 from './Home1';
import abc from "../assets/a.jpg";
import count from '../assets/b.jpg'
import image3 from '../assets/c.jpg'



const home2 = [
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
   
   
  ];
  
function Home2() {
    return (
        <div className="row">
        {home2.map(({  image,  id }) => (
          <div className="col-md-3" key={id}>
            <Home1  imageSource={image} />
          </div>
        ))}
   </div>
    )
}

export default Home2
