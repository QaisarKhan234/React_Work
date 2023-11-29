import React from 'react'
import CompB from './compB'

const CompA = (count) => {
  return (
    <div>
        This is component A
      <CompB count={count}/>
    </div>
  )
}

export default CompA
