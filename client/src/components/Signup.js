import * as React from 'react';
import {useState}from 'react'
import Navbar from './Navbar.js';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import "./Signup.css";
import "./main.css";
import "./util.css";
import img from "./img.png";


const Signup = () => {
    const navigate= useNavigate();
    const [user, setUser] =useState({
      name:"" ,email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;

    const handleInputs= (e) => {
       name=e.target.name;
       value=e.target.value;

       setUser({...user,[name]:value});
    }

    const PostData = async (e)=>{
      e.preventDefault();
      const{name,email,phone,work,password,cpassword}=user;

    const res=await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      name,email,phone,work,password,cpassword

      })
    });
    const data =await res.json();
    if(res.status===422 || !data) {
      window.alert("INVALID");


    }
    else{
      window.alert("succesfull");
      navigate("/login");


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
						Member Signup
					</span>
          <div className="wrap-input100 validate-input">
             
            <input className="input100" type="text" name="name" autoComplete="off"
            value={user.name}
            onChange={handleInputs} placeholder="Your Name"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email"  autoComplete="off"
            value={user.email}
            onChange={handleInputs}
            placeholder="Your Mail"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
          <div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="phone" autoComplete="off" 
            value={user.phone}
            onChange={handleInputs}
            placeholder="Your Phone Number"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
          <div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="work" autoComplete="off"
            value={user.work}
            onChange={handleInputs}
             placeholder="Your Profession"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="password" autoComplete="off"
            value={user.password}
            onChange={handleInputs}
            placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>

          <div className="wrap-input100 validate-input" >
						<input className="input100" type="password" name="cpassword" autoComplete="off"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Confirm your Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
          <div class="text-center">
						<NavLink className="txt2" to="/login">
							Already resgisterd ?
							<i className="fa" aria-hidden="true"></i>
						</NavLink>
					</div>
					<div className="container-login100-form-btn">
						<button className="login100-form-btn" id="signup" name="signup" value="Register" onClick={PostData}>
							Login
						</button>
					</div>

					
					
				</form>
			</div>
		</div>
	</div>
	
	


        
    </>
    )
}

export default Signup

