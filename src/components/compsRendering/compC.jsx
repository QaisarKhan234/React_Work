import React from 'react'
import { useGlobalContext } from './counter'
import CompD from './compD'


const CompC = () => {
  let count=useGlobalContext()
  return (
    <>
        <div>{count}</div>
        <CompD/>
    </>
  )
}

export default CompC
