import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import "../components/styles/dashboard.css"

const UserCard = (props) => {
    const {userDetails,deleteOneUser} = props
    const [userUpdateDetails,setUserDetails] = useState([])
    const {id,name,email} = userDetails
    const navigate = useNavigate()
    const deleteUser = ()=> {
        deleteOneUser(id)
    }

    useEffect(() => {
        const getSpecificUser = async() => {
            try {
                const response = await axios.get(`https://login-logout-responsive-design-backend.onrender.com/api/user/${id}`)
                const data = await response.data.users;
                // console.log("Data:",data)
                setUserDetails([data])
            } catch (error) {
                console.log(error.message)
            }
        }
        getSpecificUser()
    },[])

    // console.log("userUpdateDetails:",userUpdateDetails)

    const updateHandler = async(event) => {
        event.preventDefault()
        const userDetailsInfo = setUserDetails[0]
        console.log("userDetailsInfo:",userDetailsInfo)
        const response = await axios.put(`https://login-logout-responsive-design-backend.onrender.com/api/user/${id}`,userUpdateDetails[0])
            const data = await response.data;
            console.log("data:",data)
            if(data.success){
                toast.success(data.message)
                navigate("/")
            }else{
                toast.error(data.message)
            }
    } 

  return (
    <li className='user_card_item' key={id}>
        <p><strong>Username: </strong>{name}</p>
        <p><strong>Email: </strong>{email}</p>
        <div className='edit_delete_buttons'>
        <Popup 
            modal
            trigger={<button type='button' className='edit_button '>Edit</button>}
        >
            <div className='update_user_form_container'>
            <div className="login_page_form_inside_container">
            <div className="login_form_logo_heading_para_container">
             <h1 className='user_update_form_title'>User Update Form</h1>
              <h2 className="welcome_back_title">User Update</h2>
              <p className="sign_in_paragraph">Update to Klickks to access digital platform</p>
            </div>
            <div className="login_form_logo_heading_para_container">
              <form onSubmit={updateHandler} className="space-y-6">
              {userUpdateDetails.map(user => {
            return (
                <div key={user.id}>
                 <div className="space-y-2">
                  <label className="email">User Name*</label>
                  <div className="relative">
                    <input
                      id="text"
                      type="text"
                      placeholder="Enter your name..."
                      value={user.name}
                      onChange={(e) => setUserDetails([{...userUpdateDetails[0],name:e.target.value}])}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="email">Email*</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={(e) => setUserDetails([{...userUpdateDetails[0],email:e.target.value}])}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="email">Password*</label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={user.password}
                      onChange={(e) => setUserDetails([{...userUpdateDetails[0],password:e.target.value}])}
                      className="login_input_form"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="sign_in_button signup_button"
                >
                  Sign up
                </button>
                <p className="login_signup_disclaimer">Already registered? click here to <Link to="/login">Login...</Link></p>
                </div>
            )})}
              
              </form>
            </div>
          </div>
        </div>
        </Popup>
            <button type='button' className='edit_button delete_button' onClick={deleteUser}>Delete</button>
        </div>
    </li>
  )
}

export default UserCard