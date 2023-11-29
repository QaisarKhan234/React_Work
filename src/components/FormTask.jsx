import React from 'react'
import { useState } from 'react'

const FormTask = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    let [reviews, setReviews] = useState([])

    let [label1,setLabel1]=useState('')
    let [label2,setLabel2]=useState('')
    let [label3, setLabel3]=useState('') 
    const handleCheck = (e) => {
        e.preventDefault();
        let userReview = {name: name, password: password, confirmpassword: confirmpassword }
        console.log(userReview)
        setReviews([...reviews, userReview])
        // setName(''); setPassword(''); setConfirmpassword('');
        if(name===""){
            setLabel1("Enter Name")
        }
        else{
            setLabel1("")
        }
        if(password==""){
            setLabel2("Enter Password")
        }
        else{
            setLabel2('')
        }
        if(confirmpassword=== ''){
            setLabel3("Confirm Password")
        }
        else if(confirmpassword!==password){
            setLabel3("Password don't match. Re-type Password again")
        }
        else{
            setLabel3('')
        }
    }

  return (
    <div>
      <form>
        <input type="text" id='User Name' name='User Name' placeholder='Enter Name' value={name} onChange={(e) => { setName(e.target.value) }}></input>
        <p>{label1}</p>
        <input type="password" id='password' name='password' placeholder='Enter Pass' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
        <p>{label2}</p>
        <input type="password" id='confirm password' name='confirm password' placeholder='Enter Pass' value={confirmpassword} onChange={(e) => { 
            setConfirmpassword(e.target.value)
            if (password.length-1 === confirmpassword.length){
                if(password !== confirmpassword){
                    setLabel3('Confirm Password')
                }
                else if(password = confirmpassword){
                    setLabel3('Password confirmed')
                }
            
            }
            }}></input>
        <p>{label3}</p>
        <button onClick={handleCheck} >Submit</button>
      </form>
    </div>
  )
}

export default FormTask
