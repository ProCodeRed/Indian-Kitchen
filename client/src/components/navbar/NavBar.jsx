import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [ActiveMenu, setActiveMenu] = useState("home")
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__wrap'>
                    <img className='navbar__logo' src={assets.logo} />
                    <ul className='navbar__menu'>
                        <Link to={'/'} className={ActiveMenu==="home" && "active"} onClick={() => setActiveMenu("home")}>home</Link>
                        <a href='#explore-menu' className={ActiveMenu==="menu" && "active"} onClick={() => setActiveMenu("menu")}>menu</a>
                        <a href='#app-download' className={ActiveMenu==="mobile-app" && "active"} onClick={() => setActiveMenu("mobile-app")}>mobile-app</a>
                        <a href='#footer' className={ActiveMenu==="contact-us" && "active"} onClick={() => setActiveMenu("contact-us")}>contact-us</a>
                    </ul>
                    <div className='navbar__right'>
                        <img src={assets.search_icon} />
                        <div className='navbar__search-icon'>
                            <img src={assets.basket_icon} />
                            <div className='dot'></div>
                        </div>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar