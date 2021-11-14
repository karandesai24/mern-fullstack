import React from 'react'
import {useState}from 'react'
import Navbar from './Navbar.js';
import { NavLink,useNavigate } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import "./Signup.css";
import "./main.css";
import "./util.css";
import img from "./img.png";



const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser=async (e) =>{
        e.preventDefault();
       

        const res =await fetch('/signin',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
              email,password
        

        })
    });
    const data=res.json();
    if(res.status===400 || !data){
        window.alert("Invalid");
    }else{
        window.alert("succesfull");
        navigate("/homepage");

    }
}

    return (
        <>
        <Navbar/>
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={img} alt="IMG"/>
                    </div>
                    <form method="POST" className="login100-form validate-form">
                        <span className="login100-form-title">
						Member Login
                        </span>
                        <div className="wrap-input100 validate-input">
                            <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email"  autoComplete="off" value={email}
                            onChange={(e)=>setEmail(e.target.value)} placeholder="Your Mail"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100"> 
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    <div className="wrap-input100 validate-input" data-validate = "Password is required">
                        <input className="input100" type="password" name="password" autoComplete="off"  value={password}
                        onChange={(e)=>setPassword(e.target.value)
                        } placeholder=" Your Password"/>
						<span className="focus-input100">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
						
                        <span className="symbol-input100">
							
						</span>
                        
					</div>
                    
                   

                    <div className="container-login100-form-btn">
						<button className="login100-form-btn" id="signup" name="sigin" value="Login" onClick={loginUser}>
							Login
						</button>
					</div>

					
					<div class="text-center p-t-10">
						<NavLink className="txt2" to="/signup">
							Not resgisterd ?
							<i className="fa" aria-hidden="true"></i>
						</NavLink>
					</div>
                    </form>
                </div>
                </div>
            </div>

        
        </>
    )
}

export default Login