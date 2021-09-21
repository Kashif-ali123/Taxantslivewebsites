import React from 'react';
import emailjs from 'emailjs-com';
import { FooterContainer } from '../containers/footer';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0purbja', 'template_y6d76tl', e.target, 'user_HcofAE5dyJJqJ6M6T1LSJ').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <>
        <div className="container "
        style={{marginTop:"50px", width:"80%", 
        // backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2El47pcFCDmAaKL8qwfbE0IiDJ30NYjj8LXkDVCF07UVf_CSL5w73GLAbR8-NQBALIU&usqp=CAU')",
        backgroundPosition: "center",
        backgroundSize:"cover",
        }}>
            <h1 style={{marginTop: "25px",fontFamily:"Open Sans sans-serif", fontSize:"30px", fontWeight:"bold"}}>Drop us a line!</h1>
            <p style={{textAlign:"center", marginTop:"15px",fontFamily:"Open Sans sans-serif", fontSize:"18px"}}>We love our customers, so feel free to visit during normal business hours.</p>
            <form className="row" style={{margin:"25px 85px 75px 100px", width: "100%" }} onSubmit={sendEmail}>
              
                <label style={{ marginLeft:"100px", fontWeight:"bold", fontSize:"21px"}}>Name<span style={{color:"red", fontSize:"25px", fontWeight:"bold", marginLeft:"5px", marginTop:"10px"}}>*</span></label>
                <input type="text" name="name" style= {{height:"80px", width:"700px", marginLeft:"100px"}} className = "form-control" />
                <label  style={{ marginLeft:"100px", fontWeight:"bold", fontSize:"21px"}}>Email <span style={{color:"red", fontSize:"25px", fontWeight:"bold", marginLeft:"5px", marginTop:"10px"}}>*</span></label>
                
                <input type="email" name="user_email" style= {{height:"80px", width:"700px", marginLeft:"100px"}} className = "form-control" />
               
                <label  style={{ marginLeft:"100px", fontWeight:"bold", fontSize:"21px"}}>Subject<span style={{color:"red", fontSize:"25px", fontWeight:"bold", marginLeft:"5px", marginTop:"10px"}}>*</span></label>
                <input type="text" name="subject" style= {{height:"80px", width:"700px", marginLeft:"100px"}} className = "form-control" />
                <label  style={{ marginLeft:"100px", fontWeight:"bold", fontSize:"21px"}}>Phone </label>
                <input type="number" name="phone" style= {{height:"80px", width:"700px", marginLeft:"100px"}} className = "form-control" />
                <label  style={{ marginLeft:"100px", fontWeight:"bold", fontSize:"21px"}}>Your Company</label>
                <input type="text" name="company" style= {{height:"80px", width:"700px", marginLeft:"100px"}} className = "form-control" />
              
                <label  style={{ marginLeft:"100px", fontWeight:"bold", fontSize:"21px"}}>Message <span style={{color:"red", fontSize:"25px", fontWeight:"bold", marginLeft:"5px", marginTop:"10px"}}>*</span></label>
                <textarea name="message" rows="4"  style= {{ width:"700px", marginLeft:"100px"}} className= "form-control" />
                <input type="submit" value="Send Message" className= "form-control btn btn-primary" style={{marginTop:"30px", height:"70px",width:"700px", marginLeft:"100px"}} />
            
            </form>
        </div>
        <FooterContainer />
        </>
    )
}

export default Contact;
