import React, { useContext, useEffect, useRef, useState } from 'react'
import { Appcontext } from './context'
import { Usercontext } from './Statemanagement';

const Ref = () => {

  const data=useContext(Appcontext)

  const [state,setState]=useState([])

  console.log("******usecontext value",data);

  const {user,dispatch}=useContext(Usercontext)

useEffect(()=>{
setState(user)
},[])

  console.log("//////////////////////",user);

    const fname=useRef()
    const lname=useRef()
    const email=useRef()
    const password=useRef()


function display(){
const firstName=fname.current.value
const lastName=lname.current.value
const emails=email.current.value
const passwords=password.current.value

console.log(firstName,lastName,emails,passwords);

}

function removeData(){
dispatch({ok:"remove"})

}

  return (
    <div style={{width:"100%",height:"280px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
      
      <input ref={fname} type="text" placeholder='First name' />
      <input ref={lname} type="text" placeholder='Last name'/>
      <input ref={email} type="text" placeholder='email' />
      <input ref={password} type="text" placeholder='Password' />
  <button onClick={display}>Submit</button>

{state&&state.map((li)=>(
  <>
  <h3>{li.name}</h3>
  <h3>{li.email}</h3>
  </>
))}

  <button onClick={removeData}>Remove</button>

    </div>
  )
}

export default Ref
