import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addtoData } from './Redux/Userslice';
import { Link } from 'react-router-dom';

const Reduxfirst = () => {

   const dispatch=useDispatch()

    async function display(){
        try{
const apidata=await axios.get('https://jsonplaceholder.typicode.com/users')
dispatch(addtoData(apidata.data))
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div>
       <button onClick={display}>Api fetch</button>
       <Link to={'/reducer'}>Connect to reducer page</Link>
    </div>
  )
}

export default Reduxfirst
