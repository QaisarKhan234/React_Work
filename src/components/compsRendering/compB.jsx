import React from 'react'
import CompC from './compC'
// import {AppContext} from './counter'
// import { useContext } from 'react'
const CompB = (count) => {
  return (
    <div>
        this is component B
      <CompC count={count}/>
    </div>
  )
}

export default CompB
