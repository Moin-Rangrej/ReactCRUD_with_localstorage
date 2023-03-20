import React from 'react'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import { useNavigate } from 'react-router-dom'

const Usersdata = ({userData,deleteData}) => {
    const navigate = useNavigate()
    function gettingdata(firstName, lastName ,email){
        localStorage.setItem('fname', firstName)
        localStorage.setItem('lname',lastName)
        localStorage.setItem('email',email)
        navigate('/edit')
    }
  return userData.map((user,index) => (
    <tr key={index}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>
            <button className='delete-btn' onClick={() => deleteData(user.firstName)}>
                <Icon icon={trash}/>
            </button>
        </td>
        <td>
            <button onClick={() => gettingdata(user.firstName,user.lastName,user.email)}>Edit</button>
        </td>
    </tr>
  ))

}

export default Usersdata
