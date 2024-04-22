import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience Download <br/>Tomato</p>
        <div className="app-download-plateforms">
            <img src={assets.play_store} alt="play store icon" srcset={assets.play_store} />
            <img src={assets.app_store} alt="app store icon" srcset={assets.app_store} />
        </div>
    </div>
  )
}

export default AppDownload