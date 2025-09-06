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
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const passwordType = showPassword ? "password":"text"
  // console.log("passwordType:",passwordType)

  const handleSubmit = async(event) => {
    event.preventDefault()
    const loginValues = {name:name,email:email,password:password}
    const response = await axios.post("http://localhost:3036/api/auth/signup",loginValues)
    console.log("Response:",response.data)
    if(response.data.success){  
      toast.success(response.data.message)
      navigate("/login")
    }else{
      toast.error(response.data.message)
  }
}

  return (
    <div className="login_page_main_container">
    <div className="login_page_inside_container">
      <div className="login_page_left_image">
        <div className="login_right_header_para_container">
          <h1>Advanced Dental Imaging Platform</h1>
          <p>Secure, efficient dental scan management for healthcare professionals.</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="login_page_form_container">
          <div className="login_form_logo_heading_para_container">
              <h1 className="login_page_klickks_title">User Registration</h1>
              <h2 className="welcome_back_title">Welcome Back</h2>
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
                  variant="medical"
                  className="sign_in_button"
                  size="lg"
                  disabled={isLoading}
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
