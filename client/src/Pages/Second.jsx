import React, { useContext } from 'react'
import { Usercontext } from './Statemanagement'

const Second = () => {
const {user}=useContext(Usercontext)

console.log("second page value",user);

  return (
    <div>
  
    </div>
  )
}

export default Second

