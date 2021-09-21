import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup, 
  CardSubtitle, CardBody
} from 'reactstrap';
import { FooterContainer } from "../containers/footer";

// const data = [
//   {
//     title: 'Basic',
//     content: [
//       {
//         price: '£29.99',
//         space: '1 GB of space',
//         user: '1 user',
//         support: '24/7 support',
//         backup: 'Safe, reliable backup',
//         access: 'Access from anywhere'
//       }
//     ]
//   },
//   {
//     title: 'Premium',
//     content: [
//       {
//         price: '£59.99',
//         space: '5 GB of space',
//         user: '5 users',
//         support: '24/7 support',
//         backup: 'Safe, reliable backup',
//         access: 'Access from anywhere'
//       }
//     ]
//   },
//   {
//     title: 'Enterprise',
//     content: [
//       {
//         price: '£99.99',
//         space: 'Unlimited space',
//         user: '15 users',
//         support: '24/7 support',
//         backup: 'Safe, reliable backup',
//         access: 'Access from anywhere'
//       }
//     ]
//   }
// ];

const Design=(props) => {
  return (
<>
      {/* <h1 className="design">Pricing</h1> */}
      <h1 style={{marginTop:"100px", textAlign:"center"}}> Pricing Table</h1>
     <p style={{textAlign:"center", marginTop:"30px", fontSize:"20px", fontFamily:"sans-serif"}}>Overhead costs are far too high, state support is dropping, and college tuition is far too expensive. Colleges are pricing themselves out of existence. We are<br></br> market based and have to differentiate our product in many ways; pricing isn't the only one.</p>
     <h1 className="fees"> Tax fees if Student</h1>
     {/* <span className="a"> $ 29.99</span> */}
      <CardGroup className="price-card" style={{width:"80%", marginLeft:"170px", justifyContent:"space-between"}}>
      <Card className="card-img" >
        {/* <CardImg className="img3" top  src="/assets/home.jpg" /> */}
        <CardBody className="card-body">
          <CardTitle tag="h3"  style={{ color:"black", fontSize:"25px", fontWeight:"bold",fontFamily:"Open Sans sans-serif", marginBottom:"20px"}}>Basic</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">$29.99</CardSubtitle>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Direct Deposit Form</CardText>
          <CardText style={{ color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Photo id</CardText>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Tuition Form</CardText>
          <CardText style={{ color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Income forms T4s and T4As</CardText>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Timing 9am-6pm</CardText>
          
         <Link to="/signup"> <Button style={{backgroundColor:"red",fontSize:"30px", fontFamily:"Open Sans sans-serif", border:"none"}}>Sign up</Button></Link>
        </CardBody>
      </Card>
      <Card className="card-img">
        {/* <CardImg className="img3" top   src="/assets/count.png"  /> */}
        <CardBody className="card-body">
          <CardTitle tag="h3"  style={{ color:"black", fontSize:"25px", fontWeight:"bold",fontFamily:"Open Sans sans-serif", marginBottom:"20px"}}>Person</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">$99.9</CardSubtitle>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Direct Deposit Form</CardText>
          <CardText style={{ color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Photo id</CardText>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Tuition Form</CardText>
         
          <CardText style={{ color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Income forms T4s and T4As</CardText>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Timing 9am-6pm</CardText>
          <Link to="/signup"> <Button style={{backgroundColor:"red",fontSize:"30px", fontFamily:"Open Sans sans-serif", border:"none"}}>Sign up</Button></Link>
        </CardBody>
      </Card>
      <Card className="card-img" >
        {/* <CardImg className="img3" top src="/assets/mn.jpg"  /> */}
        <CardBody className="card-body" >
          <CardTitle tag="h3" style={{ color:"black", fontSize:"25px", fontWeight:"bold",fontFamily:"Open Sans sans-serif", marginBottom:"20px"}}>Home</CardTitle>
          <CardSubtitle tag="h2" className="mb-2 text-muted">$199.9</CardSubtitle>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Direct Deposit Form</CardText>
          <CardText style={{ color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Photo id</CardText>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Tuition Form</CardText>
          <CardText style={{ color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Income forms T4s and T4As</CardText>
          <CardText style={{backgroundColor:"#f5f5f5", color:"black", fontSize:"25px", fontWeight:"400",fontFamily:"Open Sans sans-serif"}}>Timing 9am-6pm</CardText>
          
      
          <Link to="/signup"> <Button style={{backgroundColor:"red",fontSize:"30px", fontFamily:"Open Sans sans-serif", border:"none"}}>Sign up</Button></Link>
        </CardBody>
      </Card>
    </CardGroup>
    <FooterContainer />
    </>
  );
}

export default Design;
