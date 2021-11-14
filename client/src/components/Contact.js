import React from 'react'
import Navbar from './Navbar.js';
import "./main.css";

const Contact = () => {
    
        const message = () => { 
        window.alert("Your Message sended succesfully")}
    

    return (
        <>
        <Navbar/>
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				

				<form align="center" className="login100-form validate-form">
					<span className="login100-form-title">
						Leave a message...
					</span>
          <div className="wrap-input100 validate-input">
             
            <input className="input100" type="text" name="name" autoComplete="off"
             placeholder="Your Name"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email"  autoComplete="off"
            
            placeholder="Your Mail"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

                    <div className="wrap-input100 validate-input" >
						<input className="input100" type="textarea" name="textarea"  autoComplete="off"
            
            placeholder="Your Message"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn"onClick={message}>
							Submit
						</button>
					</div>

					
					
				</form>
			</div>
		</div>
	</div>
	
	


        


        </>
    )
}

export default Contact
