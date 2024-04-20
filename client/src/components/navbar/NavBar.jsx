import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
const NavBar = () => {
    const [ActiveMenu, setActiveMenu] = useState("home")
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar__wrap'>
                    <img className='navbar__logo' src={assets.logo} />
                    <ul className='navbar__menu'>
                        <li className={ActiveMenu==="home" && "active"}>home</li>
                        <li className={ActiveMenu==="menu" && "active"}>menu</li>
                        <li className={ActiveMenu==="mobile-app" && "active"}>mobile-app</li>
                        <li className={ActiveMenu==="contact-us" && "active"}>contact-us</li>
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