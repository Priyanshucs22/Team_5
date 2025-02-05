import React, { useState } from 'react'
import './Loginpopup.css'
import {assets} from '../../assets/assets'

const Loginpopup=({setShowlogin}) =>{
    const[currState,setCurrState]=useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowlogin} src={assets.cross_icon} alt="" />
            </div>
        </form>
      
    </div>
  )
}

export default Loginpopup
