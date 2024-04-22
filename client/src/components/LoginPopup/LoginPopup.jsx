import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowlogin }) => {
    const [currentState, setCurrentState] = useState("Signup")
    const closePopupHandler = () => {
        setShowlogin(false)
        document.body.style.overflow = "auto"
    }
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={closePopupHandler} />
                </div>
                <div className="login-popup-input">
                    {
                        (currentState !== "login") && <input type="text" name="" id="" placeholder='Your Name' required />
                    }
                    <input type="email" name="" id="" placeholder='Your Email' required />
                    <input type="password" name="" id="" placeholder='Password' required />
                </div>
                <button>{currentState === "signup" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" required />
                    <p>By continuing, I agree the terms of use & privacy policy.</p>
                </div>
                {
                    (currentState === "login") ? <p>Create a new account? <span onClick={() => setCurrentState("signup")}>Click here</span></p> : <p>Alreday and account ? <span onClick={() =>  setCurrentState("login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup