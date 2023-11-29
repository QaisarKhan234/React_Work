import React from 'react'
import { useState } from 'react'


const Useeffect = () => {
    // let [count,setCount] = useState(0)
    // useEffect(()=>
    // {
    //     if(count==10){
    //     console.log('use effect is called')
    //     }
    // })//[] it is empty dependency array which renderds useeffect once
  return (
    <div>
      <h3>Count</h3>
      <button onClick={()=>{setCount(count+1)}}>Add</button>
    </div>
  )
}

export default Useeffect
