import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import imagbg2 from "../asstes/logo.svg";
import { Redirect, Router, Routes, Navigate, Link } from "react-router-dom";
import './Home.css';
function Home() {
 
  return (
     
    <>
     
        <div>
        
           
       {/* <div> 
           <img
          alt=""
          src={imagbg2}
          className="img"
        />
         <div className='heading'>
            <p>Food's Restaurant</p>
            </div>
       
        </div> */}
       


        </div>
        <div className='second_heading'>
            <p>Welcome to Food's
                <br></br>
              &nbsp;&nbsp;  Kitchan
              <div>
              <Link to="/Cards">
                      <button  className='menu_button'>GO TO MENU</button>
                      </Link>
              {/* <Link to="/Cards">
            <button className='menu_button'>GO TO MENU</button>
            </Link> */}
        </div>
            </p>
           
        </div>
        <div className="bottom">
            <h1></h1>
        </div>
    </>
  )
}

export default Home