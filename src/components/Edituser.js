import React, { useEffect, useState } from 'react'


const getdataSL = () => {
    const getuserdata = localStorage.getItem('users')
    console.log(getuserdata);
    if (getuserdata) {
        return JSON.parse(getuserdata)
    }
    else{
        return []
    }
}

const Edituser = () => {
    const [data,setdata] = useState(getdataSL())
    const [firstName,setfname] = useState("")
    const [lastName,setlname] = useState("")
    const [email , setemail] = useState("")

  
    useEffect(() => {
    setfname(localStorage.getItem('fname'))
    setlname(localStorage.getItem('lname'))
    setemail(localStorage.getItem('email'))
    },[])

    function handleupdate(e){
        e.preventDefault()
        const userdata = {
            firstName,
            lastName,
            email
        }  
        console.log(userdata);
        setdata([...data,userdata])
    }

    
  return (
      <div className='wrapper'>
        <h1>Edit User</h1>
      <div className='main'>
        <div className='form-container'> 
        <form autoComplete='off' className='form-grop' onSubmit={handleupdate} >
            <label>FirstName</label>
            <input type='text' placeholder='Enter First Name' value={firstName} onChange={e => setfname(e.target.value)}  className='form-control'   required/>
            <br></br>
            <label>LastName</label>
            <input type='text' placeholder='Enter Last Name' value={lastName} onChange={e => setlname(e.target.value)} className='form-control'   required/>
            <br></br>
            <label>Email</label>
            <input type='email' placeholder='Enter Email' value={email} onChange={e => setemail(e.target.value)}  className='form-control'   required/>
            <br></br>
            <button type='submit' className='btn btn-success'>Update</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Edituser
