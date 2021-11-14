import React from 'react'
import { NavLink } from 'react-router-dom';
//import Navbar from './Navbar.js';
import "./Home.css";
import "./main.css"



const Home = () => {
    return (
       <>
       
           
               
       
               <h2>Welcome...</h2>
               <NavLink  to="/signup" > <div className="container-login100-form-btn"></div> <button className="button button1" id="signup" name="signup" value="Register" >
							SIGN UP
						</button></NavLink>
                        <NavLink  to="/login" >
                        <button className="button button2" id="login" name="login">
							Login
						</button> 
                        </NavLink>
						
                       
                
                
					
                    
                    
               
              
               
               
               
        
       
       </>
            
    )
}

export default Home
