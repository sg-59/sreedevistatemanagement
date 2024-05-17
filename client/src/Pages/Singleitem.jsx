import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './singlepage.css'

const Singleitem = () => {

    const [state,setState]=useState([])



    const data=useParams()

    console.log("*****************************params value",data.id);

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((data)=>{
          console.log("Api data from ................",data.data.categories);
          setState(data.data.categories)
        })
      },[])

      const filteredData=state.filter((li)=>{
        return li.idCategory==data.id
      })

      console.log("single item page reloading",filteredData);
  return (
    <div>
    {filteredData.map((li)=>(
        <>
        <div className='singleBox'>
          <img className='image' src={li.strCategoryThumb} alt="" />
  <p className='title'>{li.strCategory}</p>
        </div>
        <div>
            <p>{li.strCategoryDescription}</p>
        </div>
        </>
    ))}
    </div>
  )
}

export default Singleitem
