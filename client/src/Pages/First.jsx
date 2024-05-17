import React, { useContext } from 'react'
import axios from 'axios'
import { Usercontext } from './Statemanagement'

const First = () => {

    const {dispatch}=useContext(Usercontext)


    async function display(){
        try{
const apidata=await axios.get('https://jsonplaceholder.typicode.com/users')
dispatch({ok:"success",datas:apidata.data})
console.log(apidata.data);
        }catch(err){
            console.log(err);
        }
    }



  return (
    <>
  <button onClick={display}>Api fetch</button>
    </>
  )
}

export default First
