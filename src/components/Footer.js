import React from 'react'
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
        <div className="main_footer">
           <div className="quick_links">
             <h4>Quick Links</h4>
             <ul>
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/">Explore Events</NavLink></li>
                 <li><NavLink to="/">Login/Register</NavLink></li>
                 <li><NavLink to="/">About US</NavLink></li>
             </ul>
           </div>

           <div className="contact_us">
             <h4>Contact Us</h4>
             <ul>
                 <li>Email:  <NavLink to="/">etsamescoe2021@gmail.com</NavLink></li>
                 <li>Phone:  <NavLink to="/">+91-7898745687</NavLink></li>
                 <li>Address:<NavLink to="/">19, Late Prin. V.K. Joag Path, Wadia College Campus,<br></br> Off, Bund Garden Rd, Pune, Maharashtra 411001</NavLink></li>
                 
             </ul>
           </div>
           
        </div>
    )
}

export default Footer
