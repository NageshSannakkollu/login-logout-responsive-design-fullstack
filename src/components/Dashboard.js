import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Cookies from 'js-cookie'
import Popup from "reactjs-popup"
import axios from 'axios'
import UserCard from './UserCard'

import "../components/styles/dashboard.css"
import { toast } from 'react-toastify'



const Dashboard = () => {
    const [usersList,setUsersList] = useState([])
    const[deleteSpecificUser,setDeleteUser] = useState(true)
    const navigate = useNavigate()
    const jwtToken = Cookies.get("jwtToken");
    // console.log("jwtToken:",jwtToken)
    useEffect(()=> {
        if(jwtToken === undefined){
        navigate("/login")
    }
    },[])

    useEffect(() =>{
        const getUsersList = async() => {
            if(deleteSpecificUser){
                setDeleteUser(false)
            
            const response = await axios.get("http://localhost:3036/api/users")
            const usersData = await response.data.users
            setUsersList(usersData)
        }
    }
        getUsersList()
    },[deleteSpecificUser])

    const deleteUser = async(id) => {
    // console.log("delete Id:",id)
    const response = await axios.delete(`http://localhost:3036/api/user/${id}`)
    
      if(response.data.success){
        toast.success("Delete Job Successfully")
        setDeleteUser(true)
      }
      else{
        toast.error(response.data.message)
      }
  }

    // console.log("usersList:",usersList)
  return (
    <div>
        <Header/>
        <div className='dash_board_main_container'>
            <div className='dash_board_inside_container'>
                <div className='dashboard_headers'>
                    <h2>Making your moment,</h2>
                    <h1>Picture Perfect!</h1>
                </div>
                <div className='dashboard_description_container'>
                    <p>Klickks, the only platform you need to</p>
                    <p>book photographers for any events.</p>
                </div>
                <Popup 
                    modal
                    trigger={<button type='button' className='download_klicks_app_button'>
                    Users List </button>}
                >   
                    {close => (
                        <div className='users_popup_container'>
                        <ul className='user_list_card_container'>
                            {usersList.map((user) => (
                                <UserCard key={user.id} userDetails={user} deleteOneUser={deleteUser}/>
                            ))}
                        </ul>
                        <button type='button' onClick={() => close()}>Close</button>
                    </div>
                    )}
                    
                </Popup>
            </div>
        </div>
    </div>
  )
}

export default Dashboard