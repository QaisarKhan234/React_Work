import React from 'react'
import { useState } from 'react'


const UserForm = () => {

    let [name, setName] = useState('')
    let [devName, setDevName] = useState('')
    let [email, setEmail] = useState('')
    let [position, setPosition] = useState('')
    let [satisfied, setSat] = useState('')
    let [notSatisfied, setNotSat] = useState('')
    let [message, setmessage] = useState('')

    let [reviews, setReviews] = useState([])


    const SubmitFunc = (e) => {
        e.preventDefault(); //prevents page refresh

        let userReview = { id: Math.floor(Math.random() * 1000), name: name, devName: devName, email: email, position: position, satisfied: satisfied, notSatisfied: notSatisfied, message: message }
        console.log(userReview)

        setReviews([...reviews, userReview])

        setName(''); setDevName(''); setEmail(''); setPosition(''); setSat(''); setNotSat(''); setmessage('')

        disableForm();
    }
    function disableForm(){
        
    }

    const [wordCount, setWordCount] = useState(0);
    const [totalCount, setTotalCount] = useState(50);

    const [hidden, setHidden] = useState(true);

    

    return (
        <div className='container'>
            <form className='m-5' onSubmit={SubmitFunc} >
                <div class="row mb-4">
                    <div class="col">
                        <div class="form-outline">
                            <input value={name} type="text" id="form6Example1" class="form-control" onChange={(e) => { setName(e.target.value) }} />
                            <label class="form-label fw-bold" for="form6Example1">USER NAME</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-outline">
                            <input value={devName} type="text" id="form6Example2" class="form-control" onChange={(e) => { setDevName(e.target.value) }} />
                            <label class="form-label fw-bold" for="form6Example2">DEVELOPER NAME</label>
                        </div>
                    </div>
                </div>


                <div class="form-outline mb-4">
                    <input value={email} type="email" id="form6Example3" class="form-control" onChange={(e) => { setEmail(e.target.value) }} />
                    <label class="form-label fw-bold" for="form6Example3">USER EMAIL</label>
                </div>


                <div class="form-outline mb-4">
                    <input value={position} type="text" id="form6Example4" class="form-control" onChange={(e) => { setPosition(e.target.value) }} />
                    <label class="form-label fw-bold" for="form6Example4">Position</label>
                </div>


                <p class="fw-bold">ARE YOU SATISFIED?</p>
                <div class="form-check mb-2" >
                    <input class="form-check-input" type="radio" name="exampleForm" value='Satisfied' id="radioExample1" onChange={(e) => { setSat(e.target.value) }} />
                    <label class="form-check-label" for="radioExample1">
                        Satisfied
                    </label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" name="exampleForm" value='unSatisfied' id="radioExample2" onChange={(e) => { setNotSat(e.target.value) }} />
                    <label class="form-check-label" for="radioExample2">
                        Unsatisfied
                    </label>
                </div>


                <div class="form-outline mb-4">
                    <textarea class="form-control" id="form6Example7" rows="4" 
                        onChange={(e) => { setmessage(e.target.value); 
                                            setWordCount(e.target.value.length); 
                                            setTotalCount(50-e.target.value.length);
                                        }}
                        maxlength='50' required>
                    </textarea>
                    <label class="form-label fw-bold" for="form6Example7" >MESSAGE</label>
                    
                    <p className='word-count'>Word Count: {wordCount}</p>
                    <p className='word-count'>Words Left: {totalCount}</p>
                    
                </div>


                <button type="submit" class="btn btn-primary btn-block mb-4" >Place order</button>
            </form>
            {
                reviews.map((show)=>{
                    let {id,name,devName,email,position,satisfied,message}=show
                     return <>
                        <div className="show">
                            <p>id: {id}</p>
                            <p>NAME: {name}</p>
                            <p>Developer: {devName}</p>
                            <p>Email: {email}</p>
                            <p>Position</p>
                            <p>satisfied</p>
                        </div>
                     </>   
                })
            }
        </div>
    )
}

export default UserForm
