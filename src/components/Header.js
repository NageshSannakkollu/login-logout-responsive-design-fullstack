import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import Cookies from "js-cookie"
import "../components/styles/header.css"


const Header = () => {
    const navigate = useNavigate()
    const clickOnLogout = () => {
        Cookies.remove("jwtToken")
        navigate("/")
    }
  return (
    <nav className='nav_container'>
    <div className='nav_container_list_items'>
        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1757166908/klickks_logo_xbzw0k.png' alt='Logo' className='logo-image' />
        <p>Customer</p>
        <p>Photographer</p>
        <p>About Company</p>
        <p>Contact Us</p>
    </div>
        <div className='nav_button_container'>
            <FiLogOut className="medium_logout_button" onClick={clickOnLogout}/>
            <button type='button' className='logout_button' onClick={clickOnLogout}>Logout</button>
        </div> 
    </nav>
  )
}

export default Header