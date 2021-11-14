import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ftco-navbar-light site-navbar-target"
		id="ftco-navbar"> <div class="container">
        <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
				data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>
            
        <div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav nav ml-auto">
					<NavLink  to="/" className="nav-link"><span>Home</span></NavLink>
					<NavLink  to="/about" className="nav-link"><span>About</span></NavLink>
					<NavLink  to="/contact" className="nav-link"><span>Contact</span></NavLink>
					<NavLink  to="/signup" className="nav-link"><span>Registration</span></NavLink>
					<NavLink  to="/login" className="nav-link"><span>login</span></NavLink>
                    <NavLink  to="/logout" className="nav-link"><span>logout</span></NavLink>
				</ul>
			</div>
            </div>
            
               
        </nav>
        </>
    )
}

export default Navbar