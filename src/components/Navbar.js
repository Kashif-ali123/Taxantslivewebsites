import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
// import Button from "./Button";
import Dropdown from "./Dropdown";
import {FaFacebookF, FaInstagram} from 'react-icons/fa';
import {AiFillTwitterSquare} from 'react-icons/ai';
import Logo2 from "./Logo2";
import Logo4 from "../pages/Logo4";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
   
    <div className="book">
    <Logo4  />
    
       <FaFacebookF className="facebook" />
       <AiFillTwitterSquare className="twitter" />
       <FaInstagram className="instagram" />
       </div>
    
      
      <nav className="navbar">
  
  <div className="logoa">
        <Link to="/" className="navbar-logo" >
         <Logo2  />
        </Link>
        </div>
        
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "More") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
          
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
