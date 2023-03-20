import React from 'react'
import { Icon } from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const Usersdata = ({userData,deleteData}) => {
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
    </tr>
  ))

}

export default Usersdata
