import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus non rem ipsam fugiat laudantium expedita itaque, odio sunt soluta quisquam nam, debitis adipisci id, et sed asperiores quas optio? Voluptatum?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="fb" />
                    <img src={assets.twitter_icon} alt="x" />
                    <img src={assets.linkedin_icon} alt="liknedIn" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91-8399989909</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer