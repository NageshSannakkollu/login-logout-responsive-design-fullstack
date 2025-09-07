import { useState } from "react";
import { toast } from "react-toastify";
import {Link, useNavigate } from "react-router-dom"
import axios from "axios";

import "../components/styles/login.css"

const RegisterPage = () => {
  const[name,setName] =useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState("false")

  const navigate = useNavigate()

  const passwordType = showPassword ? "password":"text"
  // console.log("passwordType:",passwordType)

  const handleSubmit = async(event) => {
    event.preventDefault()
    const loginValues = {name:name,email:email,password:password}
    const response = await axios.post("https://login-logout-responsive-design-backend.onrender.com/api/auth/signup",loginValues)
    console.log("Response:",response.data)
    if(response.data.success){  
      toast.success(response.data.message)
      navigate("/login")
    }else{
      toast.error(response.data.message)
  }
}

  return (
    <div className="login_page_inside_container">
      <div className="login_page_left_image">
        <div className="login_right_header_para_container registration_container">
          <h1>Need more information?connect with us right now</h1>
          <p>Klickks connects you with the best photographers for all your photoshoots.We’ll help you find the perfect match</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="login_page_form_container">
      <div className="login_page_form_inside_container">
          <div className="login_form_logo_heading_para_container">
             <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1757170754/klickks_logo1_cfgpm7.png" alt="logo" className="login_logo_image" />
              <h2 className="welcome_back_title">User Register</h2>
              <p className="sign_in_paragraph">Signup in to Klickks to access digital platform</p>
            </div>
            <div className="login_form_logo_heading_para_container">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                  <label className="email">User Name*</label>
                  <div className="relative">
                    <input
                      id="text"
                      type="text"
                      placeholder="Enter your name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="email">Email*</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="email">Password*</label>
                  <div className="relative">
                    <input
                      id="password"
                      type={`${passwordType}`}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div>
                    <input type="checkbox" id="checkbox" className="check_box_input" onChange={() => setShowPassword(!showPassword)}/>
                    <label htmlFor="checkbox" >Show Password</label>
                </div>
                <button
                  type="submit"
                  className="sign_in_button signup_button"
                >
                  Sign up
                </button>
                <p className="login_signup_disclaimer">Already registered? click here to <Link to="/login">Login...</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RegisterPage
