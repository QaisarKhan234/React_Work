import React, { createContext,useContext } from 'react'
import { useState } from 'react'
import CompA from './compA'


let AppContext=createContext() 
const Counter = () => {
    const[count,setCount]=useState(0)
    // const[name,setName]=useState('Qaisar')
  return(
    <>
        <AppContext.Provider value={count}>
            <button className='btn btn-dark' onClick={()=>{
                setCount(count+1)
                console.log(count)
            }}>Increase</button>
            <CompA/>
        </AppContext.Provider>
    </>
  )
}

// Custome Hook
let useGlobalContext=()=>{
    return useContext(AppContext)
}
export {Counter, useGlobalContext}

