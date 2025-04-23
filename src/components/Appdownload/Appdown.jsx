import React from 'react'
import "./Appdown.css"
import {assets} from "../../assets/assets"

const Appdown = () => {
  return (
    <div className='app-down' id='app-down'>
        <p>For Better Experence Download <br /> Tomato App</p>
        <div className="app-down-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdown