import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfoundpage = () => {

   const navigate=useNavigate()

    setTimeout(()=>{
navigate(-2)
    },1000)

  return (
    <div style={{width:"100%",height:'700px',backgroundColor:"red",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <h1>Page not found</h1>
    </div>
  )
}

export default Notfoundpage
