import React from 'react'
import './RegForm.css'
import { useState } from 'react'
const RegForm = () => {

    const [image,setImage] = useState('')
    const [userdata, setUserdata] = useState({
        username:'',
        email:'',
        password:''
        
    })

    function handleChange(e){
        let name = e.target.name;
        let value = e.target.value;
        setUserdata({...userdata, [name]: value})
        // console.log(userdata.username) to check how the above name array value work
    }

    async function handleClick(e){
        e.preventDefault();
        let {username, email, password} = userdata;
        let  response = await fetch('https://registration-form-96355-default-rtdb.firebaseio.com/Register.json',{
            method: 'POST',
            headers:{
                'Content-type':'appplication/json',
            },
            body:JSON.stringify({username, email, password,image})
        })
        if (response){
            alert('successfully updated')
        }
        else{
            alert('unsuccessful')
        }
    }
  return (
    <div className='containerr'>
      <div className='form-content'>
        <form onSubmit={handleClick}>
            <input 
            type="text" 
            placeholder="username" 
            value={userdata.name}
            onChange={handleChange}
            name='username'
            />
            <input 
            type="password" 
            placeholder="password" 
            value={userdata.password}
            onChange={handleChange}
            name='password'
            />
            <input 
            type="email" 
            placeholder="email" 
            value={userdata.email}
            onChange={handleChange}
            name='email'
            />
            <input type="file"
            onChange={(e)=>{setImage(e.target.files[0])}}/>
            <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default RegForm
