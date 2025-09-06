import React from 'react'
import "../components/styles/dashboard.css"

const UserCard = (props) => {
    const {userDetails,deleteOneUser} = props
    const {id,name,email} = userDetails
    const deleteUser = ()=> {
        deleteOneUser(id)
    }
  return (
    <li className='user_card_item' key={id}>
        <p><strong>Username: </strong>{name}</p>
        <p><strong>Email: </strong>{email}</p>
        <div className='edit_delete_buttons'>
            <button type='button' className='edit_button delete_button' onClick={deleteUser}>Delete</button>
        </div>
    </li>
  )
}

export default UserCard