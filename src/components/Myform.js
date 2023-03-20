import React, { useEffect, useState } from 'react'
import Usersdata from './Usersdata'

 // getData from Localstorage

 const getdataSL = () => {
    const getuserdata = localStorage.getItem('users')
    if (getuserdata) {
        return JSON.parse(getuserdata)
    }
    else{
        return []
    }
}

const Myform = () => {
    const [data,setData] = useState(getdataSL())
    const [firstName,setfirstName] = useState("")
    const [lastName,setlastName] = useState("")
    const [email,setEmail] = useState("")

    const handleSubmitdata = (e) => {
        e.preventDefault()
        // creating object and store in localstorage
        const userdata = ({
            firstName,
            lastName,
            email
        })  
        setData([...data,userdata])
        setfirstName('')
        setlastName('')
        setEmail('')
    }

    const deleteData = (firstName) => {
        console.log(firstName)
        const filteruser = data.filter((element) => {
            console.log(element.firstName);
            return element.firstName !== firstName
        })

        setData(filteruser)
    }

    useEffect(() => {
        localStorage.setItem('users' , JSON.stringify(data))
    },[data])

  return (
    <div className='wrapper'>
    <div className='main'>
      <div className='form-container'>
        <form autoComplete='off' className='form-grop' onSubmit={handleSubmitdata}>
            <label>FirstName{firstName}</label>
            <input type='text' placeholder='Enter First Name' className='form-control' onChange={(e) => setfirstName(e.target.value)}  required/>
            <br></br>
            <label>LastName{lastName}</label>
            <input type='text' placeholder='Enter Last Name' className='form-control' onChange={(e) => setlastName(e.target.value)} required/>
            <br></br>
            <label>Email{email}</label>
            <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required/>
            <br></br>
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      </div>
      <div className='view-container'>
        {data.length > 0 && 
        <>
            <div className='reponsive-table'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Usersdata userData={data} deleteData={deleteData}/>
                    </tbody>
                </table>    
            </div>
        </>}
        {data.length < 1 && <div>Data Nor Found</div>}
      </div>
      </div>
    </div>
  )
}

export default Myform
