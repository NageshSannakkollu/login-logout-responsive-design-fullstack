import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios";

import "../components/styles/login.css"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setShowPassword] = useState("false")
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate()

  const passwordType = showPassword ? "password":"text"
  // console.log("passwordType:",passwordType)

  const handleSubmit = async(event) => {
    event.preventDefault()
    const loginValues = {email:email,password:password}
    const response = await axios.post("https://login-logout-responsive-design-backend.onrender.com/api/auth/login",loginValues)
    console.log("Response:",response.data)
    if(response.data.success){  
      Cookies.set('jwtToken', response.data.jwtToken)
      toast.success(response.data.message)
      navigate("/")
    }else{
      toast.error(response.data.message)
  }
}

  return (
    <div className="login_page_inside_container">
      <div className="login_page_left_image">
        <div className="login_right_header_para_container">
          <h1>Need more information?connect with us right now</h1>
          <p>Klickks connects you with the best photographers for all your photoshoots.We’ll help you find the perfect match</p>
        </div>
      </div>
      {/* Login Form */}
      <div className="login_page_form_container">
      <div className="login_page_form_inside_container">
          <div className="login_form_logo_heading_para_container">
              <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1757170754/klickks_logo1_cfgpm7.png" alt="logo" className="login_logo_image" />
              <h2 className="welcome_back_title">Welcome Back</h2>
              <p className="sign_in_paragraph">Sign in to Klickks to access digital platform</p>
            </div>
            <div className="login_form_logo_heading_para_container">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="email">Email</label>
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
                  <label className="email">Password</label>
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
                  Sign In
                </button>
              </form>
               <p className="login_signup_disclaimer">Not registered yet? click here to <Link to="/signup">Signup...</Link></p>
            </div>
            <div className="login_credentials">
              <p>LoginCredentials</p>
              <p>email:sample@sample.com</p>
              <p>password:sample</p>
            </div>
          </div>
          </div>
        </div>
    )
}

export default LoginPage
