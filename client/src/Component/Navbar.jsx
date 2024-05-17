import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink style={({isActive})=> isActive ? {color:'white'} :{color:'lightgray'}} to={'/'}>Home</NavLink> 
       <NavLink style={({isActive})=> isActive ? {color:'white'} :{color:'lightgray'}}  to={'/cartabc'}>Cart</NavLink>
    </div>
  )
}

export default Navbar