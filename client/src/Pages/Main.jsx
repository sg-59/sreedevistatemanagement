import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './main.css'
import { Link } from 'react-router-dom'

const Main = () => {

  const [state,setState]=useState([])

  
  async function display(){
    const data=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    console.log(data);
    setState(data.data.categories)
  }
 
  useEffect(()=>{
  display()
  },[])


  return (
    <>
    <div className='main'>
{state.map((li)=>(
  <Link to={`/singlepage/${li.idCategory}`}>
  <div className='Items'>
  <img src={li.strCategoryThumb} alt="" />
  <p className='title'>{li.strCategory}</p>
  </div>
  </Link>
))}
 
    </div>
  
    </>
  )
}

export default Main